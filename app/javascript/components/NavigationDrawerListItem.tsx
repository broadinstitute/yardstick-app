import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "@reach/router";

type NavigationDrawerListItemProps = {
    challenge: Challenge;
}

const NavigationDrawerListItem = ({challenge}: NavigationDrawerListItemProps) => {
    const ListItemLink = React.useMemo(() => {
        return React.forwardRef((props, ref) => {
            return <Link ref={ref} to={challenge.endpoint} {...props} />;
        });
    }, [challenge.endpoint]);
    
    return (
        <ListItem button component={ListItemLink}>
            <ListItemText primary={challenge.name}/>
        </ListItem>
    )
};

export default NavigationDrawerListItem;
