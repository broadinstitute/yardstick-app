import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { FormFor } from "react-rails-form-helpers";
import { useStyles } from "./SessionsForm.css";

export const SessionsForm = (): JSX.Element => {
    const classes = useStyles();

    return (
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
    );
};
