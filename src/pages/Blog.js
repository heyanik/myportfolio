import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
const Blog = () => {
  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../markdown/blog.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);
  return (
    <>
      <Header />
      <div>
        <Markdown className="project-md">{postContent}</Markdown>
      </div>
    </>
  );
};

export default Blog;
