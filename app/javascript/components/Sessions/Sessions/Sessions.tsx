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

export const Sessions = (props: RouteComponentProps): JSX.Element => {
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

                <SessionsForm />
            </div>

            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};
