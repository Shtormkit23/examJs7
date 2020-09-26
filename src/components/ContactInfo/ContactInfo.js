import React from 'react';
import './ContactInfo.css';
import {useDispatch} from "react-redux";
import {deleteContact} from "../../store/actions/contactActions";

const ContactInfo = props => {
    const dispatch = useDispatch();
    const id = props.contact.id
    const information = props.contact.information

    const phone = 'tel:' + information.phone;
    const mail= 'mailto' + information.email;
    return (
    <>

        <div className="contactInfo">
            <div>
                <img className='cardPhoto' src={information.photo} alt='card'/>
            </div>
            <div className='infoBlock'>
                <div className="cardName">{information.name}</div>
                <a href={mail} className="cardName">{information.email}</a>
                <a href={phone}>{information.phone}</a>
            </div>
        </div>
        <div className='buttons'>
            <a href={'/contacts/'+id+'/edit'} className='button'><span>Edit</span></a>
            <button className='button' onClick={() => dispatch(deleteContact(id))}><span>Delete</span></button>
        </div>
    </>
)};

export default ContactInfo;