import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
  },
}));

export default function CommentItem(props) {
  const classes = useStyles();

  const { attachments,
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
    {attachments != null &&
      attachments.map(a =>
        a.data.map(d => (
          <CardMedia
            className={classes.media}
            image={d.external_context.url}
            title='Attachment'
          />
        ))
      )}
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
    <CardActions disableSpacing>

    </CardActions>
  </Card>
}