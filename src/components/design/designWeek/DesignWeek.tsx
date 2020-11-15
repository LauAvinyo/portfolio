import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import logo from './requirements.png'; 
import leg from './legend.png'; 
import { PersonaOneCard, PersonaThreeCard, PersonaTwoCard }from './personas'

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
    paper: {
      padding: 16
    }
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
            Empathising With Users
          </Typography>
          <Typography variant="body1" className={classes.txt} >
            
Barcelona Design Week (BDW) has commissioned us to design the platform for this year's edition. The conference will be an hybrid platform, that is, it will be offline and online in parallel. The principal requirement is that the user experience, both face-to-face and online, should be satisfactory. The BDW also asked us to inform the event attendees of the platform, to spread the motto of this year, share news to promote professionals and companies, and finally motivate participants.
Technically, it must be able to allow remote participation, be useful on mobile devices and computers, and obviously, be accessible and create a friendly space for all people, including people with disabilities and go in favour of cultural diversity.


          </Typography>
          <Typography variant="body1" className={classes.txt} >
          They aim to bring together professionals, students from all areas of design, representatives of industry and the general population. The BDW team has already generated three personas. None of the personas has any disabilities, nevertheless, this is an important issue for Barcelona Design Week, and will remain present at all stages of design.
          </Typography>
          </Grid>
          <Grid item xs={10}><PersonaOneCard /></Grid>
          
          <Grid item xs={10}><PersonaTwoCard /></Grid>
          
          <Grid item xs={10}><PersonaThreeCard /></Grid>
          
          <Grid item xs={10}>
          <Typography variant="body1" className={classes.txt} >
          In this part of the project, we will try to emphasise with the users, so we can produce a meaningful set of requirements. To do it. we will first generate a couple of Scenarios for each user. Then, we will analyse them and catch potential pain points generating User Journeys for the previous scenarios. Finally, we will conceptualize the needs of the participants with an initial requirements list. 
          </Typography>
          


        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Escenarios
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          In this section, six possible scenarios were done. Their goal is not to explore all the possibilities uses of the platform, but, give a context to the interactions to understand the different situations of use. Besides, the help in keeping the design user-centred.
          </Typography>
          </Grid>

          <Grid item xs={8}>
          <iframe src="https://drive.google.com/file/d/1fMD7zZ4ZanF29SXTHn6d9ZWSfqX4Z3NQ/preview" width="640" height="480" title='Signup' frameBorder="0" ></iframe>
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            User Journeys
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          In this section, User Journeys are constructed from the scenarios of the previous section. Here I identified and explored in more detail what actions the user takes in each situation. Each of them includes the phases of the interaction, the actions the user take, their thoughts, the emotions (by mean of emojis), pain points and opportunities. The user journey from the example scenario is presented below. 
          </Typography>
        </Grid>

        <Grid item xs={10}>
        <iframe src="https://drive.google.com/file/d/10wY6zAhHu6IhJaBSrjJvqqjZUEwMHZ7S/preview" width="640" height="480" frameBorder="0" title="User Journey"></iframe>
        </Grid>
        <Grid item xs={10}>
        <img src={leg} alt="Legend" height="400" />
        </Grid>
        <Grid item xs={10}>
          <Typography component="h2" variant="h2">
            Requirements
          </Typography>
          <Typography variant="body1" className={classes.txt} >
          This section presents a list of requirements. These are the features, functional and not functional that the platform must offer for the satisfactory experience of the users.
This type of document evolves substantially as the project progresses. For example, some
opportunities for improvement have not been reflected in the list, as they are not yet mature enough. To not to create
inconsistencies each requirement has (1) Identification code. RF if it is a functional requirement or RNF if it is non-functional and a number, (2) Name, (3) Description. A brief but clear summary of the requirement, and (4) List of previous (RF) or related (RNF) requirements to it. Below I show an example of a Funcitonal and one Non-functional requirements.
          </Typography>
        </Grid>
        <Grid item xs={8}>
        <Paper>
        <img src={logo} alt="Logo" height="200" />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.txt} >
            The whole set of Escenearios, user journeys and requeriments (in Catalan) can be found below: 
          </Typography>
          <iframe src="https://drive.google.com/file/d/172vhaordADPVkVjZwGTMhH8R2EbANoy0/preview" width="640" height="480" title='Catalan Full' frameBorder="0"></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
