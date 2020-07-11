import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

type NavigationDrawerListItemProps = {
    challenge: Challenge
}

const NavigationDrawerListItem = ({challenge}: NavigationDrawerListItemProps) => {
    return (
        <ListItem button component="a" href="/" key={challenge.id}>
            <ListItemText primary={challenge.name}/>
        </ListItem>
    )
};

export default NavigationDrawerListItem;
