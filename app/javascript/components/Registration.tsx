import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "./Registration.css";
import {FormFor} from "react-rails-form-helpers";
import Alert from "@material-ui/lab/Alert";

type RegistrationProps = {
  flash: Array<[string, string]>
  errors: Array<string>
}

const Registration = ({flash, errors}: RegistrationProps) => {
  const classes = useStyles();

  const messages = flash.map(([kind, message]: [string, string], index: number) => {
    if (kind && message) {
      const kinds = {
        alert: 'warning',
        error: 'error',
        notice: 'info',
        success: 'success'
      };

      const severity = kinds[kind];

      return (
          <Alert className={classes.alert} key={index} severity={severity}>
            {message}
          </Alert>
      );
    } else {
      return;
    }
  })

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up for Yardstick
          </Typography>

          {messages}

          {errors.map((error: string, index: number) => {
            return (
                <Alert className={classes.alert} key={index} severity="error">
                  {error}
                </Alert>
            );
          })}

          <FormFor className={classes.form} method="post" name="sign-up" url="/users">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  autoFocus
                  fullWidth
                  id="usernaame"
                  label="Username"
                  name="username"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  fullWidth
                  id="email"
                  label="E-mail address"
                  name="email"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Sign Up
            </Button>
          </FormFor>
        </div>

        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}{' '}
            <Link color="inherit" href="https://www.broadinstitute.org/">
              Broad Institute
            </Link>{'. '}
            {'All rights reserved.'}
          </Typography>
        </Box>
      </Container>
  );
};

export default Registration;
