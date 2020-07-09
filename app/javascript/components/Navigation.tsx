import * as React from "react";
import {useStyles} from "./Navigation.css";
import {AppBar} from "@material-ui/core";
import NavigationToolbar from "./NavigationToolbar";

type NavigationProps = {
    anchor: HTMLElement
    authenticated: boolean
    onClose: () => void
    onOpen: (event: React.MouseEvent<HTMLElement>) => void
    onToggle: () => void
}

const Navigation = ({anchor, authenticated, onClose, onOpen, onToggle}: NavigationProps) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <NavigationToolbar
                anchor={anchor}
                authenticated={authenticated}
                onClose={onClose}
                onOpen={onOpen}
                onToggle={onToggle}
            />
        </AppBar>
    );
};

export default Navigation;
