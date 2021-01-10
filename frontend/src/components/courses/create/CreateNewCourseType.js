import { Button, FormControl } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import Input from '../../inputs/TextField'
import Textarea from '../../inputs/TextField'


function mapStateToProps(state) {
  return {

  };
}

class CreateNewCourse extends Component {
  render() {
    return (
      <form>
        <Field 
          name='new-course-type-name'
          component={props => (<Input 
            {...props.input}
            label="Course Type Name"
          />)}
        />
        <Field 
          name='new-course-type-description'
          component={props => (<Textarea 
            label="Course Type Description"
            {...props.input} 
          />)}
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