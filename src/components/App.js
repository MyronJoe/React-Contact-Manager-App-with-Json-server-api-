import React from 'react';
import AddContact from './AddContact';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <AddContact />
      <Contact />
    </>
  );
}

export default App;

