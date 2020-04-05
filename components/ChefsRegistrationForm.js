import { Component } from 'react'

class ChefsRegistrationForm extends Component {
  constructor() {
  super();
  this.state = {
      firstName: '',
  };
}
handleChange = evt => {
// This triggers everytime the input is changed
  this.setState({
      [evt.target.name]: evt.target.value,
  });
};
handleSubmit = evt => {
    evt.preventDefault();
    //making a post request with the fetch API
    fetch('/api/chefs', {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
          firstName:this.state.firstName
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

render(){
  return(
      <form onSubmit={this.handleSubmit} >
        <input 
            name="firstName" 
            type="text" 
            id="name" 
            value={this.state.firstName} 
            onChange={this.handleChange}>
        </input>
        <input type="submit"/>
      </form>
    );
  }
}

export default ChefsRegistrationForm
