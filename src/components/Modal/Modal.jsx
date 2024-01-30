import {useEffect} from "react";
import { createPortal } from "react-dom";
import css from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ largeImageURL, tags, close }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      close();
    }
  }
    document.addEventListener("keydown", handleKeyDown);

    return () => { document.removeEventListener("keydown", handleKeyDown); }
  }, [close]);


  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  }

    return createPortal(
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }

export default Modal;