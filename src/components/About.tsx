import React from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './me.jpg'; 
import Grid from '@material-ui/core/Grid';
import { FormatBold } from "@material-ui/icons";
import { Box } from "@material-ui/core";


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


export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Typography component="h2" variant="h2">
            Hi there, I'm Laura.
          </Typography>
          <Typography component="h4" variant="h4">
            I am a bioinformatician, data scientist, front-end developer and a <Box fontWeight={200} display="inline" >UX Designer</Box>.
          </Typography>
        </Grid>
        <Grid item xs={4}>
        <img src={logo} alt="Logo" height="400" />
        </Grid>
      </Grid>
    </div>
  );
  
}