import React from "react";

import Typewriter from "typewriter-effect";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography";
import ProductHeroLayout from "../components/WelcomeLayout";

import backgroundImg from "../img/connection.jpg";
import { ButtonGroup } from "@material-ui/core";

const backgroundImage = backgroundImg;
// 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to Carrillo Forum!")
              .pauseFor(2500)
              // .deleteAll()
              .start();
          }}
        />
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Connecting community members for sharing information in the distant
        virtual world.
      </Typography>
      <ButtonGroup>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/signin"
        >
          Login
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/signup"
        >
          Register
        </Button>
      </ButtonGroup>
      <Typography variant="body2" color="inherit" className={classes.more}>
        To join your community remotely!
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
