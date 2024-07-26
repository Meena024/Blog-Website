import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import PostForm from "../PostForm";
import classes from "./modal.module.css";
import Context from "../../Store/Context";

const Modal = (props) => {
  const portalElement = document.getElementById("overlay");

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={() => props.onClose()} />;
  };

  const ModalOverlay = (props) => {
    const { blogToEdit } = useContext(Context);
    return (
      <div className={classes.modal}>
        <PostForm blogToEdit={blogToEdit} onClose={props.onClose} />
      </div>
    );
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
