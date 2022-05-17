import React from "react";

const Modal = ({ showModal, onClose, title, children, icon }) => {
  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: `${showModal ? "block" : ""}` }}
    >
      {
        <div
          className={`modal-backdrop ${showModal ? "show" : ""}`}
          onClick={onClose}
          style={{ zIndex: -1 }}
        ></div>
      }
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ zIndex: 10 }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className={`mr-15 ${icon}`}></i>
              {title}
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="main-btn main-btn-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
