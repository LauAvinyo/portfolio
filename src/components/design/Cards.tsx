import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './facesAsurelle.png'; // with import
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core';

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

export function CaseOneCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            User Resarch
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Hola, es la lauraa Hola, es la lauraa Hola, es la lauraa Hola, es la lauraaHola, es la lauraaHola, es la lauraaHola, es la lauraaHola, es la lauraa Hola, es la lauraaHola, es la lauraa Hola, es la lauraa  Hola, es la lauraa
          </Typography>
        </CardContent>
        <CardActions className={classes.controls}>
          <Button size="small" color="secondary" component={'a'} href={"/case-one"} >
            Read More
          </Button>
      </CardActions>
      </div>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="Logo Case 1"
      />
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
            Interaction
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Hola, es la lauraa Hola, es la lauraa Hola, es la lauraa Hola, es la lauraaHola, es la lauraaHola, es la lauraaHola, es la lauraaHola, es la lauraa Hola, es la lauraaHola, es la lauraa Hola, es la lauraa  Hola, es la lauraa
          </Typography>
        </CardContent>
        <CardActions className={classes.controls}>
          <Button size="small" color="secondary" component={'a'} href={"/case-two"} >
            Read More
          </Button>
      </CardActions>
      </div>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="Logo Case 1"
      />
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
            My PortFolio
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Hola, es la lauraa Hola, es la lauraa Hola, es la lauraa Hola, es la lauraaHola, es la lauraaHola, es la lauraaHola, es la lauraaHola, es la lauraa Hola, es la lauraaHola, es la lauraa Hola, es la lauraa  Hola, es la lauraa
          </Typography>
        </CardContent>
        <CardActions className={classes.controls}>
          <Button size="small" color="secondary" component={'a'} href={"/case-two"} >
            Read More
          </Button>
      </CardActions>
      </div>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="Logo Case 1"
      />
    </Card>
  );
}
