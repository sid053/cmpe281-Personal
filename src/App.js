import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Row, 
  Col, 
  Grid,
  Thumbnail,
  Jumbotron,
  Button,
  Container,

 
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
     <div>
  
     <Jumbotron fluid>

      
   <center> <h2>Welcome Professor</h2></center>
   <center> <h3>Choose Tenant to Grade</h3></center>
    
   

    
 <hr className="my-2" />

  <Grid>
  <Row>
  <Col xs={6} md={3}>
    <Thumbnail href="www.facebook.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="www.google.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="www.yahoo.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
  </Col>
  </Row>
</Grid>

    
     </Jumbotron>

 

      </div>
    );
  }
}

export default App;
