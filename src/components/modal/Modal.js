import React from "react";
import "./modal.css";
import { FaPlus } from "react-icons/fa";

const Modal = ({ children, handleModal, handleHeader, title = "Alert" }) => {
  return (
    <div className="overlay" onClick={() => handleModal(false)}>
      <div className="overlay__container">
        {handleHeader && (
          <div className="overlay__modal__top">
            <h3>{title}</h3>
          </div>
        )}

        <button
          onClick={() => {
            handleModal(false);
          }}
        >
          <FaPlus className="close" />
        </button>
        <div className="overlay__modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
