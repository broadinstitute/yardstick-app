import * as React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./Registration.css";
import { Copyright } from "../../Copyright";
import { RegistrationForm } from "../RegistrationForm";
import { RouteComponentProps } from "@reach/router";

type Error = {
    code: string;
    detail: {
        email?: Array<string>;
        username?: Array<string>;
        password?: Array<string>;
    };
    status: string;
    title: string;
};

export const Registration = (props: RouteComponentProps): JSX.Element => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Array<Error>>([]);
    const [user, setUser] = useState<Array<Task>>([]);

    const onSubmit = (values, actions) => {
        const init = {
            body: JSON.stringify({ user: values }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        };

        fetch("/users", init)
            .then((response) => response.json())
            .then((response) => {
                if ("errors" in response) {
                    setErrors(response.errors);
                }

                setUser(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const messages = errors.map((error: Error, index: number) =>
        Object.entries(error.detail).map(([k, v]) => {
            switch (k) {
                case "email":
                    k = "E-mail address";

                    break;
                case "password":
                    k = "Password";

                    break;

                case "username":
                    k = "Username";

                    break;
            }

            const message = `${k} ${v[0]}.`;

            return (
                <Alert className={classes.alert} key={index} severity="error">
                    {message}
                </Alert>
            );
        }),
    );

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

                <div className={classes.messages} />

                <RegistrationForm onSubmit={onSubmit} />
            </div>

            <Copyright />
        </Container>
    );
};
