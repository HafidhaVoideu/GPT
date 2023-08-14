import React, { useState } from "react";

import { NavigationBarItem } from "typescript";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./navbar.css";

const Menu = () => {
  const [underline, setUnderline] = useState("lady");
  return (
    <>
      <p
        onClick={() => setUnderline("home")}
        className={`  ${underline === "home" ? "underline" : "underline-none"}`}
      >
        <a href="#home"> Home </a>
      </p>
      <p
        onClick={() => setUnderline("gpt")}
        className={`  ${underline === "gpt" ? "underline" : "underline-none"}`}
      >
        <a href="#wgpt3"> what's GPT3? </a>
      </p>
      <p
        onClick={() => setUnderline("open")}
        className={`  ${underline === "open" ? "underline" : "underline-none"}`}
      >
        <a href="#openAi"> Open Ai </a>
      </p>
      <p
        onClick={() => setUnderline("case")}
        className={`  ${underline === "case" ? "underline" : "underline-none"}`}
      >
        <a href="#caseS"> Case Studies </a>
      </p>
      <p
        onClick={() => setUnderline("library")}
        className={`  ${
          underline === "library" ? "underline" : "underline-none"
        }`}
      >
        <a href="#library"> Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggoleMenu] = useState(false);
  return (
    <div className="gpt3-navbar">
      <div className="gpt3-navbar__links">
        <div className="gpt3-navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3-navbar__links-container">
          <Menu />
        </div>

        <div className="gpt3-navbar__sign">
          <p>Sign in</p>
          <button type="button"> Sign Up </button>
        </div>

        <div className="gpt3-navbar__menu ">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggoleMenu(!toggleMenu)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggoleMenu(!toggleMenu)}
            />
          )}

          {toggleMenu && (
            <div className="gpt3-navbar__menu-container scale-in-center">
              <div className="gpt3-navbar__menu-links ">
                <Menu />

                <div className="gpt3-navbar__menu-sign">
                  <p>Sign in</p>
                  <button type="button"> Sign Up </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
