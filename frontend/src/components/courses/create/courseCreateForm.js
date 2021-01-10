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
            <div>
                <form>
                        <Field
                            // label="course name"
                            name="name"
                            value={'course'}
                            component={props => (
                                <Input {...props.input}
                                    label="Course Name"
                                    autoFocus
                                    autoComplete='off'
                                />
                            )}
                        />
                        <Field 
                            label="course type"
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
                            component={props => (<Input 
                                label="Description"
                                {...props.input}
                            />)}
                        />
                    </form>
            </div>
        );
    }
}

export default compose(
    connect(mapStateToProps),
    // reduxForm({
    //     form: 'course-create-form'
    // }), // not here, put in parent componenet
)(CourseCreateForm);