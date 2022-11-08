import React from "react";
import "./ProjectsStyle.css";
import "./Hobby.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { TabTitle } from "../components/tabtitle";
import { NavLink, Outlet } from "react-router-dom";

const Hobby = () => {
  TabTitle("Hobby - Anik Das Partha");

  return (
    <>
      <Header />
      <div className="links-div">
        <NavLink className="links links1" to="reading">
          Reading
        </NavLink>
        {/* <NavLink className="links links2" to="travelling">
          Travelling
        </NavLink> */}
      </div>
      <Outlet />
    </>
  );
};

export default Hobby;
