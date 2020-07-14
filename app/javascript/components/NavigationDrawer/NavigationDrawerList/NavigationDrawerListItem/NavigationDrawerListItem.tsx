import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "@reach/router";

type NavigationDrawerListItemProps = {
    challenge: Challenge;
};

export const NavigationDrawerListItem = ({
                                             challenge,
                                         }: NavigationDrawerListItemProps): JSX.Element => {
    return (
        <ListItem button component={Link} to={challenge.endpoint}>
            <ListItemText primary={challenge.name}/>
        </ListItem>
    );
};
