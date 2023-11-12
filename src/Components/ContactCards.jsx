import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import userImg from '../assets/user.png'
const ContactCards = () => {
    const { state } = useLocation();
    return (
        <div className="CardsComponent">

            <div className="ContactCards">
                <img className="userImg" src={userImg} alt="user" />
                Name : {state.name} <br />
                Email :{state.email}
            </div>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default ContactCards;
