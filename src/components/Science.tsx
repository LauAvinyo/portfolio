import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Science() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography component="h1" variant="h1">
            This is under construction!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}