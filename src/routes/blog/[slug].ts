import { data } from "../../data/posts.json";

const posts = Object.values(data)
  .map((post) => ({
    slug: post.slug,
    title: post.title,
    contents: post.contents
  }));

// Todo: Make sure to update it
// const lookup: Map<string, Post> = new Map();
const lookup: Map<string, any> = new Map();

posts
  .forEach((post) => lookup.set(post.slug, post))

export function get({ params }) {
  const slug = params.slug.toLowerCase();

  if (lookup.has(slug)) {
    return {
      body: { post: lookup.get(slug) },
    };
  }
  return {
    body: { message: "Not found", post: null, },
  };
}