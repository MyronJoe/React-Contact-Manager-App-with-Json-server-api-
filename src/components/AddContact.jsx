import React from 'react'


class AddContact extends React.Component{

  render(){

    return(

      <div className='ui main addcontact'>
        <h2>Add Contact</h2>

        <form action="" className='ui form'>

          <div className='field'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Name'/>
          </div>
          <div className='field'>
            <label htmlFor="">Email</label>
            <input type="text" name='Email' placeholder='Email'/>
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>

    );
  }


}


export default AddContact