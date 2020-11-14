import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Fitness() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography component="h5" variant="h5">
            Title
          </Typography>
        </Grid>
        <Grid item xs={10}>
        <Typography component="h5" variant="h5">
            Interaction
          </Typography>
        </Grid>
        <Grid item xs={10}>
        <Typography component="h5" variant="h5">
            Interaction
          </Typography>
        </Grid>

      </Grid>
    </div>
  );
}
