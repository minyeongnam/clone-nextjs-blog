"use client";

import { Post } from "@/app/api/posts";
import { useState } from "react";
import PostCard from "./PostCard";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="filterable-posts">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected} //인자와 호출이 동일하면 생략 가능하다 (selected)=> setSelected(selected)
      />
    </section>
  );
}
