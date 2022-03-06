import { data } from "../data/posts.json";

const posts = Object.values(data)
  .map((post) => ({
    slug: post.slug,
    title: post.title,
  }));


export function get() {
  return { body: { posts } };
}
