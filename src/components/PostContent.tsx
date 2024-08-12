import { Post } from "@/app/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import { AiTwotoneCalendar } from "react-icons/ai";

interface Props {
  post: Post;
}

export default function PostContent({ post }: Props) {
  const { title, description, date, content } = post;
  return (
    <section className="post__info">
      <h2 className="post__title">{title}</h2>
      <div className="post__date">
        <AiTwotoneCalendar />
        {date.toString()}
      </div>
      <p className="post__description">{description}</p>
      <MarkdownViewer content={content} />
    </section>
  );
}
