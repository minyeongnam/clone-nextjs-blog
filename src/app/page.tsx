import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="main">
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </main>
  );
}
