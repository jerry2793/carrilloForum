import { Button, ButtonGroup, IconButton, Paper, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { compose } from 'redux';

import * as actions from '../actions/files'

import requireAuth from './requireAuth';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';


class Feature extends Component {

  constructor (props) {
    super(props)
  }

  handleButtonRedirect = e => {
    this.props.history.push(`/${e.target.innerText.toLowerCase().split(' ').pop()}`)
  }

  renderUploadWidget = <IconButton onClick={() => {
    this.props.upload('c:\\Users\\jerry\\dev\\aws\\aws-key-pair.pem')
  }}>
    <CloudUploadIcon />
  </IconButton>
  
  render() {
    const { classes } = this.props

    return <Paper className={classes.root}>
      <Typography variant='h3'>
        User Homepage: Welcome! 
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

      <div styles={{
        marginTop: '50px'
      }}>
        <Typography variant='h3'>
          File Storage System {'>>'} {this.renderUploadWidget}
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

const styles = theme => {
  root: {
    margin: '100px'
  }
}

export default compose(
  connect(null, actions),
  requireAuth,
  withStyles(styles)
)(Feature);
