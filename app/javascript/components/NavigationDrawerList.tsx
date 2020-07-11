import * as React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import NavigationDrawerListItem from "./NavigationDrawerListItem";

type NavigationDrawerListProps = {
    task: Task;
}

const NavigationDrawerList = ({task}: NavigationDrawerListProps) => {
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
};

export default NavigationDrawerList;
