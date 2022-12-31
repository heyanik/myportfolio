import React from "react";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { TabTitle } from "../../components/tabtitle";
import "../../markdown/Blogs/blog.css";

const Blog2 = () => {
  TabTitle("2022 recap");

  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../../markdown/Blogs/blog-2.md").then((res) =>
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

export default Blog2;
