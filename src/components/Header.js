import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { RiArticleLine, RiLightbulbLine } from "react-icons/ri";
// import { TbSwitchHorizontal } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
// import { Markdown } from "markdown-to-jsx";

const Header = () => {
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    if (darkMode) {
      document.body.style.background = "#fff";
    } else {
      document.body.style.backgroundColor = "white";
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <>
      <div className="sticky">
        <Link to="/" style={{ transition: "all 0.8s" }}>
          <div className="me-icon">
            {" "}
            <svg
              width="73"
              height="57"
              viewBox="0 0 73 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Anik Das Partha</title>
              <mask
                id="myMask"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="73"
                height="57"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.88954 48.265L12.3895 36.765L5.88954 37.765C2.55621 37.765 -2.91046 35.665 1.88954 27.265C2.88958 25.9317 5.98965 23.365 10.3896 23.765C14.7896 24.165 17.8896 26.265 18.8896 27.2649L34.3896 1.26492C35.0563 1.09825 36.5896 1.16492 37.3896 2.76492L32.8896 29.7649C34.5563 29.5982 38.2896 29.5649 39.8896 30.7649C37.723 30.9316 33.1896 31.4649 32.3896 32.2649L30.8896 44.7649C33.8896 40.5982 40.9896 32.2649 45.3896 32.2649L52.8896 9.2649C53.723 8.93156 55.4896 8.6649 55.8896 10.2649L48.8896 30.7649C51.3969 29.7325 56.5142 28.1781 59.0449 29.2198C57.5244 28.6729 54.2896 28.9532 48.8896 32.7649C47.5563 36.7649 44.7896 45.9649 44.3896 50.7649C43.8896 51.0982 42.5896 51.4649 41.3896 50.2649C41.723 46.7649 42.7896 38.9649 44.3896 35.7649C41.5563 37.2649 35.4896 41.4649 33.8896 46.2649C33.3896 48.4316 33.4896 52.9649 37.8896 53.7649C41.3896 53.9316 49.6896 52.3649 54.8896 44.7649C58.5563 40.4316 66.0896 30.3649 66.8896 24.7649C67.8896 20.7649 69.2896 12.0649 66.8896 9.2649C64.723 5.76491 58.7896 -0.43506 52.3896 2.76492C47.8896 4.09825 39.3896 8.8649 41.3896 17.2649C40.3896 15.9316 38.8896 12.3649 40.8896 8.7649C42.0563 6.59823 45.7896 1.9649 51.3896 0.764898C58.3896 -0.735102 64.8896 0.264945 65.8896 1.26492C65.9938 1.36905 66.1575 1.50028 66.3657 1.66709C68.1566 3.10222 73.2335 7.17062 71.8896 19.2649C70.6896 30.0649 63.723 40.7649 60.3896 44.7649C57.0563 48.4316 49.2896 55.8649 44.8896 56.2649C39.3896 56.7649 31.8896 56.7649 30.8896 48.7649L30.3896 56.2649C29.723 56.7649 28.1896 57.2649 27.3896 55.2649L26.8896 44.2649C26.3896 41.2649 24.8896 35.0649 22.8896 34.2649L14.3896 36.2649L5.38965 48.7649L3.88954 48.265ZM59.0449 29.2198C59.4391 29.3616 59.7181 29.559 59.8896 29.7649C59.6594 29.5347 59.374 29.3553 59.0449 29.2198ZM32.8896 10.2649L29.3896 30.7649L23.8896 32.2649L20.3896 28.7649L32.8896 10.2649ZM13.8896 34.2649L17.8896 28.2649C13.4896 25.4649 8.72298 26.0982 6.88965 26.7649C1.28965 29.5649 1.88965 33.2649 2.88965 34.7649C4.08965 36.3649 10.723 35.0982 13.8896 34.2649ZM16.3896 33.7649L21.8896 32.2649L19.3896 29.7649L16.3896 33.7649ZM28.3896 40.2649L29.3896 32.7649L24.8896 33.7649L28.3896 40.2649Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#myMask)">
                <path
                  d="M18.4241 29.4942L34.9862 5.32978L31.8242 32.4701C34.7873 31.9476 37.0641 31.6761 37.9863 31.8298C40.2801 31.1325 44.4091 30.0899 48.4705 29.5347C51.6854 19.9621 55.0149 11.0724 54.5 11.3298C53.7 11.7298 44.8333 14.4965 40.5 15.8298C40.5 -2.17022 63 1.82978 65 3.82978C67 5.82978 73 12.3298 71.5 22.8298C70.3 31.2298 60.6667 43.3298 56 48.3298C50.8333 53.4964 38.9 61.7298 32.5 53.3298C27.6864 47.0119 37.4677 39.1667 47.08 33.751C47.5328 32.3486 48.0004 30.9343 48.4705 29.5347C44.4091 30.0899 40.2801 31.1325 37.9863 31.8298C37.0641 31.6761 34.7873 31.9476 31.8242 32.4701L28.9862 56.8298C28.8195 50.9964 27.8862 38.9298 25.4862 37.3298C24.9153 36.4545 24.1307 35.3792 23.1835 34.2411C19.9129 34.9794 16.5474 35.8002 13.5689 36.578C11.8896 37.0164 10.3333 37.4412 8.98633 37.8298C2.58633 38.2298 1.31958 36.3298 1.48621 35.3298C-0.913791 28.9298 6.15288 26.3298 9.98621 25.8298C12.8917 25.8298 15.8385 27.4099 18.4241 29.4942Z"
                  fill="white"
                />
                <path
                  class="path1"
                  d="M4.48621 49.8298L34.9862 5.32978L28.9862 56.8298C28.8195 50.9964 27.8862 38.9298 25.4862 37.3298C22.9862 33.4964 16.3862 25.8298 9.98621 25.8298C6.15288 26.3298 -0.913791 28.9298 1.48621 35.3298C1.31958 36.3298 2.58633 38.2298 8.98633 37.8298C17.653 35.3298 34.9862 31.3298 37.9863 31.8298C41.8242 30.6631 50.8 28.5298 56 29.3298C45.5 33.8298 26.1 44.9298 32.5 53.3298C38.9 61.7298 50.8333 53.4964 56 48.3298C60.6667 43.3298 70.3 31.2298 71.5 22.8298C73 12.3298 67 5.82978 65 3.82978C63 1.82978 40.5 -2.17022 40.5 15.8298C44.8333 14.4965 53.7 11.7298 54.5 11.3298C55.5 10.8298 42 44.8298 43 51.3298"
                  stroke="black"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </g>
            </svg>{" "}
          </div>
        </Link>
      </div>
      <div className="header" id="header">
        <div className="other">
          <Link
            to="/blogs"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            <a className="icon-hide-mb">Blog</a>
          </Link>
          <Link
            to="/projects"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            {" "}
            <a className="icon-hide-mb">Projects</a>
          </Link>
          <Link
            to="/hobby/reading"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            {" "}
            <a className="icon-hide-mb">Hobby</a>
          </Link>
          <Link
            to="/blogs"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            <a className="icon-hide-pc">
              <RiArticleLine
                style={{
                  height: "19.19px",
                  width: "19.19px",
                  marginTop: "5px",
                }}
              />
            </a>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <a className="icon-hide-pc">
              <RiLightbulbLine
                style={{
                  height: "19.19px",
                  width: "19.19px",
                  marginTop: "5px",
                }}
              />
            </a>
          </Link>
          <a
            className="icon-hide-mb"
            target="blank"
            href="https://drive.google.com/file/d/1llKyjpVLjNgp8VqAoXDqZbyve8jsUkrU/view?usp=drive_link"
            download
          >
            <HiOutlineDocumentText
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
                color: "#555555;",
              }}
            />
          </a>

          <a href="https://github.com/heyanik" target="blank">
            <FiGithub
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
                color: "#555555;",
              }}
            />
          </a>
          <a
            className="icon-hide-mb"
            href="https://twitter.com/hianikdaspartha"
            target="blank"
          >
            <FiTwitter
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/anikdaspartha/" target="blank">
            <FiLinkedin
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
              }}
            />
          </a>
          {/* <TbSwitchHorizontal
            style={{
              height: "19.19px",
              width: "19.19px",
            }}
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
