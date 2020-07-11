import * as React from "react";
import {useStyles} from "./Application.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationDrawer from "./NavigationDrawer";
import Navigation from "./Navigation";
import {Router} from "@reach/router"
import Session from "./Session";
import Registration from "./Registration";
import Tasks from "./Tasks";

type ApplicationProps = {}

const Application = ({}: ApplicationProps) => {
    const classes = useStyles();

    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchor);

    const onOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget);
    };

    const onClose = () => {
        setAnchor(null);
    };

    const [toggled, setToggled] = React.useState(false);

    const onToggle = () => {
        setToggled(!toggled);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Navigation
                anchor={anchor}
                authenticated={false}
                onClose={onClose}
                onOpen={onOpen}
                onToggle={onToggle}
            />

            <NavigationDrawer onClose={onToggle} open={toggled}/>

            <Router>
                <Registration path="sign-up"/>
                <Session path="sign-in" />
                <Tasks path="/"/>
            </Router>
        </div>
    );
};

export default Application;
