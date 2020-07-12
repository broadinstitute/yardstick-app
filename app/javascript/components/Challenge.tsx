import * as React from "react";
import ChallengeTable from "./ChallengeTable";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./Challenge.css";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Partitions from "./Partitions";
import {useEffect, useState} from "react";
import { useParams } from "@reach/router"

type ChallengeProps = {
    challenge?: Challenge;
    children: any;
}

const Challenge = ({challenge, children}: ChallengeProps) => {
    const [error, setError] = useState(null);
    const [version, setVersion] = useState<Version>();
    const [name, setName] = useState<string>("1.0.0");

    const parameters = useParams();

    const classes = useStyles();

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setName(event.target.value as string);
    };

    const init = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    }

    useEffect(() => {
        const endpoint = `/tasks/${parameters.task}/challenges/${parameters.challenge}/versions/1-0-0`;

        fetch(endpoint, init)
            .then(response => {
                return response.json();
            })
            .then(
                (result) => {
                    setVersion(result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    return (
        <>
            {children}

            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5" gutterBottom>
                        {challenge.name}
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="version-label">Version</InputLabel>

                        <Select id="version-select" label="Version" labelId="version-label" onChange={onChange} value={name}>
                            <MenuItem value={"1.0.0"}>1.0.0</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <br/>

            <ChallengeTable version={version}/>

            <br/>

            <Partitions/>
        </>
    )
};

export default Challenge;
