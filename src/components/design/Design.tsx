import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from 'react';
import { CaseOneCard, CaseTwoCard, CaseThreeCard} from './Cards'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Design() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <CaseOneCard />
        </Grid>
        <Grid item xs={10}>
          <CaseTwoCard />
        </Grid>
        <Grid item xs={10}>
          <CaseThreeCard />
        </Grid>

      </Grid>
    </div>
  );
}
