import React from "react";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "../../markdown/Hobbies/hobby.css";

const HobbyReading = () => {
  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../../markdown/Hobbies/reading.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return <Markdown className="hobby">{postContent}</Markdown>;
};

export default HobbyReading;
