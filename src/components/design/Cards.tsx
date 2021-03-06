import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './icons8-dumbbell-64.png'; // with import
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core';
import { Router, Link } from 'react-router-dom';
import {
  HashRouter,
  Route
} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      maxWidth: 800,
      marginBottom: 10,
      border: 0,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 2',
      maxWidth: 649,
    },
    cover: {
      width: 64,
      // paddingRight: 0, 

    },
    controls: {
      display: 'flex',
      alignItems: 'end',
    },
  }),
);

export function CaseOneCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Recruiting Users
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Here I have make a present workflow I followed to select and recruite appropiate users for a contextual interview.
          </Typography>
        </CardContent>
        <HashRouter basename="/">
        <CardActions className={classes.controls}>
          <Button size="small" color="secondary" component={Link} to={"/fitnessApp"}>
            Read More
          </Button>
      </CardActions>
      </ HashRouter>
      </div>
    </Card>
  );
}

export function CaseTwoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Conceptualizing Interaction
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            In this project I am designing a platform to allow user to participate on a hybrid (online and offline) conference week. Particulary, I show the steps I have taken to generate a list of requiriments with the participants on mind.
          </Typography>
        </CardContent>
        <HashRouter basename="/">
        <CardActions className={classes.controls}>
          <Button size="small" color="secondary" component={Link} to={"/designWeek"}>
            Read More
          </Button>
      </CardActions>
      </ HashRouter>
      </div>
    </Card>
  );
}

export function CaseThreeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            My Portfolio
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            In this case study I go through the steps I have followed to create this app you are looking right now. 
          </Typography>
        </CardContent>
        <HashRouter basename="/">
        <CardActions className={classes.controls}>
          <Button size="small" color="secondary" component={Link} to={"/portfolioApp"}>
            Read More
          </Button>
      </CardActions>
      </ HashRouter>
      </div>
    </Card>
  );
}
