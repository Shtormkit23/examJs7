import React from 'react';
import './AddContact.css';

const ContactForm = props => {
    const contact = props.contact

    let form = (
        <>
        <h2 className='AddFormTitle'>Add new contact</h2>
        <form onSubmit={props.sendHandler} className='AddForm'>
        <h4 className='InputText'>Name:</h4>
        <input
            className="Input"
            type="text" name="name"
            value={contact.name}
            onChange={props.contactDataChanged}
            required
        />
        <h4 className='InputText'>Phone:</h4>
        <input
            className="Input"
            type="text" name="phone"
            value={contact.phone}
            onChange={props.contactDataChanged}
            required
        />
        <h4 className='InputText'>Email:</h4>
        <input
            className="Input"
            type="email" name="email"
            value={contact.email}
            onChange={props.contactDataChanged}
            required
        />
        <h4 className='InputText'>Photo:</h4>
        <input
            className="Input"
            type="text" name="photo"
            value={contact.photo}
            onChange={props.contactDataChanged}
            required
        />
        <h4 className='InputText'>Photo preview:</h4>
        <div className='Image'>
            {contact.photo !== '' ?
                <img
                    src={contact.photo}
                    alt='card' className='imageForm'/>
                : <p>Enter url of pictures ...</p>
                }
        </div>

        <div className='buttonForm'>
            <button className='button'><span>ADD</span></button>
        </div>
    </form>
        </>
    )

    return(
    <>
        {form}
    </>
    )
};

export default ContactForm;