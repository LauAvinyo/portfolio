import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
    },
    txt: {
      marginBottom: 10, 
      textAlign: 'justify'
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);

export default function DesignWeek() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={10}>
          <Typography component="h1" variant="h1">
            Recruiting Users for a Fitness App
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
