import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./NavigationDrawer.css";
import ListSubheader from "@material-ui/core/ListSubheader";
import {useEffect, useState} from "react";

type NavigationDrawerProps = {
    onClose: () => void
    open: boolean
}

const NavigationDrawer = ({onClose, open}: NavigationDrawerProps) => {
    const classes = useStyles();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Array<Task>>([]);

    useEffect(() => {
        fetch("/tasks")
            .then(response => {
                return response.json()
            })
            .then(
                response => {
                    setLoading(true);

                    setTasks(response);
                },
                error => {
                    setLoading(true);

                    setError(error);
                }
            )
    }, [])

    const t = tasks.map((task) => {
        const subheader = (
            <ListSubheader>
                {task.name}
            </ListSubheader>
        );

        return (
            <List key={task.id} subheader={subheader}>
                {
                    task.challenges.map((challenge) => {
                        return (
                            <ListItem
                                button
                                component="a"
                                href="/"
                                key={`${task.id}-${challenge.slug}`}
                            >
                                <ListItemText
                                    primary={challenge.name}
                                />
                            </ListItem>
                        );
                    })
                }
            </List>
        );
    });

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
