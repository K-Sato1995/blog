<script lang="ts">
  export let posts
  import { envVariables } from '$lib/envVariables'
  import { MetaTags } from 'svelte-meta-tags'
  import PostList from '$lib/components/PostList.svelte'
  import PostItem from '$lib/components/Post.svelte'

  const meta = {
    title: 'Home | K-Sato',
    description: "Blog about random stuff I'm interested in.",
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

<PostList>
  {#each posts as post}
    <PostItem {post} />
  {/each}
</PostList>
