import { Post } from "@/app/api/posts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}
export default function PostCard({
  post: { title, description, path, date, category },
}: Props) {
  return (
    <article className="post-card">
      <Link href={`/posts/${path}`}>
        <Image
          className="post-card_image"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="post-card_info">
          <time>{date.toString()}</time>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{category}</span>
        </div>
      </Link>
    </article>
  );
}
