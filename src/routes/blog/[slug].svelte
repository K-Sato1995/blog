<script lang="ts">
  export let post;
  import SvelteMarkdown from "svelte-markdown";
</script>

<!-- http://localhost:3000/blog/test-slug -->
<h1>Post</h1>
<h2>{post.title}</h2>

<SvelteMarkdown source={post.contents} />
