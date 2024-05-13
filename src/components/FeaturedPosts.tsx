import { getFeaturedPosts } from "@/app/api/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="featured-posts">
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
