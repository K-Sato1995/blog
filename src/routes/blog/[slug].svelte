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
  }}
/>

<PostDetail {post} />
