import React, {useEffect, useState} from 'react'
import './EditPost.css';
import axiosBase from "../../axiosBase";
import ContactForm from "../AddContact/ContactForm";

const EditPost = props => {
    const id = props.match.params.id;
    const [editContact, setEditContact] = useState({});

    useEffect(() => {
        const getPost = async () => {
            try {
                const postResponse = await axiosBase.get(`/contacts/${id}.json`);
                console.log(postResponse.data)
                setEditContact(postResponse.data.contact);
            } finally {
                // setLoading(false);
            }
        }
        getPost().catch(console.error);
    }, [id]);

    const contactDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const changeContact = async event => {
        event.preventDefault();
        const contact = {
            contact: {...editContact}
        };
        try {
            await axiosBase.put(`/contacts/${id}.json`, contact);
        } finally {
            // setLoading(false);
        }
    }

    let postForm = (
        <ContactForm
            sendHandler={event => changeContact(event)}
            contactDataChanged={contactDataChanged}
            contact={editContact}
        />
    );

    return (
        <>
            <div className='edit-post'>
                <h3 className="about-title">Edit post</h3>
                {postForm}
            </div>
       </>
    );
};

export default EditPost;