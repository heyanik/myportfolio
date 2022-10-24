import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./HomeStyle.css";
import { TabTitle } from "../components/tabtitle";

const Home = () => {
  TabTitle("Anik Das Partha");

  const [postContent, setPostcontent] = useState("");
  useEffect(() => {
    import("../markdown/index.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  // React.useEffect(() => {
  //   const json = localStorage.getItem("site-dark-mode");
  //   const currentMode = JSON.parse(json);
  //   if (currentMode) {
  //     setDarkMode(true);
  //   } else {
  //     setDarkMode(false);
  //   }
  // }, []);

  // const [darkMode, setDarkMode] = React.useState(false);
  // React.useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  //   const json = JSON.stringify(darkMode);
  //   localStorage.setItem("site-dark-mode", json);
  // }, [darkMode]);

  return (
    <>
      <Header />
      {/* <button onClick={() => setDarkMode(!darkMode)}> */}
      {/* <FiMoon className="dark-btn" onClick={() => setDarkMode(!darkMode)} /> */}
      {/* </button> */}
      <div>
        <Markdown className="markdown">{postContent}</Markdown>
      </div>
    </>
  );
};

export default Home;
