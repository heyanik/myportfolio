import React from "react";
import "./ProjectsStyle.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const Projects = () => {
  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../markdown/projects.md").then((res) =>
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

export default Projects;
