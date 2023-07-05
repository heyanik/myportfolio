import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet, Router } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Blog1 from "./pages/blog-pages/Blog1";
import Blog2 from "./pages/blog-pages/Blog2";
import Blog3 from "./pages/blog-pages/Blog3";
import Hobby from "./pages/Hobby";
import HobbyReading from "./pages/hobby-pages/HobbyReading";
import HobbyTravelling from "./pages/hobby-pages/HobbyTraveling";
import Blog4 from "./pages/blog-pages/Blog4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/hobby" element={<Hobby />}>
        <Route path="reading" element={<HobbyReading />} />
        <Route path="travelling" element={<HobbyTravelling />} />
      </Route>
      <Route path="/blogs/How-to-get-github-Achievements" element={<Blog1 />} />
      <Route path="/blogs/2022-recap" element={<Blog2 />} />
      <Route
        path="/blogs/Challenges-of-Running-a-Restaurant"
        element={<Blog3 />}
      />
      <Route path="/blogs/How-to-Use-Markdown-in-ReactJS" element={<Blog4 />} />
    </Routes>

    {/* <App /> */}
  </BrowserRouter>
);
