import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const Modal = (props) => {
  const portalElement = document.getElementById("overlay");

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={() => props.onClose()} />;
  };

  const ModalOverlay = (props) => {
    return <div className={classes.modal}></div>;
  };

  return (
    <Fragment>
      <div>hi</div>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
