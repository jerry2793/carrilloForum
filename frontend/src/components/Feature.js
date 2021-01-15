import { Button, ButtonGroup, IconButton, Paper, Typography, withStyles } from '@material-ui/core';
import React, { Component, useRef } from 'react';
import { compose } from 'redux';

import * as actions from '../actions/files'

import requireAuth from './requireAuth';
import { connect } from 'react-redux';

import UploadWidget from './inputs/UploadWidget'


class Feature extends Component {

  constructor (props) {
    super(props)
  }

  handleButtonRedirect = e => {
    this.props.history.push(`/${e.target.innerText.toLowerCase().split(' ').pop()}`)
  }

  render() {
    const { classes } = this.props

    return <Paper className={classes.root}>
      <Typography variant='h3'>
        Welcome! 
      </Typography>

      <Paper>
        
        <Typography variant='h6'>
          Where do you want to go? 
        </Typography>

        <ButtonGroup color='primary' variant='contained'>
          <Button onClick={this.handleButtonRedirect}>My Courses</Button>
          <Button onClick={this.handleButtonRedirect}>My Active Threads</Button>
        </ButtonGroup>

      </Paper>

      <div style={{
        marginTop: '50px'
      }}>
        <Typography variant='h3'>
          File Storage System {'>>'} <UploadWidget />
        </Typography>
        <Typography variant='body2'>
          Note that the creator of this website 
          is NOT responsible for anything associated with 
          what you upload here, and that files are going to 
          be publically accessible the time you are reading this. 
        </Typography>
      </div>

    </Paper>;
  }
}

const styles = theme => ({
  root: {
    margin: '5%'
  },
  widgetContainer: {
    margin: '5%'
  }
})

export default compose(
  connect(null, actions),
  requireAuth,
  withStyles(styles),
)(Feature);
