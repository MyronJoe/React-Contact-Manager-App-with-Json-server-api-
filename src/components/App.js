import React, {useState, useEffect} from 'react';
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
    setcontacts([...contacts, contact])
  }

  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem('contacts'))
    if (retrivecontacts)setcontacts(retrivecontacts)
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <Home />
      <AddContact addContactHandler={addContactHandler}/>
      {/* <ContactCard /> */}
      <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;

