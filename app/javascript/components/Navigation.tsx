import * as React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./Navigation.css";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

type NavigationProps = {
    authenticated: boolean
}

const Navigation = ({authenticated}: NavigationProps) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Yardstick
                </Typography>

                {
                    authenticated
                    ? <>
                        <Button color="inherit" data-method="delete" href="/users/sign_out" rel="nofollow">Sign out</Button>
                    </>
                    : <>
                        <Button color="inherit" data-method="" href="/users/sign_in">Sign in</Button>
                        <Button color="inherit" href="/users/sign_up">Sign up</Button>
                    </>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
