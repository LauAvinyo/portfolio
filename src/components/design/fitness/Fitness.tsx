import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


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

export default function Fitness() {
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
        <Grid item xs={10}>
        <Typography variant="body2" className={classes.txt} >
          Note: I am doing this project as a part of my Master's Degree. The steps that require a team have been done with my family and friends, to practice communication skills, I refer to them as "my team" or "we".
        </Typography>

        <Typography variant="body1" className={classes.txt} >
          In the last years, the indexes of obesity in the population are increasing dramatically. There are different ways Governments and Companies could tackle this problem. One of them is improving the relationship of people with exercise and activity through a mobile app. 
          In this case study, I show the steps I have taken to recruit the user for the initial primary research. In this point of the project, I already did both, the desk research and the benchmarking.
        </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Defining Primary and Secondary Groups
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          To avoid falling in the "Designing for Everyone is designing for no one", in this project I will focus on a concrete group of users. Following the guidelines of Travis and Hodson in Think Like a UX designer first, my team and I did a brainstorming of possible users. After that, I distributed the groups on the following table. The X-Axis indicates how easy it is for me to access a given group, while the Y-Axis shows how interested I am on them in this stage of the product. 
        </Typography>
        TABLE
        <Typography variant="body1" className={classes.txt} >
        From the table, I concluded that the main group is "People with interest in fitness and for their health". That is, we will focus on making a tool to help people that is already aware that physical exercise is key for a healthy life, and they have an idea of what types of activities are there (muscular strength, cardio, mobility). But, they are not Sports Teams players, either professional. Demographically, there is no restriction.
        </Typography>
        </Grid>
        <Grid item xs={10} sm={5}>
          
          <Typography  component="h3" variant="h3" className={classes.txt} >
          Main Benefits
          </Typography>
          <div className={classes.demo}>
              <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="The users are already into exercise, so they are more likely to participate in interviews, usability tests and other experiments."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Since they perform exercise regularly, are more likely that they catch paint points than a group that do not exercise. "
                    />
                  </ListItem>
              </List>
            </div>
        </Grid>
        <Grid item xs={10} sm={5}>
          
          <Typography  component="h3" variant="h3" className={classes.txt} >
          Main Dawbacks
          </Typography>
          <div className={classes.demo}>
              <List>
                  <ListItem>
                    <ListItemIcon>
                      <CloseIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="It is still quite broad."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CloseIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Since they are already aware of the problem, we are not going to have such an impact on public health as if we focus on people that are not yet aware."
                    />
                  </ListItem>
              </List>
            </div>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.txt} >
          We should not forget the global goal of the project, but, for the first iterations of the product, this groups is ideal. 
        </Typography>
        <Typography variant="body1" className={classes.txt} >
        On the other hand, there is no need for secondary users. Maybe in following iterations, we may want to add them. Coaches, clinicians, nutritionists or entities as gyms would be valuable secondary users.
        </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Proto-Persona
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          Now that we have a focus group, it is time to start working on empathy with them. To do so, I did a simple proto persona. 
        </Typography>
        PERSONA!
        <Typography variant="body1" className={classes.txt} >
        Joanna helps a lot while working on the next steps, but, one should notice that there are some facts of here that if generalized can be dangerous for the product. For instance, not all users of our focus groups have low income, or they are into minimalism.
        </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Screnner
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          I will perform contextual interviews with users. In this research it is necessary to interview a group of four to six participants, depending on the level of similarity between them. In principle, the interview will take place in an open space, for example, a walk or a callisthenics park. Due to the current mobility restrictions these must be inhabitants of the same municipality as me. I have send a "Google Form" with the the screnner questions that you can find here [link] to each of the candidates. 
        </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Next Steps
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          Now I am ready to start preparing the interviews with the users. So, we can start working on the script of the interview and preparing the paperwork: the Informed Consent and Non-disclosure Agreement. In parallel, I will select the canditates that best fit our group analysing the results of the screening. 
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
