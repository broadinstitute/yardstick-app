import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {useStyles} from "./NavigationDrawer.css";
import NavigationDrawerList from "./NavigationDrawerList";

type NavigationDrawerProps = {
    onClose: () => void
    open: boolean
}

const NavigationDrawer = ({onClose, open}: NavigationDrawerProps) => {
    const classes = useStyles();

    return (
        <nav className={classes.drawer}>
            <Hidden implementation="css" smUp>
                <Drawer
                    ModalProps={{keepMounted: true}}
                    classes={{paper: classes.paper}}
                    onClose={onClose}
                    open={open}
                    variant="temporary"
                >
                    <div className={classes.toolbar} />
                    <Divider />
                    <NavigationDrawerList/>
                </Drawer>
            </Hidden>

            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{paper: classes.paper}}
                    open
                    variant="permanent"
                >
                    <div className={classes.toolbar} />
                    <Divider />
                    <NavigationDrawerList/>
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default NavigationDrawer;
