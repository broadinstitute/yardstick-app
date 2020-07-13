import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

type NavigationDrawerListItemProps = {
    challenge: Challenge;
};

const NavigationDrawerListItem = ({
                                      challenge,
                                  }: NavigationDrawerListItemProps): JSX.Element => {
    const ListItemLink = React.useMemo(
        () =>
            React.forwardRef((props, ref) => (
                to = {challenge.endpoint}
    {...
        props
    }
    />), [challenge.endpoint]);

    return (
        <ListItem button component={ListItemLink}>
            <ListItemText primary={challenge.name}/>
        </ListItem>
    );
};

export default NavigationDrawerListItem;
