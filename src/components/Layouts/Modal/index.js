import React from "react";

const Modal = ({
  showModal,
  onClose,
  title,
  children,
  icon,
  haveModalHeader,
  haveModalFooter,
  className,
}) => {
  return (
    <div
      className={`modal fade ${className} ${showModal ? "show" : ""}`}
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
        className="modal-dialog modal-dialog-centered modal-dialog-scrollables"
        style={{ zIndex: 10 }}
      >
        <div className="modal-content">
          {haveModalHeader ? (
            <div className="modal-header">
              <h5 className="modal-title">
                <i className={`mr-15 ${icon}`}></i>
                {title}
              </h5>
              <button type="button" className="close" onClick={onClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="modal-body">{children}</div>
          {haveModalFooter ? (
            <div className="modal-footer">
              <button
                type="button"
                className="main-btn main-btn-2"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
