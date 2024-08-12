import { metadata } from "./../layout";
import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
  content: string;
};
export async function getAllposts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((post) => post.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllposts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturePosts(): Promise<Post[]> {
  return getAllposts().then((posts) => posts.filter((post) => !post.featured));
}

export type PostData = Post & { content: string };

export default async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllposts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metadata) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  }
  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
}
