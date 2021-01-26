import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";

import useDialog from "hooks/useDialog";

import AddIcon from "@material-ui/icons/Add";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "components/inputs/TextField";
// import requireAuth from "components/requireAuth";

// const Input = ({input, meta, ...rest}) => {
//     return <TextField {...input}  />
// }

const required = (value) => (value ? undefined : "Required");

const renderForm = () => {
  return (
    <Grid container spacing={2}>
      <Field
        validate={required}
        name="name"
        label="Course Name"
        component={Input}
      />
      <Field
        validate={required}
        name="description"
        label="Course Description"
        component={Input}
      />
      <Field
        validate={required}
        name="label"
        label="Course Label (Math, English, History...)"
        component={Input}
      />
    </Grid>
  );
};

const AddDialog = ({ handleSubmit }) => {
  const [open, handleClickOpen, handleClickClose] = useDialog();

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <AddIcon style={{ fontSize: 50 }} />
      </IconButton>

      <Dialog
        disableBackdropClick={true}
        open={open}
        onClose={handleClickClose}
      >
        <DialogTitle>Create New Course</DialogTitle>
        <DialogContent>{renderForm(onSubmit)}</DialogContent>
        <DialogActions onClick={handleClickClose}>
          <Button onClick={onSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const validate = ({ name, label, description }) => {
  const errors = {};
  return errors;
};

export default compose(
  connect(null, null),
  reduxForm({ form: "create-course", validate })
)(AddDialog);
