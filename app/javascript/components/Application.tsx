import * as React from "react";
import {useStyles} from "./Application.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationDrawer from "./NavigationDrawer";
import Navigation from "./Navigation";
import {Router} from "@reach/router"
import Session from "./Session";
import Registration from "./Registration";
import Tasks from "./Tasks";
import Submissions from "./Submissions";
import User from "./User";
import Task from "./Task";
import Challenges from "./Challenges";
import Challenge from "./Challenge";
import Versions from "./Versions";
import Version from "./Version";
import {Grid, ThemeProvider} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

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

    const options = {};

    const theme = createMuiTheme(options);

    return (
        <ThemeProvider theme={theme}>
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

                    <br/>

                    <br/>

                    <Grid container spacing={2}>
                        <Grid item xs={1}/>

                        <Grid item xs={10}>
                            <Router>
                                <Registration path="sign-up"/>

                                <Session path="sign-in" />

                                <Submissions path="submissions"/>

                                <Tasks path="tasks">
                                    <Task path=":task">
                                        <Challenges path="challenges">
                                            <Challenge path=":challenge">
                                                <Versions path="versions">
                                                    <Version path=":version"/>
                                                </Versions>
                                            </Challenge>
                                        </Challenges>
                                    </Task>
                                </Tasks>

                                <User path="users/:username"/>
                            </Router>
                        </Grid>
                    </Grid>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default Application;
