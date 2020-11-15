import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import persona1 from './persona1.png'
import persona2 from './persona2.png'
import persona3 from './persona3.png'



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
      width: 151,
      // paddingRight: 0, 

    },
    controls: {
      display: 'flex',
      alignItems: 'end',
    },
  }),
);

export function PersonaOneCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Megan Johnson
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          She is a freelance designer from New York. Shee will remotely participate in the conference. Her objectives are to know the state of the art in the world of design in Barcelona and to meet other
designers.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={persona1}
        title="Logo Persona 1"
      />
    </Card>
  );
}

export function PersonaTwoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Marcel Puig
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Barcelona lighting designer. He can participate in face-to-face and online events. His goals are to find inspiration and motivation and to encourage his children to do activities so that they get to know theirs better to work.
          </Typography>
        </CardContent>

      </div>
      <CardMedia
        className={classes.cover}
        image={persona2}
        title="Logo Persona 1"
      />
    </Card>
  );
}

export function PersonaThreeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Nathalie Fontaine
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Innovation director of an animal products company. Her goals are networking and enjoying a well-planned trip.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={persona3}
        title="Logo Persona 1"
      />
    </Card>
  );
}
