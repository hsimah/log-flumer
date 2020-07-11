import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { AppContext } from '../../AppContext';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';

const cardStyles = makeStyles(theme => ({
  message: {
    width: '100%'
  },
  root: {
    maxWidth: 600,
    marginBottom: 16,
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'red'
  }
}));

function InstagramMessage({ sender, created_at, text, media }) {
  const classes = cardStyles();
  return <Grid item xs={12}>
    <TextField
      className={classes.message}
      multiline
      label={sender}
      value={text ?? media ?? 'Unavailable attachment'}
      helperText={created_at}
      variant="outlined"
    />
  </Grid>
}

export default function InstagramMessageConversation({ conversation }) {
  const classes = cardStyles();
  const { data } = React.useContext(AppContext);

  if (data?.type !== 'ig-messages') {
    return null;
  }

  return data.conversations.map(({ participants, conversation }, i) => {
    const key = participants.join(' : ');

    return <Accordion TransitionProps={{ unmountOnExit: true }} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <InstagramIcon />
        <Typography className={classes.heading}>{key}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {conversation.map(c => <InstagramMessage key={c.created_at} {...c} />)}
        </Grid>
      </AccordionDetails>
    </Accordion>
  })
}