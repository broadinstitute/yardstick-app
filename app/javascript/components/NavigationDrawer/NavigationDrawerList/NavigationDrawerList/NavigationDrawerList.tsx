import * as React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import {NavigationDrawerListItem} from "../NavigationDrawerListItem";

type NavigationDrawerListProps = {
    task: Task;
};

export const NavigationDrawerList = ({
                                         task,
                                     }: NavigationDrawerListProps): JSX.Element => {
    const subheader = <ListSubheader>{task.name}</ListSubheader>;

    return (
        <List key={task.id} subheader={subheader}>
            {task.challenges.map((challenge, index) => (
                <NavigationDrawerListItem challenge={challenge} key={index}/>
            ))}
        </List>
    );
};
