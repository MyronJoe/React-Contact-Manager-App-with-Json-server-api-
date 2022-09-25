import React from 'react'
import { Link } from 'react-router-dom'



class EditContact extends React.Component{
  
  constructor(props) {
    super(props)
    const {id, name, email} = props
    this.state = {
      id,
      name,
      email
    }
  }



  update = (e) => {
    e.preventDefault()
    if(this.state.name === '' || this.state.email === ''){
      alert('All inputs must be filled')
      return;
    }else{
      this.props.UpdateContactHandler(this.state);
      this.setState({name:'', email:''})
      console.log(this.props) 
    }
  };
  
  render(){
    return(
      <div className='ui main addcontact'>
        <h1 className='chead'>Edit Contact
      
        <Link to='/'><button className='ui button blue right'>All Contacts</button></Link>
        
        </h1>
        <form action="" className='ui form' onSubmit={this.update}>
          <div className='field'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={this.state.name} placeholder='Name' onChange={ (e) => this.setState({name: e.target.value})}/>
          </div>
          <div className='field'>
            <label htmlFor="">Email</label>
            <input type="text" name='Email' value={this.state.email} placeholder='Email' onChange={ (e) => this.setState({email: e.target.value})}/>
          </div>
          <button className='ui button blue'>Save</button>
        </form>
      </div>
    );
  };
};


export default EditContact