<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags'
  import { envVariables } from '$lib/envVariables'
  import { db } from '$lib/firebaseBase'
  import { collection, getDocs } from 'firebase/firestore'

  let cslValue
  let lcpValue
  let fidValue

  type Metrics = 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB'
  type MetricsColor = '#2BA24C' | '#F0B400' | '#E33E2A'

  const getMetric = async (name: Metrics) => {
    const items = []
    const querySnapshot = await getDocs(collection(db, name))
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
    return items
  }

  const calculateMetric = (metricData): number => {
    let sum = 0

    for (let i = 0; i < metricData.length; i++) {
      sum += metricData[i].value
    }

    return sum / metricData.length
  }

  const changeColor = (goodNum, mediumNum, val): MetricsColor => {
    if (val <= goodNum) {
      return '#2BA24C'
    } else if (val <= mediumNum) {
      return '#F0B400'
    } else {
      return '#E33E2A'
    }
  }

  // Fetch metrics
  getMetric('CLS').then((clsData) => {
    cslValue = parseFloat(calculateMetric(clsData).toFixed(2))

  })

  getMetric('LCP').then((lcpData) => {
    lcpValue = parseFloat((calculateMetric(lcpData) / 1000).toFixed(2))
  })

  getMetric('FID').then((fidData) => {
    fidValue = parseFloat((calculateMetric(fidData) / 1000).toFixed(2))
  })

  const meta = {
    title: 'Peformance | K-Sato',
    description: 'Peformance metrics of this site',
    url: envVariables.basePath,
    siteName: 'K-Sato',
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: 'k-sato-image',
    },
  }
</script>

<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    description: meta.description,
    images: [
      {
        ...meta.image,
      },
    ],
    site_name: meta.siteName,
    title: meta.title,
    type: 'website',
    url: meta.url,
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    image: meta.image.url,
    imageAlt: meta.image.alt,
  }}
/>

<!-- FIX ME
  Avoid averages and use percentile

  READ HERE: https://web.dev/vitals-field-measurement-best-practices/#avoid-averages
  -->

<h1 class="title">Peformance Metrics(WIP)</h1>
<div class="perf-container">
  <div
    class="perf-container__item"
    style={`background-color: ${
      cslValue !== undefined ? changeColor(0.1, 0.25, cslValue) : '#2BA24C'
    }`}
  >
    <h2 class="perf-container__item__title">CLS | AVG</h2>
    {#if cslValue !== undefined}
      <h2>{cslValue}</h2>
    {:else}
      <h2>Loading</h2>
    {/if}
  </div>
  <div
    class="perf-container__item"
    style={`background-color: ${
      lcpValue !== undefined ? changeColor(2.5, 4.0, lcpValue) : '#2BA24C'
    }`}
  >
    <h2 class="perf-container__item__title">LCP | AVG</h2>
    {#if lcpValue !== undefined}
      <h2>{lcpValue}</h2>
    {:else}
      <h2>Loading</h2>
    {/if}
  </div>
  <div
    class="perf-container__item"
    style={`background-color: ${
      fidValue !== undefined ? changeColor(0.1, 0.3, fidValue) : '#2BA24C'
    }`}
  >
    <h2 class="perf-container__item__title">FID | AVG</h2>
    {#if fidValue !== undefined}
      <h2>{fidValue}</h2>
    {:else}
      <h2>Loading</h2>
    {/if}
  </div>
</div>

<style>
  .title {
    margin-left: 1rem;
  }

  .perf-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .perf-container__item {
    flex: 220px;
    height: 150px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 3px;
    color: var(--main-color);
  }

  .perf-container__item__title {
    font-size: 1.2rem;
    padding-bottom: 5px;
  }
</style>
