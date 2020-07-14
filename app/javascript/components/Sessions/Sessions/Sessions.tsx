import * as React from "react";
import {useCallback, useEffect, useRef, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {useStyles} from "./Sessions.css";
import {Copyright} from "../../Copyright";
import {navigate, RouteComponentProps} from "@reach/router";
import {SessionsForm} from "../SessionsForm";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {useDispatch} from "react-redux";
import {authenticateAction} from "../../store";

export const Sessions = (_: RouteComponentProps): JSX.Element => {
    const dispatch = useDispatch();

    const ref = useRef(false);

    const [authorizationError, setAuthorizationError] = useState();
    const [authorizing, setAuthorizing] = useState<boolean>(false);
    const [user, setUser] = useState<{ email: string; password: string }>();

    const authenticate = useCallback((token) => {
        dispatch(authenticateAction(token));
    }, [dispatch]);

    const tokenize = async () => {
        const init = {
            body: JSON.stringify({ user: user }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        };

        let token = "";

        await fetch("/users/sign_in", init)
            .then((response) => {
                setAuthorizing(true);

                token = response.headers.get("authorization");

                setAuthorizing(false);
            })
            .catch((error) => {
                setAuthorizationError(error);
            })

        return token;
    };

    useEffect(() => {
        if (ref.current) {
            tokenize().then((token) => {
                authenticate(token);

                navigate("/");
            });
        } else {
            ref.current = true;
        }
    }, [user]);

    const onSubmit = (values) => {
        setUser(values);
    };

    const classes = useStyles();

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
