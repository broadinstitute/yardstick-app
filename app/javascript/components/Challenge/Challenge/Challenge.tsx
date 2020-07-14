import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "@reach/router";
import Button from "@material-ui/core/Button";
import { Partitions } from "../Partitions";
import { ChallengeTable } from "../ChallengeTable";
import { SubmissionDialog } from "../../SubmissionDialog/SubmissionDialog";
import { VersionForm } from "../VersionForm";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export const Challenge = (props: RouteComponentProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const [error, setError] = useState(null);
    const [version, setVersion] = useState<Version>();

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const parameters = useParams();

    const init = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    };

    useEffect(() => {
        const endpoint = `/tasks/${parameters.task}/challenges/${parameters.challenge}/versions/1-0-0`;

        fetch(endpoint, init)
            .then((response) => response.json())
            .then(
                (result) => {
                    setVersion(result);
                },
                (error) => {
                    setError(error);
                },
            );
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5" gutterBottom>
                        &nbsp;
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <VersionForm />
                </Grid>
            </Grid>

            <ChallengeTable version={version} />

            <Button
                color="primary"
                disableElevation
                onClick={onOpen}
                variant="contained"
            >
                Submit new scores
            </Button>

            <SubmissionDialog onClose={onClose} open={open} />

            <Partitions />
        </div>
    );
};
