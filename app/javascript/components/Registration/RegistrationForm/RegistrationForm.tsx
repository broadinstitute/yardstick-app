import * as React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Field, Form, Formik, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import { useStyles } from "./RegistrationForm.css";

type RegistrationFormProps = {
    onSubmit: (values: any, actions: any) => void;
};

export const RegistrationForm = ({
    onSubmit,
}: RegistrationFormProps): JSX.Element => {
    const classes = useStyles();

    const initialValues = {
        email: "",
        password: "",
        username: "",
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
