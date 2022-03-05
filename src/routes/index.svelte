<script lang="ts">
  export let posts;
  import { envVariables } from "$lib/envVariables";
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
<h2>BasePath: {envVariables.basePath}</h2>

{#each posts as post}
  <li>
    <a href={`${envVariables.basePath}/blog/${post.slug}`}>
      {post.title}
    </a>
  </li>
{/each}
