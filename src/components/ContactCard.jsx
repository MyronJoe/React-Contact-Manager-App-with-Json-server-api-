import React from 'react'
import { Link } from 'react-router-dom';
import user from '../images/user.jpg'

function ContactCard(props) {
  // console.log(props.contact)
  const {id, name, email} = props.contact;
  return (
    
    <div className="item1">
      
      <div className="content">
      <img src={user} alt="user" className='ui avatar image'/>
        <div>
        <Link to={{
          pathname:`/contact/${id}`,
          state:{contact: props.contact}
          }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        {/* <div className='id'>{id}</div> */}
        </div>
      </div>
      <i className='trash alternate outline icon'
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  )
};

export default ContactCard