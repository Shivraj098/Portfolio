import { posts } from "../../.velite";

export function getFeaturedPosts() {
  return posts.filter((post) => post.featured);
}

export function getAllPosts() {
  return posts;
}