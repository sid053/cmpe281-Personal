// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';
import './Tenent1.css';
import axios from 'axios';
  import { 
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Jumbotron,
  Button,
  Thumbnail
 }from 'react-bootstrap';
 
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}



class Tenent1 extends Component {
   constructor (props) {
        super(props);
            this.state = {
             uploadedFileCloudinaryUrl: ''
            }
             this.postDataToApi = this.postDataToApi.bind(this);
          }
    
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0].name 
    });
console.log(this.state.uploadedFile);
    this.postDataToApi();
     
  }
   postDataToApi(event){
  //event.preventDefault();
  
   axios.post('http://localhost:3001/api/file',this.state.uploadedFile)
        .then(res=>{
           console.log("back from Tenent1");
           let variable = res.body ;
           console.log(variable);
        })
        .catch(err=> {
          console.log(err);
        })
  
 }
  render() {
     const { className, ...props } = this.props;
     return (
       <div>
      <Jumbotron fluid>
       
       <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />  

      <center> 
      
      <Dropzone
      multiple={false}
      accept="*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>
      </center>
    
      </Jumbotron>
    
      </div>
    );
  }
}

export default Tenent1;
