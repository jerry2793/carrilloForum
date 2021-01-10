import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const renderInput = props => {
  const {
    meta,
    input,
    ...rest
  } = props
  
  return (<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    autoComplete={false}
    error={meta.touched && meta.error}
    helperText={meta.touched? meta.error : ''}
    {...input}
    {...rest}
  />)
}

const required = (value, allValues, props, name) => {
  if (!value) {
    // console.log('invalid ', name)
    return `Required input: ${name}`
  } else {
    return undefined
  }
}

function Signin(props) {
  const classes = useStyles();
  const {
    handleSubmit,
    signin,
    history,
    submitting,
    invalid,
  } = props

  const onSubmit = formProps => {
    signin(formProps, () => {
      history.push('/feature');
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Field 
            name="email"
            label="Your Email"
            autoFocus
            id="email"
            autoComplete='off'
            validate={required}
            component={renderInput}
          />
          <Field 
            name="password"
            label="Password"
            type='password'
            validate={required}
            component={renderInput}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit(onSubmit)}
            disabled={submitting || invalid}
          >
            Sign In
          </Button>
          <small style={{ color: 'red', textAlign: 'center' }}>{props.errorMessage}</small>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}

const validate = values => {
  // const errors = {}
  // // errors.email = 'required'
  // return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'signin',
    validate
  })
)(Signin);