import { getNonFeaturePosts } from "@/app/api/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNonFeaturePosts();
  return (
    <section>
      <h2>You May Like</h2>
      {posts && (
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard post={post} key={post.path} />
          ))}
        </MultiCarousel>
      )}
    </section>
  );
}
