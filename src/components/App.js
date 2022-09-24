import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {v4} from 'uuid';
import AddContact from './AddContact';
import './App.css';
// import ContactCard from './ContactCard';
import ContactList from './ContactList';
import Header from './Header';
import Home from './Home';

function App() {

  const [contacts, setcontacts] = useState([])

  const addContactHandler = (contact) => {
    // console.log(contact)
    setcontacts([...contacts, {id : v4(), ...contact }])
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setcontacts(newContactList)
  };

  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem('contacts'))
    if (retrivecontacts)setcontacts(retrivecontacts)
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      
      
      <BrowserRouter>
        <Home />
        <Header />
        <Routes>
        <Route path="/" element={<ContactList   contacts={contacts} getContactId={removeContactHandler}/>} />
          <Route path='/add' element={<AddContact />}/>
        </Routes>
      </BrowserRouter>


      {/* <AddContact addContactHandler={addContactHandler}/> */}
      {/* <ContactCard /> */}
      {/* <ContactList  contacts={contacts} getContactId={removeContactHandler}/> */}
    </div>
  );
}

export default App;

