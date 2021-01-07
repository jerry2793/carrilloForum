import { AppBar, Button, ButtonGroup, Dialog, FormControl, IconButton, Slide, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from '../../../actions/types'

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import Input from '../../inputs/TextField'
import TypeSelect from './selectCourseType'


function mapStateToProps(state) {
    return {
        disabled: state.buttonInOperation
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

    componentDidUpdate(prevProps, prevState) {
        console.log('previous state: ', prevState)
    }
      
    render() {
        const { classes } = this.props
        // const Input = props => <TextField {...props.input} />
        
        return (
            <div className={classes.root}>
                <IconButton onClick={e => {
                    this.setState({ addMenuToggled: true })
                }} className={classes.button}><AddIcon className={classes.icon} /></IconButton>
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
                    <form>
                        <Field
                            // label="course name"
                            name="course-name"
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
                            component={props => (<TypeSelect 
                                courseSelected={this.state.courseSelected}
                                setCourseSelected={val => this.setState({ courseSelected: val })}

                                setPreviousCourseSelected={val => this.setState({ previousCourseSelected: val })}
                                previousCourseSelected={this.state.previousCourseSelected}
                                { ...props }
                            />)}
                        />
                    </form>
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
        form: 'course-create-form'
    })
)( withStyles(theme => ({
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
}))(CreateCourse) );