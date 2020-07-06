import * as React from "react";
import {useStyles} from "./Navigation.css";
import {AppBar} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationDrawer from "./NavigationDrawer";
import NavigationToolbar from "./NavigationToolbar";

type NavigationProps = {
    authenticated: boolean
    tasks: Array<[string, string]>
}

const Navigation = ({authenticated, tasks}: NavigationProps) => {
    const classes = useStyles();

    console.log(tasks)

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

            <AppBar position="fixed" className={classes.appBar}>
                <NavigationToolbar
                    anchor={anchor}
                    authenticated={authenticated}
                    onClose={onClose}
                    onOpen={onOpen}
                    onToggle={onToggle}
                />
            </AppBar>

            <NavigationDrawer onClose={onToggle} open={toggled} tasks={tasks}/>
        </div>
    );
};

export default Navigation;
