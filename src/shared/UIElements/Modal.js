import React from 'react';
import { ReactDOM } from 'react-dom';
import './Modal.css';

const ModalOverlay = (props) => {
	const content = <div className={`modal ${props.className}`}></div>;
	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
	return <div>Modal</div>;
};

export default Modal;
