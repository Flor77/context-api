import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [header, setHeader] = useState(false);
  const handleClick = () => setHeader(!header);

  return (
    <div className="header">
      <div className="wrapper">
        <h1 className="logo">App</h1>
        <div className="links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/props">Props</a>
            </li>
            <li>
              <a href="/create-context">Create-Context</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="primary-button">Sign In</button>
          <button className="secondary-button">Sign Up</button>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {!header ? <MenuIcon className="icon" /> : <XIcon className="icon" />}
        </div>
      </div>

      <div className={!header ? "hidden" : "dropdown-menu"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/props">Props</a>
          </li>
          <li>
            <a href="/create-context">Create-Context</a>
          </li>
        </ul>
        <div className="flex-col">
          <button className="primary-button">Sign In</button>
          <button className="secondary-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
