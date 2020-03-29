import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AppContext } from '../AppContext';
import Comment from '../models/comment';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


export default function UploadButtons() {
  const { setData } = React.useContext(AppContext);
  const classes = useStyles();
  function handleFileSelect({ target }) {
    const { files } = target;
    const [file] = files;

    if (file.type !== 'application/json') {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const json = JSON.parse(reader.result);
      if (Comment.isComment(json)) {
        const { comments, groups } = Comment.parseComments(json);
        setData({
          comments,
          current: comments,
          groups: Array.from(groups),
          type: 'comment',
        });
        return;
      }
      setData(json);
    });
    reader.readAsText(file);
  }

  return (
    <div className={classes.root}>
      <input
        accept="application/json"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleFileSelect}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}