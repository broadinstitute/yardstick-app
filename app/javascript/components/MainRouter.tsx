import * as React from "react";
import { Router } from "@reach/router";
import Session from "./Session";
import Registration from "./Registration";
import Challenge from "./Challenge";

const MainRouter = (): JSX.Element => {
    return (
        <Router>
            <Challenge path="/tasks/:task/challenges/:challenge" />
            <Registration path="/registrations" />
            <Session path="/sessions" />
        </Router>
    );
};

export default MainRouter;
