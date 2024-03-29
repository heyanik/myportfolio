import React from "react";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
// import Markdown from "markdown-to-jsx";
import { TabTitle } from "../../components/tabtitle";
import "../../markdown/Blogs/blog.css";
// import remarkGfm from "remark-gfm";
import MarkdownPreview from "@uiw/react-markdown-preview";

const Blog3 = () => {
  TabTitle("Challenges of Running a Restaurant");

  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../../markdown/Blogs/blog-3.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div>
      <Header />
      {/* <Markdown className="blog1-md blog3-md" remarkPlugins={[remarkGfm]}>
        {postContent}
      </Markdown> */}
      <MarkdownPreview className="blog-md blog3-md" source={postContent} />
    </div>
  );
};

export default Blog3;
