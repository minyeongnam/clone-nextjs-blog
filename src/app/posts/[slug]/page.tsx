import getPostData from "@/app/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

interface Props {
  params: {
    slug: string;
  };
}
export default async function PostPage({ params: { slug } }: Props) {
  const { title, path, content, date, description } = await getPostData(slug);
  return (
    <article className="post">
      <Image
        className="post__image"
        src={`/images/posts/${path}.png`}
        alt=""
        width={760}
        height={420}
      />
      <section className="post__info">
        <h2 className="post__title">{title}</h2>
        <div className="post__date">
          <AiTwotoneCalendar />
          {date.toString()}
        </div>
        <p className="post__description">{description}</p>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
