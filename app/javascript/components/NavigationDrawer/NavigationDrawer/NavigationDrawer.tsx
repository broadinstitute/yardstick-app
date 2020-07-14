import * as React from "react";
import {useEffect, useState} from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {useStyles} from "./NavigationDrawer.css";
import {NavigationDrawerList} from "../NavigationDrawerList";

type NavigationDrawerProps = {
    onClose: () => void;
    open: boolean;
};

export const NavigationDrawer = ({
                                     onClose,
                                     open,
                                 }: NavigationDrawerProps): JSX.Element => {
    const classes = useStyles();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Array<Task>>([]);

    useEffect(() => {
        fetch("/tasks")
            .then((response) => response.json())
            .then(
                (response) => {
                    setLoading(true);

                    setTasks(response);
                },
                (error) => {
                    setLoading(true);

                    setError(error);
                },
            );
    }, []);

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
                    <div className={classes.toolbar}/>
                    <Divider/>
                    {tasks.map((task, index) => (
                        <NavigationDrawerList key={index} task={task}/>
                    ))}
                </Drawer>
            </Hidden>

            <Hidden implementation="css" xsDown>
                <Drawer
                    classes={{paper: classes.paper}}
                    open
                    variant="permanent"
                >
                    <div className={classes.toolbar}/>
                    <Divider/>
                    {tasks.map((task, index) => (
                        <NavigationDrawerList key={index} task={task}/>
                    ))}
                </Drawer>
            </Hidden>
        </nav>
    );
};
