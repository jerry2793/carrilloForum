import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from '../requireAuth'

import CourseCard from './coursecard'

function mapStateToProps(state) {
    return {
        courses: state.courses
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
                {/* {this.props.courses.all.map(course => {
                    <CourseCard />
                })} */}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(requireAuth(Course));