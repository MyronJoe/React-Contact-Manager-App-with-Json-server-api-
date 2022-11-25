import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom'

function ContactList(props) {
  // console.log(props)

  const delteContactHandler = (id) => {
    props.getContactId(id)
  };


  const renderContactList = props.contacts.map((contact) => {
    return (


      <ContactCard
        contact={contact}
        clickHandler={delteContactHandler}
        key={contact.id} />

    );
  })

  return (
    <div className='main'>
      <h1 className='head'>Contact List

        <Link to='/add'><button className='ui button blue right'>Add Contact</button></Link>

      </h1>

      <div className='ui celled list'>{renderContactList}</div>
    </div>

  )
};

export default ContactList