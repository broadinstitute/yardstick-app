import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "./Registration.css";
import Alert from "@material-ui/lab/Alert";
import Copyright from "./Copyright";
import RegistrationForm from "./RegistrationForm";
import {useState} from "react";
import axios from "axios";


const Registration = () => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    // axios.post("/users", { user: user})
    //     .then(function (response) {
    //       setLoading(true);
    //
    //       setUser(response.data);
    //     })
    //     .catch(function (error) {
    //       setLoading(true);
    //
    //       setError(error);
    //     });
  }

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

          <br/>

          {messages}

          {[].map((error: string, index: number) => {
            return (
                <Alert className={classes.alert} key={index} severity="error">
                  {error}
                </Alert>
            );
          })}

          <RegistrationForm onSubmit={onSubmit}/>
        </div>

        <Copyright/>
      </Container>
  );
};

export default Registration;
