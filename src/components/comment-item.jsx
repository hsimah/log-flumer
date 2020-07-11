import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { ReactTinyLink } from 'react-tiny-link';

const useStyles = makeStyles(theme => ({
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

export default function CommentItem(props) {
  const classes = useStyles();

  const { attachment,
    author,
    comment,
    group,
    time,
    title, } = props.comment;

  return <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label='recipe' className={classes.avatar}>
          {author
            .split(' ')
            .map(n => n[0])
            .join('')}
        </Avatar>
      }
      action={
        <IconButton aria-label='settings'>
          <MoreVertIcon />
        </IconButton>
      }
      title={title}
      subheader={time.toDateString()}
    />
    {attachment != null && <ReactTinyLink
      cardSize='small'
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url={attachment.url}
    />}
    <CardContent>
      {group != null && (
        <Typography variant='body2' color='textSecondary' component='p'>
          Posted in: {group}
        </Typography>
      )}
      <Typography variant='body2' color='textSecondary' component='p'>
        {comment}
      </Typography>
    </CardContent>
  </Card>
}