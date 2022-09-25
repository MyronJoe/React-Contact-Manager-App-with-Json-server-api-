import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {v4} from 'uuid';
import AddContact from './AddContact';
import './App.css';
import api from '../api/contacts'
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import Header from './Header';

function App() {

  const [contacts, setcontacts] = useState([])

  //Retrive contacts
  const RetriveContacts = async () => {
    const response = await api.get("/contacts")

    return response.data
  }

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

    const getAllContacts = async () => {
        const allContacts = await RetriveContacts()
        if(allContacts) setcontacts(allContacts)
    }

    // const retrivecontacts = JSON.parse(localStorage.getItem('contacts'))
    // if (retrivecontacts)setcontacts(retrivecontacts)

    getAllContacts()
  }, [])

  useEffect(() => {
    // localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList  contacts={contacts} getContactId={removeContactHandler}/>} />
        
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />

          <Route path='/contact/:id' element={<ContactDetail/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

