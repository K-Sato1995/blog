<script lang="ts">
  export let post: Post;
  import { MetaTags } from "svelte-meta-tags";
  import PostDetail from "$lib/components/PostDetail.svelte";

  const meta = {
    title: `${post.title} | K-Sato`,
    description: post.description ?? post.title,
    url: `/blog/${post.slug}`,
    siteName: "K-Sato",
    author: "K-Sato",
    image: {
      url: "background.jpeg",
      width: 1000,
      height: 523,
      alt: "k-sato-image",
    },
  };
</script>

<!-- TODO: SET IMAGE FOR OpenGraph and Twitter -->
<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    article: {
      authors: [meta.author],
    },
    images: [
      {
        ...meta.image,
      },
    ],
    description: meta.description,
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

<PostDetail {post} />
