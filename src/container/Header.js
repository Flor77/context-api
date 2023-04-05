import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Modal from "./components/modal/Modal";
import LoginForm from "./LoginForm";

const Header = () => {
  const [header, setHeader] = useState(false);
  const handleClick = () => setHeader(!header);

  const [openModal, setOpenModal] = useState(false);

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
              <a href="/use-ref">UseRefHook</a>
            </li>
            <li>
              <a href="/use-effect">UseEffectHook</a>
            </li>
            <li>
              <a href="/custom-hook">CustomHook</a>
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
          <button className="primary-button" onClick={() => setOpenModal(true)}>
            Sign In
          </button>
          <button
            className="secondary-button"
            onClick={() => setOpenModal(true)}
          >
            Sign Up
          </button>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {!header ? <MenuIcon className="icon" /> : <XIcon className="icon" />}
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <LoginForm />
        </Modal>
      </div>

      <div className={!header ? "hidden" : "dropdown-menu"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/use-ref">UseRefHook</a>
          </li>
          <li>
            <a href="/use-effect">UseEffectHook</a>
          </li>
          <li>
            <a href="/custom-hook">CustomHook</a>
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
