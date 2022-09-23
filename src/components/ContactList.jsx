import React from 'react'
import ContactCard from './ContactCard';

function ContactList(props) {
  // console.log(props)

    const delteContactHandler = (id) =>{
      props.getContactId(id)
    };
  const renderContactList = props.contacts.map((contact) => {
    return(
      <ContactCard contact={contact} clickHandler={delteContactHandler} key={contact.id}/>
    );
  })

  return (
    <div className='ui celled list'>{renderContactList}</div>
  )
};

export default ContactList