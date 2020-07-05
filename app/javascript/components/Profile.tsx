import * as React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "./Profile.css";
import {FormFor} from "react-rails-form-helpers";
import Alert from "@material-ui/lab/Alert";

type ProfileProps = {
  flash: Array<[string, string]>
  profile: any
}

const Profile = ({flash, profile}: ProfileProps) => {
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
          {messages}

          <FormFor className={classes.form} method="post" name="sign-up" url="/users">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    autoComplete="name"
                    autoFocus
                    fullWidth
                    id="name"
                    label="Name"
                    name="profile[name]"
                    variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                    autoComplete="location"
                    autoFocus
                    fullWidth
                    id="location"
                    label="Location"
                    name="profile[location]"
                    variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                    autoComplete="website"
                    autoFocus
                    fullWidth
                    id="website"
                    label="Website"
                    name="profile[website]"
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
              Update profile
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

export default Profile;
