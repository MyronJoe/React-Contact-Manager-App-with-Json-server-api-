import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import AddContact from './AddContact';
import './App.css';
import api from '../api/contacts'
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import Header from './Header';
import EditContact from './EditContact';

function App() {

  const [contacts, setcontacts] = useState([])

  //Retrive contacts
  const RetriveContacts = async () => {
    const response = await api.get("/contacts")

    return response.data
  }

  const addContactHandler = async (contact) => {
    // console.log(contact)

    const request = {
      id: v4(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setcontacts([...contacts, response.data])
  };

  const UpdateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const [id, name, email] = response.data;
    setcontacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact
    }))
  }

  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setcontacts(newContactList)
  };

  useEffect(() => {

    const getAllContacts = async () => {
      const allContacts = await RetriveContacts()
      if (allContacts) setcontacts(allContacts)
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
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />

          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />

          <Route path='/contact/:id' element={<ContactDetail />} />

          <Route path='/edit/:id' element={<EditContact UpdateContactHandler={UpdateContactHandler} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

