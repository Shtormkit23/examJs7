import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.closed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-250vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </>
);

export default Modal;