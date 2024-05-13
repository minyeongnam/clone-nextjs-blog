import getPostData from "@/app/api/posts";

interface Props {
  params: {
    slug: string;
  };
}
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <>
      <h2>{post.title}</h2>
      <pre>{post.content}</pre>
    </>
  );
}
