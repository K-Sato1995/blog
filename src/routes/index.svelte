<script lang="ts">
  export let posts;
  import { envVariables } from "$lib/envVariables";
  import { MetaTags } from "svelte-meta-tags";

  const meta = {
    title: "Home | K-Sato",
    description: "Blog about random stuff I'm interested in.",
    url: envVariables.basePath,
    siteName: "K-Sato",
    image: {
      url: "./assets/background.jpeg",
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

<h1>Hello and welcome to my site!</h1>
<h2>BasePath: {envVariables.basePath}</h2>
<h3>Heading 3</h3>
<p>Loren ipsomkfjsalfjadl</p>

{#each posts as post}
  <li>
    <a href={`/blog/${post.slug}`}>
      {post.title}
    </a>
  </li>
{/each}

<style>
</style>
