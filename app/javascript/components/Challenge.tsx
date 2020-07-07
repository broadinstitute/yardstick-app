import * as React from "react";
import ChallengeTable from "./ChallengeTable";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./Challenge.css";

type ChallengeProps = {}

const Challenge = ({}: ChallengeProps) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ChallengeTable/>
                </Grid>
            </Grid>
        </main>
    )
};

export default Challenge;
