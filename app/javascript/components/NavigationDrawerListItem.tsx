import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

type NavigationDrawerListItemProps = {
    challenge: Challenge;
};

const NavigationDrawerListItem = ({
    challenge,
}: NavigationDrawerListItemProps): JSX.Element => {
    return (
        <ListItem button>
            <ListItemText primary={challenge.name} />
        </ListItem>
    );
};

export default NavigationDrawerListItem;
