import React, { useState, useEffect } from 'react'
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';

const LandingPage = () => {
    const [search, setSearch] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [listArr, setListArr] = useState([]);

    const handleClick = () => {
        if (name === '' || email === '') alert('Please fill the empty fields');
        else setListArr((oldArr) => [...oldArr, { id: uuidv4(), n: name, e: email }]);

        setName('');
        setEmail('');
    }

    useEffect(() => {
        if (listArr.length !== 0) localStorage.setItem('arrayList', JSON.stringify(listArr));
    }, [listArr])

    useEffect(() => {
        const item = localStorage.getItem('arrayList') ? JSON.parse(localStorage.getItem('arrayList')) : [];
        setListArr(item);
    }, [])

    const removeItem = (idx) => {
        const updateList = listArr.filter((_, index) => index !== idx);
        setListArr(updateList);
        localStorage.setItem('arrayList', JSON.stringify(updateList));
    }

    return (
        <div className='App'>
            Contact Manager
            <input
                name="search"
                type="text"
                value={search}
                placeholder='search'
                onChange={(e) => setSearch(e.target.value)}
                autoComplete='given-search' />
            <input
                name="name"
                type='text'
                value={name}
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name" />
            <input
                name="email"
                type='email'
                value={email}
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="given-email" />

            <button onClick={handleClick}>Add</button>

            {listArr
                .filter((item) => {
                    return search.toLowerCase() === '' ? item : item.n.toLowerCase().includes(search);
                })
                .map((item, idx) => <ContactList key={idx} index={idx} id={item.id} name={item.n} email={item.e} removeItem={removeItem} />)}
        </div>
    )
}

export default LandingPage;
