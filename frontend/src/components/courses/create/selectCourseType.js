import React, { useState } from 'react';

import * as actions from '../../../actions/courses'

import { change } from "redux-form";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Input from '../../inputs/TextField'

import CreateNewCourseForm from './CreateNewCourseType'
import { Tabs, Tab, AppBar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 400,
  },
}));

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };


export default function SelectCourse({ 
  input,
  meta,
  ...rest
}) {
  const classes = useStyles();

  const [currentTabValue, setCurrentTabValue] = useState(0)

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    // setCourseSelected(previousCourseSelected);
    setCourseSelected(previousCourseSelected)
    handleClose()
  }

  const handleTabChange = (event, newValue) => {
    setCurrentTabValue(newValue)
  }

  const ExistingCourseSelectForm = (
  <form className={classes.container}>
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-dialog-select-label">Your Course Type</InputLabel>
      <Select
        labelId="demo-dialog-select-label"
        id="demo-dialog-select"
        error={true}
        input={<Input {...input} {...rest} />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {/* set the value to be the course id, 
        then what is displayed to be course.name */}
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>

      </Select>
    </FormControl>
  </form>
  )

  return (<div>

      <Tabs color='primary' value={currentTabValue} onChange={handleTabChange}>
        <Tab label='Use Existing Course Type' />
        <Tab label='Create New Course Type' />
      </Tabs>

      {currentTabValue===0 && ExistingCourseSelectForm }
      {currentTabValue===1 && <CreateNewCourseForm /> }
    
    </div>)
  
}
