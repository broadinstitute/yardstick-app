import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {useEffect, useState} from "react";
import NavigationDrawerListItem from "./NavigationDrawerListItem";

const NavigationDrawerList = () => {
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

    return (
        <>
            {
                tasks.map((task) => {
                    const subheader = (
                        <ListSubheader>
                            {task.name}
                        </ListSubheader>
                    );

                    return (
                        <List key={task.id} subheader={subheader}>
                            {
                                task.challenges.map((challenge) => {
                                    return <NavigationDrawerListItem challenge={challenge}/>
                                })
                            }
                        </List>
                    );
                })
            }
        </>
    )
};

export default NavigationDrawerList;
