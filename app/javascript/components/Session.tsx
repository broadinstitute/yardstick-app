import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FormFor } from "react-rails-form-helpers";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./Session.css";
import Copyright from "./Copyright";

const Session = (): JSX.Element => {
    const classes = useStyles();

    const messages = [].map(
        ([kind, message]: [string, string], index: number) => {
            if (kind && message) {
                const kinds = {
                    alert: "warning",
                    error: "error",
                    notice: "info",
                    success: "success",
                };

                const severity = kinds[kind];

                return (
                    <Alert
                        className={classes.alert}
                        key={index}
                        severity={severity}
                    >
                        {message}
                    </Alert>
                );
            }
        },
    );

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign in to Yardstick
                </Typography>

                {messages}

                <FormFor method="post" name="sign-in" url="/users/sign_in">
                    <TextField
                        autoComplete="username"
                        autoFocus
                        fullWidth
                        id="email"
                        label="E-mail address"
                        margin="normal"
                        name="user[email]"
                        variant="outlined"
                    />

                    <TextField
                        autoComplete="current-password"
                        fullWidth
                        id="password"
                        label="Password"
                        margin="normal"
                        name="user[password]"
                        type="password"
                        variant="outlined"
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <Button
                        className={classes.submit}
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="/users/password/new" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/users/sign_up" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </FormFor>
            </div>

            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Session;
