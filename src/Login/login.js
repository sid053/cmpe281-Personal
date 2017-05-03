import React, { Component } from 'react';
import { Jumbotron, Button,Form,FormGroup,Col,FormControl,Checkbox,
  ControlLabel
  } from 'react-bootstrap';
  

class Login extends Component {
  render(){
  return (
    <div>
     <Jumbotron fluid>
   <center>
  <Form horizontal>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={5}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>
​
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={5}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>
​
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>
​
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button href="App"type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </center>

  </Jumbotron>

    </div>
  );
};
}

export default Login;