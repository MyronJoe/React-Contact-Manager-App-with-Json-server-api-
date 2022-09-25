import React from 'react'
import { Link } from 'react-router-dom'


class AddContact extends React.Component{
  
  state = {
    name: '',
    email:'',
  }

  add = (e) => {
    e.preventDefault()
    if(this.state.name === '' || this.state.email === ''){
      alert('All inputs must be filled')
      return;
    }else{
      this.props.addContactHandler(this.state);
      this.setState({name:'', email:''})
      console.log(this.props) 
    }
  };
  
  render(){
    return(
      <div className='ui main addcontact'>
        <h1 className='chead'>Add Contact
      
        <Link to='/'><button className='ui button blue right'>All Contacts</button></Link>
        
        </h1>
        <form action="" className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={this.state.name} placeholder='Name' onChange={ (e) => this.setState({name: e.target.value})}/>
          </div>
          <div className='field'>
            <label htmlFor="">Email</label>
            <input type="text" name='Email' value={this.state.email} placeholder='Email' onChange={ (e) => this.setState({email: e.target.value})}/>
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>
    );
  };
};


export default AddContact