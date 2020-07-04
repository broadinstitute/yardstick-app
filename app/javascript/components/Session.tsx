import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "./Session.css";
import {FormFor} from "react-rails-form-helpers";

const Session = () => {
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

                <FormFor url="/users/sign_in" method="put" name="sign_in">
                    <TextField
                        autoComplete="email"
                        autoFocus
                        fullWidth
                        id="email"
                        label="Email Address"
                        margin="normal"
                        name="email"
                        variant="outlined"
                    />

                    <TextField
                        autoComplete="current-password"
                        fullWidth
                        id="password"
                        label="Password"
                        margin="normal"
                        name="password"
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
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/users/sign_up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </FormFor>
            </div>

            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    {new Date().getFullYear()}{' '}
                    <Link color="inherit" href="https://www.broadinstitute.org/">
                        Broad Institute
                    </Link>{'. '}
                    {'All rights reserved.'}
                </Typography>
            </Box>
        </Container>
    );
};

export default Session;
