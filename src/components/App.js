import React from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <AddContact />
      <ContactCard />
      <ContactList />
    </>
  );
}

export default App;

