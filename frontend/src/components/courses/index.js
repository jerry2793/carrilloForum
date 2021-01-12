import { Tabs } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import requireAuth from '../requireAuth'

import CourseCard from './coursecard'
import CreateCourse from './create/index'

function mapStateToProps(state) {
    return {
        courses: state.courses,
        token: state.auth.authenticated
    };
}

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    
    render() {
        console.log(this.props.courses)

        return (
            <div>
                <h1>My Courses</h1> <CreateCourse />
                {/* {this.props.courses.all.map(course => {
                    <CourseCard />
                })} */}
                {/* Enrolled, Manage my Courses, Pending */}
                {/* <Tabs>
                    <Tab></Tab>
                </Tabs> */}
            </div>
        );
    }
}

export default compose(
    connect(mapStateToProps,),
    requireAuth
)(Course);