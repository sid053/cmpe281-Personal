// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';
import './Tenent1.css';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = '976126475827848';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/sidd053/upload';  
  import { 
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Jumbotron,
  Button,
  Image
 }from 'react-bootstrap';
 import FileInput from 'react-file-input';





class Tenent1 extends Component {
   constructor (props) {
        super(props);
            this.state = {
             uploadedFileCloudinaryUrl: ''
            }
          }
    
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    console.log(this.state.uploadedFile);
     
  }

  render() {
     const { className, ...props } = this.props;
     return (
       
      <Jumbotron fluid>
      
      <center> 
      
      <Dropzone
      multiple={false}
      accept="*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>
      </center>
      
      
         <Image source={this.state.uploadedFile} />
      
    
  
     
     
      </Jumbotron>

    );
  }
}

export default Tenent1;
