import FilterablePosts from "@/components/FilterablePosts";
import { getAllposts } from "../api/posts";

export default async function PostsPage() {
  const posts = await getAllposts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
