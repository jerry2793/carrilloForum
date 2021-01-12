import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Field } from 'redux-form'

import Input from '../../inputs/TextField'
import TypeSelect from './selectCourseType'

function mapStateToProps(state) {
    return {

    };
}

const required = value => {
    if (!value) {
        return 'Required! '
    } else {
        return undefined
    }
}

class CourseCreateForm extends Component {
    state = {
        courseSelected: '',
        previousCourseSelected: '',
    }

    handleSelectChange = val => {
        this.setState({ courseSelected: val })
        console.log('parent received: ', val)
    }
    
    render() {
        return (
            <Paper>
                <form>
                        <Field
                            label="Course Name"
                            name="name"
                            value={'course'}
                            validate={required}
                            component={Input}
                        />
                        <Field 
                            label="Course Type"
                            validate={required}
                            name="course-type"
                            value={this.state.courseSelected}
                            component={props => (<TypeSelect 
                                handleSelectChange={this.handleSelectChange}
                                setPreviousCourseSelected={val => this.setState({ previousCourseSelected: val })}
                                previousCourseSelected={this.state.previousCourseSelected}
                                { ...props }
                            />)}
                        />
                        <Field
                            name="description"
                            validate={required}
                            label="Course Description"
                            component={Input}
                        />
                    </form>
            </Paper>
        );
    }
}

export default compose(
    connect(mapStateToProps),
    // reduxForm({
    //     form: 'course-create-form'
    // }), // not here, put in parent componenet
)(CourseCreateForm);