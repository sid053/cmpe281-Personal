import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Row, 
  Col, 
  Grid,
  Thumbnail
 
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
     <div>
  

  <Grid>
  <Row>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="www.google.com" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
  </Col>
  <Col xs={6} md={3}>
    <Thumbnail href="#" alt="171x180" src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" />
  </Col>
  </Row>
</Grid>


      </div>
    );
  }
}

export default App;
