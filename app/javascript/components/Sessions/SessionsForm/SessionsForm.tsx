import * as React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./SessionsForm.css";
import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";

type SessionsFormProps = {
    onSubmit: (values: any) => void;
};

export const SessionsForm = ({ onSubmit }: SessionsFormProps): JSX.Element => {
    const classes = useStyles();

    const initialValues = {
        user: {
            email: "",
            password: "",
        },
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <Field
                            autoComplete="email"
                            autoFocus
                            component={TextField}
                            fullWidth
                            id="email"
                            label="E-mail address"
                            margin="normal"
                            name="user[email]"
                            type="email"
                            variant="outlined"
                        />

                        <Field
                            autoComplete="password"
                            autoFocus
                            component={TextField}
                            fullWidth
                            id="password"
                            label="Password"
                            margin="normal"
                            name="user[password]"
                            type="password"
                            variant="outlined"
                        />

                        <Field
                            Label={{ label: "Remember me?" }}
                            checked
                            color="primary"
                            component={CheckboxWithLabel}
                            name="user[remember-me]"
                            value="remember"
                            type="checkbox"
                        />

                        <Button
                            className={classes.submit}
                            color="primary"
                            disabled={isSubmitting}
                            fullWidth
                            onClick={submitForm}
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Sign in
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
