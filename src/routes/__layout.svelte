<script>
  import '../assets/styles/global.css'
  import Header from '$lib/components/Header.svelte'
  import Container from '$lib/components/Container.svelte'
  import Content from '$lib/components/Content.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { onMount } from 'svelte'
  import { getLCP, getFID, getCLS, getTTFB, getFCP } from 'web-vitals'
  import { db } from '$lib/firebaseBase'
  import { addDoc, collection } from 'firebase/firestore'

  const reportToFB = ({ name, delta, id }) => {
    try {
      addDoc(collection(db, name), {
        value: delta,
        born: id,
      })
    } catch (e) {
      console.error('Failed to report to FB', e)
    }
  }

  onMount(() => {
    if (process.env.NODE_ENV === 'production') {
      getCLS(reportToFB)
      getFID(reportToFB)
      getLCP(reportToFB)
      // getTTFB(reportToFB);
      // getFCP(reportToFB);
    }
  })
</script>

<Container>
  <Header />
  <Content>
    <slot />
  </Content>
  <Footer />
</Container>
