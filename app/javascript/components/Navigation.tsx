import * as React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./Navigation.css";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserMenu from "./UserMenu";

type NavigationProps = {
    authenticated: boolean
}

const Navigation = ({authenticated}: NavigationProps) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const onOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color="inherit" position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Yardstick
                </Typography>

                {
                    authenticated
                    ? <>
                        <div>
                            <IconButton
                                aria-controls="appbar-user-menu"
                                aria-haspopup="true"
                                aria-label="account of current user"
                                color="inherit"
                                onClick={onOpen}
                            >
                                <AccountCircle />
                            </IconButton>

                            <UserMenu anchorEl={anchorEl} onClose={onClose}/>
                        </div>
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
