import React from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { indigo   } from '@material-ui/core/colors';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: indigo,
  },
});

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
   
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="ThemeProvider"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
      <FormControl className={classes.margin} />

    </form>
  );
}