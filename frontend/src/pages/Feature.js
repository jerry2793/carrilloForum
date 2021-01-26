import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component, useRef } from "react";
import { compose } from "redux";

import * as actions from "../actions/files";

import requireAuth from "components/requireAuth";
import { connect } from "react-redux";

import UploadWidget from "../components/inputs/UploadWidget";
import AddDialog from "components/courses/AddDialog";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    border: "2px solid black",
  },
  title: {
    margin: "auto",
  },
}));

const Feature = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid container item className={classes.header}>
        <Typography className={classes.title} variant="h3">
          Courses
        </Typography>
        <AddDialog />
      </Grid>
    </Grid>
  );
};

export default compose(connect(null, actions), requireAuth)(Feature);
