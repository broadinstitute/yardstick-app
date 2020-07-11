import * as React from "react";
import {useStyles} from "./Application.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationDrawer from "./NavigationDrawer";
import Navigation from "./Navigation";
import {Router} from "@reach/router"
import Session from "./Session";
import Registration from "./Registration";
import Submissions from "./Submissions";
import User from "./User";
import Task from "./Task";
import Challenge from "./Challenge";
import Version from "./Version";

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

            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Router>
                    <Registration path="sign-up"/>

                    <Session path="sign-in" />

                    <Submissions path="submissions"/>

                    <Task path=":task">
                        <Challenge path=":challenge">
                            <Version path=":version"/>
                        </Challenge>
                    </Task>

                    <User path="users/:username"/>
                </Router>
            </main>
        </div>
    );
};

export default Application;
