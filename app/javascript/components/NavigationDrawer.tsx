import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./NavigationDrawer.css";

type NavigationDrawerProps = {
    onClose: () => void
    open: boolean
}

const NavigationDrawer = ({onClose, open}: NavigationDrawerProps) => {
    const classes = useStyles();

    return (
        <nav aria-label="mailbox folders" className={classes.drawer}>
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
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>

                            <ListItemText primary="Example" />
                        </ListItem>
                    </List>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer classes={{paper: classes.paper}} open variant="permanent">
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>

                            <ListItemText primary="Example" />
                        </ListItem>
                    </List>
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default NavigationDrawer;
