import * as React from "react";
import { Router } from "@reach/router";
import { Sessions } from "../Sessions/Sessions";
import { Registration } from "../Registration";
import { Challenge } from "../Challenge";

export const MainRouter = (): JSX.Element => {
    return (
        <Router>
            <Challenge path="/tasks/:task/challenges/:challenge" />
            <Registration path="/registrations" />
            <Sessions path="/sessions" />
        </Router>
    );
};
