import React from 'react';
import AddContact from './AddContact';
import './App.css';
// import ContactCard from './ContactCard';
import ContactList from './ContactList';
import Header from './Header';
import Home from './Home';

function App() {

  const contacts =[
    {
      id:1,
      name:'Joseph',
      email:'Joe@gmail.com'
    },
    {
      id:2,
      name:'Alex',
      email:'Alex@gmail.com'
    }
  ]



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

