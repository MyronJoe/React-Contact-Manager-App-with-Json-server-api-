import React from 'react'


class AddContact extends React.Component{

  state = {
    name: '',
    email:''
  }

  add = (e) => {
    e.preventDefault()

    if(this.state.name === '' && this.state.email === ''){
      alert('All inputs must be filled')
      return
    }

    // console.log(this.state)
    this.props.addContactHandler(this.state)
    this.setState({name:'', email:''})
  }
  render(){
    return(

      <div className='ui main addcontact'>
        <h2>Add Contact</h2>

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
  }


}


export default AddContact