import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ReactDom from "react-dom";

const Modal = ({ open, onClose, children }) => {
  return ReactDom.createPortal(
    <div className={`${open ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="wrapper-app">
        <h3>This is a modal</h3>

        <XIcon className="icon" onClick={onClose} />
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
