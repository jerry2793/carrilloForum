import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import CreateNewCourseForm from './CreateNewCourse'
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


export default function SelectCourse({ courseSelected, setCourseSelected, previousCourseSelected, setPreviousCourseSelected, ...input }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [currentTabValue, setCurrentTabValue] = useState(0)

  const [tempCouseSelected, setTempCourseSelected] = useState(`${courseSelected}`)

  const handleChange = (event) => {
    console.log(event.target.value)
    setTempCourseSelected(event.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        value={tempCouseSelected}
        onChange={handleChange}
        input={<Input {...input} />}
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

  const ExistingCourseActions = (
    <DialogActions>
      
        <Button onClick={handleCancel} color="primary">
          {/* Cancel */}
        </Button>
        <Button onClick={e => {
          handleClose(e)
          setCourseSelected(tempCouseSelected)
          setPreviousCourseSelected(tempCouseSelected)
        }} color="primary">
          Done
        </Button>

    </DialogActions>
  )

  return (
    <div>
      <Button onClick={handleClickOpen}>Select Your Course Type</Button>


      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        
        <DialogTitle>Select Your Course Type</DialogTitle>

        <DialogContent dividers>

          <Tabs color='primary' value={currentTabValue} onChange={handleTabChange}>
            <Tab label='Use Existing Course Type' />
            <Tab label='Create New Course Type' />
          </Tabs>

          {currentTabValue===0 && ExistingCourseSelectForm }
          {currentTabValue===1 && <CreateNewCourseForm /> }

        </DialogContent>

        {ExistingCourseActions}

      </Dialog>
    </div>
  );
  
}
