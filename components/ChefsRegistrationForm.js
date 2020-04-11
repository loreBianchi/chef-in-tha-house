import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class ChefsRegistrationForm extends Component {
  constructor() {
  super();
  this.state = {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      businessName: '',
      businessAddress: '',
      businessCity: '',
      businessZip: '',
      businessState: '',
      terms: false,
      states: [],
  };
}

componentDidMount() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      this._asyncRequest = null;
      const states = data.map(s => s.name)
      this.setState({states});
  });
}

componentWillUnmount() {
  if (this._asyncRequest) {
    this._asyncRequest.cancel();
  }
}

handleChange = evt => {
// This triggers everytime the input is changed
  this.setState({
      [evt.target.name]: evt.target.value,
  });
};

hanleSelectChange = evt => {
  this.setState({ businessState: evt.target.value });
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
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          telephone: this.state.telephone,
          businessName: this.state.businessName,
          businessAddress: this.state.businessAddress,
          businessCity: this.state.businessCity,
          businessZip: this.state.businessZip,
          businessState: this.state.businessState,
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

render(){
  const { states } = this.state
  return(
    <Form onSubmit={this.handleSubmit}>

      <h6 className="text-right">
        <Badge variant="info">Holder info</Badge>
      </h6>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="firstName" 
            size="sm"
            type="text" 
            id="name" 
            value={this.state.firstName} 
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            name="lastName" 
            size="sm"
            type="text" 
            id="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            size="sm"
            type="email" 
            id="email" 
            value={this.state.email} 
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>

      <h6 className="text-right">
        <Badge variant="info">Business info</Badge>
      </h6>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Business name</Form.Label>
          <Form.Control
            name="businessName" 
            size="sm"
            type="text" 
            id="businessName" 
            value={this.state.businessName} 
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="businessAddress" 
          size="sm"
          type="text" 
          id="businessAddress" 
          value={this.state.businessAddress} 
          onChange={this.handleChange}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            name="businessCity" 
            size="sm"
            type="text" 
            id="businessCity" 
            value={this.state.businessCity} 
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            name="businessZip" 
            size="sm"
            type="text" 
            id="businessZip" 
            value={this.state.businessZip} 
            onChange={this.handleChange}
          />
        </Form.Group>

        {states.length > 0 && (
        <Form.Group as={Col}>
          <Form.Label>State</Form.Label>
          <Form.Control 
            as="select"
            value={this.state.businessState} 
            onChange={this.hanleSelectChange}
            size="sm">
            <option>Choose...</option>
            {states.map(s => (
              <option key={s}>{s}</option>
            ))}
          </Form.Control>
        </Form.Group>)}

      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
}

export default ChefsRegistrationForm
