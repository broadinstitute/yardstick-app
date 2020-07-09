import * as React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {useStyles} from "./RegistrationForm.css";
import {Formik, Field, Form, FormikProps} from "formik";
import { TextField } from 'formik-material-ui';
import {useState} from "react";

type RegistrationFormProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

type Error =  {
    code: string
    detail: {
        email: string
        username: string
        password: string
    }
    status: string
    title: string
}

const RegistrationForm = ({onSubmit}: RegistrationFormProps) => {
    const classes = useStyles();

    const initialValues = {
        email: "",
        password: "",
        username: "",
    }

    const [error, setError] = useState<Array<Error>>([]);
    const [user, setUser] = useState<Array<Task>>([]);

    const f = (values, actions) => {
        const init = {
            body: JSON.stringify({ user: values}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
        };

        fetch("/users", init)
            .then(response => {
                return response.json()
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error(error);

                setError(error);
            });
    }

    return (
        <Formik initialValues={initialValues} onSubmit={f}>
            {(props: FormikProps<any>) => (
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                fullWidth
                                label="Username"
                                name="username"
                                type="text"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                fullWidth
                                label="E-mail address"
                                name="email"
                                type="email"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                fullWidth
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
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
