import React from "react";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { TabTitle } from "../../components/tabtitle";
import "../../markdown/Blogs/blog.css";

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
      <Markdown className="blog1-md">{postContent}</Markdown>
    </div>
  );
};

export default Blog1;
