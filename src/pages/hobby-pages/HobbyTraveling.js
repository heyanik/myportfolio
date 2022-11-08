import React from "react";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const HobbyTravelling = () => {
  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../../markdown/Hobbies/travelling.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return <Markdown className="markdown">{postContent}</Markdown>;
};

export default HobbyTravelling;
