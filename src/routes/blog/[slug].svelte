<script lang="ts">
  export let post;
  import SvelteMarkdown from "svelte-markdown";
  import { MetaTags } from "svelte-meta-tags";
  import "prismjs/themes/prism.css";

  const meta = {
    title: `${post.title} | K-Sato`,
    description: post.description ?? post.title,
    url: `/blog/${post.slug}`,
    image: {
      url: "",
      width: post.image ? post.image.width : 1000,
      height: post.image ? post.image.height : 523,
      alt: post.title,
    },
    siteName: "K-Sato",
    author: "K-Sato",
  };
</script>

<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    article: {
      authors: [meta.author],
    },
    description: meta.description,
    images: [
      {
        ...meta.image,
      },
    ],
    site_name: meta.siteName,
    title: meta.title,
    type: "article",
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
<h1>Post</h1>
<h2>{post.title}</h2>
{@html post.contents}

<!-- <SvelteMarkdown
  source={post.contents}
  options={{
    highlight: (code, language) => {
      console.log(code);
      console.log(language);
      alert(code);
      return prism.highlight(code, prism.languages[language]);
    },
    langPrefix: "hljs language-",
  }}
/> -->
<style>
  @import url(https://fonts.googleapis.com/css?family=Questrial);
  @import url(https://fonts.googleapis.com/css?family=Arvo);
</style>
