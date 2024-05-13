import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  content: string;
}

export default function MarkdownViewer({ content }: Props) {
  return (
    <Markdown
      className="markdown-viewer"
      remarkPlugins={[remarkGfm]}
      // components={{
      //   code(props) {
      //     const { children, className, node, ...rest } = props;
      //     const match = /language-(\w+)/.exec(className || "");
      //     return match ? (
      //       <SyntaxHighlighter
      //         {...rest}
      //         PreTag="div"
      //         language={match[1]}
      //         style={dark}
      //       >
      //         {String(children).replace(/\n$/, "")}
      //       </SyntaxHighlighter>
      //     ) : (
      //       <code {...rest} className={className}>
      //         {children}
      //       </code>
      //     );
      //   },
      // }}
    >
      {content}
    </Markdown>
  );
}
