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
import ListSubheader from "@material-ui/core/ListSubheader";

type NavigationDrawerProps = {
    onClose: () => void
    open: boolean
    challenges: Array<{id: string, name: string}>
    tasks: Array<{id: string, name: string, task_id: string}>
}

const NavigationDrawer = ({onClose, open, tasks}: NavigationDrawerProps) => {
    const classes = useStyles();

    const challenges = tasks.map(({id, name}) => {
        const subheader = (
            <ListSubheader>
                {name}
            </ListSubheader>
        )

        return (
            <List key={id} subheader={subheader}>
                <ListItem button>
                    <ListItemText primary={"foo"}/>
                </ListItem>
            </List>
        )
    });

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
                    {challenges}
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default NavigationDrawer;
