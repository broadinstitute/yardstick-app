import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./Sessions.css";
import { Copyright } from "../../Copyright";
import { RouteComponentProps } from "@reach/router";
import { SessionsForm } from "../SessionsForm";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useState } from "react";

export const Sessions = (props: RouteComponentProps): JSX.Element => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Array<Error>>([]);
    const [user, setUser] = useState<Array<Task>>([]);
    const [token, setToken] = useState<string>();

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

    const onSubmit = (values) => {
        const init = {
            body: JSON.stringify({ user: values }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        };

        fetch("/users/sign_in", init)
            .then((response) => {
                setToken(response.headers.get["Authorization"]);

                console.log(response.headers.get["Authorization"]);

                return response.json();
            })
            .then((response) => {
                if ("errors" in response) {
                    setErrors(response.errors);
                }

                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        console.log(token);
    };

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

                <SessionsForm onSubmit={onSubmit} />

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
            </div>

            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};
