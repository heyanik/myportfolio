import React from "react";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
// import Markdown from "markdown-to-jsx";
import { TabTitle } from "../../components/tabtitle";
import "../../markdown/Blogs/blog.css";
import MarkdownPreview from "@uiw/react-markdown-preview";

const Blog1 = () => {
  TabTitle("How to get github Achievements");

  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../../markdown/Blogs/blog-1.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div>
      <Header />
      {/* <Markdown className="blog-md">{postContent}</Markdown> */}
      <MarkdownPreview className="blog-md blog1" source={postContent} />
    </div>
  );
};

export default Blog1;
