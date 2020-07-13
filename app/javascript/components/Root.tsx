import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./Root.css";
import NavigationDrawer from "./NavigationDrawer";
import Navigation from "./Navigation";
import Content from "./Content";

const Root = (): JSX.Element => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const onOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const [toggled, setToggled] = React.useState(false);

    const onToggle = () => {
        setToggled(!toggled);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Navigation
                anchor={anchorEl}
                authenticated={false}
                onClose={onClose}
                onOpen={onOpen}
                onToggle={onToggle}
            />

            <NavigationDrawer onClose={onToggle} open={toggled} />

            <Content />
        </div>
    );
};

export default Root;
