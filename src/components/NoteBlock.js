import Markdown from "react-markdown";
import React, { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkToc from "remark-toc";

const Page = () => {
  const tocRef = React.createRef();
  const [markdownContent, setMarkDownContent] = useState(``);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/iamSt3el/notes/main/DSA-notes/Array.md"
        );
        const text = await response.text();
        setMarkDownContent(text);
      } catch (error) {
        console.error("Error fetching Markdown: ", error);
      }
    };
    fetchMarkdown();
  }, []);

  return (
    <div className="note-block">
      <Markdown
        remarkPlugins={[remarkGfm, remarkToc]}
        children={markdownContent}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={atomDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
      <div ref={tocRef}>
        {" "}
        {/* Reference the TOC element */}
        {/* The TOC element will be rendered here by remark-toc */}
      </div>
    </div>
  );
};

export default Page;
