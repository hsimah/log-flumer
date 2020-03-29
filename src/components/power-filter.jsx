import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react';
import { AppContext } from '../AppContext';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(groupName, groups, theme) {
  return {
    fontWeight:
      groups.indexOf(groupName) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PowerFilter() {
  const { data: { comments, groups }, setData } = React.useContext(AppContext);
  const classes = useStyles();
  const theme = useTheme();
  const [selectedGroups, setSelectedGroups] = React.useState([]);

  const handleChange = ({ target: { value } }) => {

    setSelectedGroups(value);
    setData(data => ({
      ...data,
      current: comments.filter(c => value.includes(c.group)),
    }));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>{'Groups'}</InputLabel>
        <Select
          multiple
          value={selectedGroups}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => <Chip key={value} label={value} className={classes.chip} />)}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {groups.map((name) => <MenuItem
            key={name}
            value={name}
            style={getStyles(name, selectedGroups, theme)}
          >
            {name}
          </MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}
