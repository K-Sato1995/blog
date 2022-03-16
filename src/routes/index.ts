import { data } from "../data/posts.json";

export function get() {
  const sortedData = data.sort(function(a, b) {
      return Number(new Date(b.date)) - Number(new Date(a.date))
  });
  return { body: { posts: sortedData } };
}
