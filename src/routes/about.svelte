<script>
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";

  const meta = {
    title: "About | K-Sato",
    description: "About K-Sato. And Social links.",
    url: envVariables.basePath,
    siteName: "K-Sato",
    image: {
      url: "background.jpeg",
      width: 1000,
      height: 523,
      alt: "k-sato-image",
    },
  };
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
    type: "website",
    url: meta.url,
  }}
  twitter={{
    cardType: "summary_large_image",
    title: meta.title,
    description: meta.description,
    image: meta.image.url,
    imageAlt: meta.image.alt,
  }}
/>
<div class="about-container">
  <h1>About me</h1>
  <p>
    Aspiring web developer. Rediscovering the love for coding and building
    stuff.
  </p>

  <ul class="about-container__links">
    <li class="about-container__links__link">
      <a href="https://github.com/K-Sato1995">Github</a>
    </li>
    <li class="about-container__links__link">
      <a href="https://qiita.com/k-penguin-sato">Qiita</a>
    </li>
    <li class="about-container__links__link">
      <a href="https://dev.to/k_penguin_sato">Dev.to</a>
    </li>
    <li class="about-container__links__link">
      <a href="https://zenn.dev/k_sato">Zenn</a>
    </li>
    <li class="about-container__links__link">
      <a href="https://www.wantedly.com/id/k_sato_bb">Wantedly</a>
    </li>
  </ul>
</div>

<style>
  .about-container__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }
  .about-container__links__link {
    margin-right: 1rem;
  }
</style>
