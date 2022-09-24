import React from 'react'
import user from '../images/user.jpg'
import { Link } from 'react-router-dom'

function ContactDetail(props) {
  return (
    <div>

        <h1 className='head'>User Profile
            
            <Link to='/'><button className='ui button blue right'>Home</button></Link>
      
        </h1>
        
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="con">
                    <h1>Myron</h1> 
                    <p>Joem@gmail.com</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default ContactDetail