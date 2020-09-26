import React from 'react';
import './ContactCard.css';

const ContactCard = props => (
    <>
        <div className="contact" onClick={() => props.modalHandler(props.id)}>
            <img className='cardPhoto' src={props.photo} alt='card'/>
            <div className="cardName">{props.name}</div>
        </div>
    </>
);

export default ContactCard;