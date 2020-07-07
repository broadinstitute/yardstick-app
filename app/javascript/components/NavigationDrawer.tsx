import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./NavigationDrawer.css";
import ListSubheader from "@material-ui/core/ListSubheader";

type NavigationDrawerProps = {
    challenges: Array<{id: string, name: string, task_id: string}>
    onClose: () => void
    open: boolean
    tasks: Array<{id: string, name: string}>
}

const NavigationDrawer = ({challenges, onClose, open, tasks}: NavigationDrawerProps) => {
    const classes = useStyles();

    const t = tasks.map(({id, name}) => {
        const subheader = (
            <ListSubheader>
                {name}
            </ListSubheader>
        );

        const c = challenges
            .filter(({task_id}) => id === task_id)
            .map(({id, name, task_id}) => {
                return (
                    <ListItem button href={`/tasks/${task_id}/challenges/${id}`} key={id}>
                        <ListItemText primary={name}/>
                    </ListItem>
                );
            });

        return (
            <List key={id} subheader={subheader}>
                {c}
            </List>
        );
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
                    {t}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer classes={{paper: classes.paper}} open variant="permanent">
                    <div className={classes.toolbar} />
                    <Divider />
                    {t}
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default NavigationDrawer;
