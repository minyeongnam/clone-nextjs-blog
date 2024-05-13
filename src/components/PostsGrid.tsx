import { Post } from "@/app/api/posts";
import PostCard from "./PostCard";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="posts-grid">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
