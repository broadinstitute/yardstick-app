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

type ChallengeProps = {
    challenge: { id: string; name: string; task_id: string; }
    metrics: Array<{id: string, name: string, abbreviation: string}>
    versions: Array<{id: string, name: string}>
}

const Challenge = ({challenge, metrics, versions}: ChallengeProps) => {
    const classes = useStyles();

    const {name} = challenge;

    const [version, setVersion] = React.useState("1.0.0");

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setVersion(event.target.value as string);
    };

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h5" gutterBottom>
                        {name}
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="version-label">Version</InputLabel>

                        <Select id="version-select" label="Version" labelId="version-label" onChange={onChange} value={version}>
                            <MenuItem value={"1.0.0"}>1.0.0</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <br/>

            <ChallengeTable metrics={metrics}/>

            <br/>

            <Partitions/>
        </main>
    )
};

export default Challenge;
