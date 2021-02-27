import React from 'react';
import {
  Box, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.info.main,
    height: '90vh',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

function PageNotFound() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page Not Found :(</Typography>
        <Typography variant="h5">
          We are sorry. The page that you requested for could not be found.
          Please go back to the home page ot contact us at runners@gmail.com
        </Typography>
      </Box>
    </>
  );
}

export default PageNotFound;
