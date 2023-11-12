import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ index, id, name, email, removeItem }) => {
    return (
        <>
            {
                <div className='ContactList'>
                    <Link to={`/contact-cards/${id}`} state={{ name: name, email: email }}>
                        Name: {name} <br />
                    </Link>
                    Email : {email}
                    <button onClick={() => removeItem(index)}>Remove</button>
                </div >
            }

        </>

    )
}

export default ContactList;
