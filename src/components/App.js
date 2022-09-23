import React, {useState} from 'react';
import AddContact from './AddContact';
import './App.css';
// import ContactCard from './ContactCard';
import ContactList from './ContactList';
import Header from './Header';
import Home from './Home';

function App() {

  const [contacts, setcontacts] = useState([])

  return (
    <div className='ui container'>
      <Header />
      <Home />
      <AddContact />
      {/* <ContactCard /> */}
      <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;

