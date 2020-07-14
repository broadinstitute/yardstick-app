import * as React from "react";
import { ThemeProvider } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { Root } from "./Root";

const Application = (): JSX.Element => {
    const theme = createMuiTheme({});

    return (
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    );
};

export default Application;
