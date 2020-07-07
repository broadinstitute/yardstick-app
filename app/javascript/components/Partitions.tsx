import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Partition from "./Partition";

type PartitionsProps = {}

const Partitions = ({}: PartitionsProps) => {
    return (
        <Grid container spacing={2}>
            <Partition/>

            <Partition/>

            <Partition/>
        </Grid>
    )
};

export default Partitions;
