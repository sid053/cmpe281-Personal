import React, { Component } from 'react';

import './App.css';
import { 
  Row, 
  Col, 
  Grid,
  Thumbnail,
  Jumbotron,
  Button
  
  
 
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
  <center>
  <Col xs={6} md={3}>
    <Thumbnail href="www.facebook.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
       <Button bsStyle="primary" bsSize="large" href="Tenent1" block> Tenant 1</Button>
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="www.google.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
       <Button bsStyle="primary"  href="Tenent2"bsSize="large" block> Tenant 2</Button>
  </Col>
  <Col></Col>
  <Col xs={8} md={3}>
    <Thumbnail href="www.yahoo.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
       <Button bsStyle="primary" bsSize="large" block> Tenant 3</Button>
  </Col>
  </center>
  </Row>

  
</Grid>

    
    
     </Jumbotron>

 

      </div>
    );
  }
}

export default App;
