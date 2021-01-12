import { Button, FormControl } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import Input from '../../inputs/TextField'
import Textarea from '../../inputs/TextField'

import ImageIcon from '@material-ui/icons/Image';


function mapStateToProps(state) {
  return {

  };
}

const ImageUpload = props => {
  const {
    input,
    ...rest
  } = props
  
  return (<React.Fragment>
    <input
      color="primary"
      id="icon-button-file"
      style={{ display: 'none', }}
      {...rest}
      {...input}
    />
    <label htmlFor="icon-button-file">
      <Button
        variant="contained"
        component="span"
        size="large"
        color="primary"
      >
        <ImageIcon />
      </Button>
    </label>
  </React.Fragment>)
}

class CreateNewCourse extends Component {
  render() {
    return (
      <form>
        <Field 
          name='new-course-type-name'
          accept="image/*"
          component={props => (<Input 
            {...props.input}
            label="Course Type Name"
          />)}
        />
        <Field 
          name='new-course-type-description'
          type="file"
          component={props => (<Textarea 
            label="Course Type Description"
            {...props.input} 
          />)}
        />
        <Field 
          name='course-type-image'
          type='file'
          component={ImageUpload}
        />
        <Button type='submtit'>
          Create New Course Type
        </Button>
      </form>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'create new course' })
)(CreateNewCourse);