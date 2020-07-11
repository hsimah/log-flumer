import React from 'react';
import { AppContext } from '../AppContext';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  inputContainer: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  inputLabel: {
    color: fade(theme.palette.common.white, 0.54),
  },
  input: {
    '&:before': {
      borderBottomColor: fade(theme.palette.common.white, 0.54),
      '&:hover': {
        borderBottom: '1px solid white'
      }
    },
    '&:hover': {
      border: 'none'
    }
  },
}));

export default function PowerFilter() {
  const { data: { comments, groups }, setData } = React.useContext(AppContext);
  const classes = useStyles();

  return <div className={classes.grow}>
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          {'Log Flumer'}
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            label='Search'
            variant='filled'
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{ className: classes.inputLabel }} />
        </div>
        <div className={classes.inputContainer}>
          <Autocomplete
            multiple
            options={groups}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{
                  ...params.InputProps,
                  className: classes.inputLabel
                }}
                InputProps={{
                  className: classes.input
                }}
                variant='filled'
                label='Groups'
              />
            )}
          />
        </div>
      </Toolbar>
    </AppBar>
  </div>
}
