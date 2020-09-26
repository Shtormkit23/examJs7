import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createContact} from "../../store/actions/contactActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactForm from "../../components/AddContact/ContactForm";

const AddContact = () => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: ''
    });

    const loading = useSelector(state => state.contacts.loading);
    const dispatch = useDispatch();

    const contactDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const contactHandler = async event => {
        event.preventDefault();

        const newContact = {
            contact: {...contact}
        };
        dispatch(createContact(newContact));
    };

    let form = (<ContactForm
    sendHandler={(event) => contactHandler(event)}
    contactDataChanged={contactDataChanged}
    contact={contact}
    />)

    if (loading) {
        form = <Spinner/>;
    }

    return(
        <>
            {form}
        </>
    )
};

export default AddContact;