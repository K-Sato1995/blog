<script lang="ts">
  export let post;
  import SvelteMarkdown from "svelte-markdown";
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";

  const meta = {
    title: `${post.title} | K-Sato`,
    description: post.description ?? post.title,
    url: `${envVariables.basePath}/blog/${post.slug}`,
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
<!-- http://localhost:3000/blog/test-slug -->
<h1>Post</h1>
<h2>{post.title}</h2>

<SvelteMarkdown source={post.contents} />
