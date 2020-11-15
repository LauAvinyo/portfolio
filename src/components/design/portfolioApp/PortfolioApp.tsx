import { makeStyles, Theme, createStyles, Typography, Link } from '@material-ui/core';
import React  from 'react';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
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
      iframe: {
        transform: 'rotate(-90deg)',  }
  }),
);

export default function DesignWeek() {


  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={2} direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Typography component="h1" variant="h1">
            Simple Portfolio App
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          I have found myself without a place where to show my design craftworks, that is a must for any aspirant designers. Moreover, I want to pull it off as soon as possible. Therefore, the goal of this project is: make a portfolio where I can show my case studies and present myself. The main constrain are time, money and my design abilities. To deal with those, I decided to deploy a react app (I am quite familiar with it, so it is not time-consuming) on Github pages (it is free). For the visual design, I am going for a simple app and follow guidelines of material design (so, I do not need to worry about accessibility, design fundamentals and aesthetics). 
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Brainstorming and Conceptual Map
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          In any project, my first step is a brainstorming followed by a conceptual map to sort out the ideas. In this case, the central concept was: What I want to show? Then I branch out the map with the answers (in black). Then, in red, I select the components that could present that given answer. Finally, I grouped them in cases (mark in blue). 
          </Typography>
          </Grid>
          <Grid item xs={6}>
          <iframe src="https://drive.google.com/file/d/10pw41bZDuCWeReRnosxmd2l0Tn_EslNo/preview" 
          width="480" height="640" title="Conceptual Map" className={classes.iframe} frameBorder="0"></iframe>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Skectches 
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          Second, I try out some rough sketches. To force my self to be more inventive, I usually try to come up with eight different ideas. In this case, since there is no time, I did three. Now that the thoughts are out of my mind, I try to do other tasks (such as setting up the react app) so, they rest.
          </Typography>
          </Grid>
          <Grid item xs={10}>
          <iframe src="https://drive.google.com/file/d/1lRWISs_-mJr9HKJUvtB6kUBHHn-jmoOX/preview" width="640" height="480" title='Sketches' frameBorder="0"></iframe>
          </Grid>
  
          <Grid item xs={10}>
          <Typography variant="body1" className={classes.txt} >
          In the attached PDF, we can see the three different versions. The first one is easy to implement but is not original. The second has a nice aesthetic, but the scrolling dynamics can be hard to code and is not intuitive for the users. The third is not as typical as the first, and the coding is easy. 
          Therefore, the next step is iterate back through the third option and sketch the rest of the pages. That in this case, we know that is About Me (a must in any portfolio) and a Design tab with three case studios (from the conceptual map). The sketches are in the next PDF. In case this was a team project, I would translate the drawing into Figma so that it can share it and ask for feedback. Now, since I am a team of one, the doodles will suffice. 
          </Typography>
          </Grid>
          <Grid item xs={10}>
          <iframe src="https://drive.google.com/file/d/1LP15FWQI3LDT2IPQqAWNZlyHYJ3TpAf9/preview" width="640" height="480" title="More Sketches" frameBorder="0"></iframe>
          </Grid>
          
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Coding - React App
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          Now it is time to implement it. First, I set up the skeleton and the links following the draft of Information Architecture. After that, I set the guidelines of the contents. To clearly organize it and make sure the design is responsive, I have used material UI grids. All the code can be found here:  
      <Link href="https://github.com/LauAvinyo/portfolio" className={classes.root} display='inline'>
        Github Repo
      </Link>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Adding Content
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          Finally, I have added the content I decided on the conceptual map. Due to the time concern, I did my best into being concise. And only translated some key points. Anyway, I can add extra details and flourishes in the future. 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
