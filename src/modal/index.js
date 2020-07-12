import React, { createContext, useContext, useEffect, createRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ReactComponent as Cross } from "./cross.svg";
import "./style.css";

const modalContext = createContext();

const Modal = ({ children, onModalClose }) => {
    useEffect(() => {
        function keyListener(e) {
            const listener = keyListenersMap.get(e.keyCode);
            return listener && listener(e);
        }
        document.addEventListener("keydown", keyListener);

        return () => document.removeEventListener("keydown", keyListener);
    });

    const onOverlayClick = () => {
        onModalClose();
    }

    const onDialogClick = (event) => {
        event.stopPropagation();
    }


    let count = 0;
    const modalRef = createRef();
    const handleTabKey = e => {
        
        const focusableModalElements = modalRef.current.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        //console.log(document.activeElement);
        if(!e.shiftKey){
            count !== focusableModalElements.length ? (count++) : (count = 1);
            const element = focusableModalElements[count - 1];
            element.focus();
            return e.preventDefault();
        }else if(e.shiftKey){
            count > 1 ? (count--) : (count = focusableModalElements.length);
            const element = focusableModalElements[count - 1];
            element.focus();
            return e.preventDefault();
        }
    };

    const keyListenersMap = new Map([[27, onModalClose], [9, handleTabKey]]);

    return createPortal(
        <div className="modal-container" role="dialog" aria-modal="true" onClick={onOverlayClick}>
            <div className="modal-content" ref={modalRef} onClick={onDialogClick}>
                <modalContext.Provider value={{ onModalClose }}>
                    {children}
                </modalContext.Provider>
            </div>
        </div>,
        document.body
    );
}

Modal.Header = function ModalHeader(props) {
    const { onModalClose } = useContext(modalContext);

    return (
        <div className="modal-header">
            {props.children}
            <button className="cross-btn" title="close modal" onClick={onModalClose}>
                <Cross />
            </button>
        </div>
    );
};

Modal.Body = function ModalBody(props) {
    return <div className="modal-body">{props.children}</div>;
};

Modal.Footer = function ModalFooter(props) {
    return <div className="modal-footer">{props.children}</div>;
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
    const { onModalClose } = useContext(modalContext);
    return (
        <button
            {...props}
            className="close-btn"
            title="close modal"
            onClick={onModalClose}
        />
    );
};

Modal.propTypes = {
    onModalClose : PropTypes.func.isRequired
}

export default Modal;