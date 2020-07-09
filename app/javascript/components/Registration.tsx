import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "./Registration.css";
import {FormFor} from "react-rails-form-helpers";
import Alert from "@material-ui/lab/Alert";
import Copyright from "./Copyright";


const Registration = () => {
  const classes = useStyles();

  const messages = [].map(([kind, message]: [string, string], index: number) => {
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

          {[].map((error: string, index: number) => {
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
                  id="username"
                  label="Username"
                  name="user[username]"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  fullWidth
                  id="email"
                  label="E-mail address"
                  name="user[email]"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  fullWidth
                  id="password"
                  label="Password"
                  name="user[password]"
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

        <Copyright/>
      </Container>
  );
};

export default Registration;
