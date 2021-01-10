import { AppBar, Button, ButtonGroup, Dialog, FormControl, Grid, IconButton, Paper, Slide, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from '../../../actions/types'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import { compose } from 'redux';
import { formValueSelector, reduxForm } from 'redux-form';

import CourseCreateForm from './courseCreateForm'
import CourseCard from '../coursecard';


const selector = formValueSelector('course-create-form')

function mapStateToProps(state) {
    return {
        disabled: state.buttonInOperation,
        // courseCreating: selector(state, 'name', 'course-type', 'description'),
        courseCreating: state.form['course-create-form']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        buttonClicked: (val) => {
            dispatch({ type: types.SET_OPERATION, payload: val })
        },
        dispatchCourse: payload => {
            dispatch({ type: types.CREATE_COURSE, payload: payload })
        }
    };
}

function validate (values) {
    const errors = {}
    if (!values) {
        errors.name = 'Fill out Course Name'
    }
    return errors
}

class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addMenuToggled: false,
            courseSelected: '',
            previousCourseSelected: '',
        }
    }

    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    handleCourseAddButtonClick = (e, operation, cb) => {
        // console.log(e.target)
        this.props.buttonClicked(true)
        this.setState({ addMenuToggled: false })
        if (operation) operation()
        this.props.buttonClicked(false)
        if (cb) cb()
    }

    createCourseSubmit = formProps => {
        this.handleCourseAddButtonClick(
            undefined, 
            () => this.props.dispatchCourse(formProps)
        )
    }

    getNewCourse = () => {
        if (this.props.courseCreating) {
            return this.props.courseCreating.values
        } else {
            return {
                img: '',
                name: 'Course Name if statement false',
                description: 'Course Description'
            }
        }
    }
      
    render() {
        const { classes } = this.props
        // const { invalid } = this.props
        
        return (
            <div className={classes.root}>
                <Button onClick={e => {
                    this.setState({ addMenuToggled: true })
                }} className={classes.button} endIcon={<AddCircleIcon className={classes.icon} />}>
                    Create New Course
                </Button>
                <Dialog fullScreen open={this.state.addMenuToggled} onClose={e => this.handleCourseAddButtonClick(e)} TransitionComponent={this.Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                                <IconButton onClick={e => this.handleCourseAddButtonClick(e)} color='inherit' edge="start" aria-label="close">
                                    <CloseIcon />
                                </IconButton>

                                <Typography variant='h6' className={classes.title}>
                                    Create a New Course
                                </Typography>
                                
                                <Button disabled={this.props.submitting} onClick={this.props.handleSubmit(this.createCourseSubmit)} color='inherit'>
                                    Create
                                </Button>
                        </Toolbar>
                    </AppBar>

                    <Paper variant='outlined' style={{
                        textAlign: 'center',
                        margin: '0 20px'
                    }}>
                        <CourseCreateForm />
                    </Paper>

                </Dialog>
            </div>
        );
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm({
        form: 'course-create-form',
        validate
    }),
    withStyles(theme => ({
        root: {
            backgroundColor: ''
        },
        button: {
            borderBlock: 'gray'
        },
        icon: {
    
        },
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
    }))
)( CreateCourse );