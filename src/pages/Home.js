import React from "react";
import Header from "../components/Header";

import "./HomeStyle.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bio">
        <h1>Anik Das Partha</h1>
        <p>
          Hey, I'm Anik Das Partha. Front-end developer / Amateur designer.{" "}
          <br />
          Currently working at{" "}
          <a href="https://www.instagram.com/nagram.com.bd/" target="blank">
            Nagram
          </a>
          . I like making interesting projects.{" "}
        </p>
        <p>
          Dreaming up ideas and making them come true is where my passion lies.
          <br />
          You can find my <a> full projects list here</a>.
        </p>
        <p>
          Outside of programming, I enjoy doing photography and traveling. Some
          <br />
          of my photos can be found on{" "}
          <a href="https://www.instagram.com/anik.me/" target="blank">
            Instagram
          </a>
          . If you happen to be in the same city I live
          <br />
          (currently in Bangladesh), maybe we can hang out and take some photos
          or code together.
        </p>
        <p>
          Find me on{" "}
          <a href="https://github.com/anikdaspartha58" target="blank">
            Github
          </a>
          ,{" "}
          <a href="https://twitter.com/hianikdaspartha" target="blank">
            Twitter
          </a>
          <br />
          Mail me at <a>anikdaspartha58@gmail.com</a>
        </p>
        <h2>2022-PRESENT © Anik Das Partha</h2>
      </div>
    </>
  );
};

export default Home;
