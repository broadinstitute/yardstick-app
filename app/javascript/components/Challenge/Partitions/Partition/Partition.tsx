import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

export const Partition = (): JSX.Element => (
    <Grid item xs={4}>
        <Card>
            <CardContent>
                <Typography>&nbsp;</Typography>
            </CardContent>
        </Card>
    </Grid>
);
