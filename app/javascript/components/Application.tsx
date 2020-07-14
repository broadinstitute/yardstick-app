import * as React from "react";
import { ThemeProvider } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { Root } from "./Root";
import { Provider } from "react-redux";
import { store } from "./store";

const Application = (): JSX.Element => {
    const theme = createMuiTheme({});

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Root />
            </ThemeProvider>
        </Provider>
    );
};

export default Application;
