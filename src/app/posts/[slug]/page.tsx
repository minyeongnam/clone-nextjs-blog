import getPostData from "@/app/api/posts";
import PostContent from "@/components/PostContent";

import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path } = post;
  return (
    <article className="post">
      <Image
        className="post__image"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}
