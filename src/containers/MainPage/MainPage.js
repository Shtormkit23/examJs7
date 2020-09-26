import React, {useEffect} from 'react';
import './MainPage.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchContacts, fullInfo, setModal} from "../../store/actions/contactActions";
import ContactCard from "../../components/ContactCard/ContactCard";
import Modal from "../../components/UI/Modal/Modal";
import ContactInfo from "../../components/ContactInfo/ContactInfo";


const MainPage = props => {
    const contacts = useSelector(state => state.contacts.contacts);
    const loading = useSelector(state => state.contacts.loading);
    const openModal = useSelector(state => state.contacts.openModal);
    const contact = useSelector(state => state.contacts.contact);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    },[dispatch]);

    const modalHandler = (id) => {
        dispatch(setModal(true));
        dispatch(fullInfo(id));
    };

    let contactsOutput = contacts.map(item => (
            <ContactCard
                photo={item.contact.photo}
                name={item.contact.name}
                key={item.id}
                id={item.id}
                modalHandler={modalHandler}
            />
    ));

    if (loading) {
        contactsOutput = <Spinner/>;
    }

    const cancelHandler = () => {
        dispatch(setModal(false));
    };

    return (
        <div className='mainPage'>
            <Modal show={openModal} closed={cancelHandler}>
                <ContactInfo
                    purchaseCancelled={cancelHandler}
                    contact={contact}
                />
            </Modal>
            {contactsOutput}
        </div>
    )
};

export default MainPage;