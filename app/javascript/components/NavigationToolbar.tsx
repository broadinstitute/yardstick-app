import * as React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./NavigationToolbar.css";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserMenu from "./UserMenu";
import MenuIcon from '@material-ui/icons/Menu';

type NavigationToolbarProps = {
    anchor: HTMLElement;
    authenticated: boolean;
    onClose: () => void;
    onOpen: (event: React.MouseEvent<HTMLElement>) => void;
    onToggle: () => void;
}

const NavigationToolbar = ({anchor, authenticated, onClose, onOpen, onToggle}: NavigationToolbarProps) => {
    const classes = useStyles();

    return (
        <Toolbar>
            <IconButton
                aria-label="open drawer"
                className={classes.menuButton}
                color="inherit"
                edge="start"
                onClick={onToggle}
            >
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
                Yardstick
            </Typography>

            {
                authenticated
                    ? <>
                        <IconButton
                            aria-controls="appbar-user-menu"
                            aria-haspopup="true"
                            aria-label="account of current user"
                            color="inherit"
                            onClick={onOpen}
                        >
                            <AccountCircle />
                        </IconButton>

                        <UserMenu anchorEl={anchor} onClose={onClose}/>
                    </>
                    : <>
                        <Button color="inherit" data-method="" href="/users/sign_in">Sign in</Button>
                        <Button color="inherit" href="/users/sign_up">Sign up</Button>
                    </>
            }
        </Toolbar>
    );
};

export default NavigationToolbar;
