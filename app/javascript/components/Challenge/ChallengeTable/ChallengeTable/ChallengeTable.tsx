import * as React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import { ChallengeTableHead } from "../ChallengeTableHead";

type ChallengeTableProps = {
    version?: Version;
};

export const ChallengeTable = ({
    version,
}: ChallengeTableProps): JSX.Element => {
    return (
        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table>
                    <ChallengeTableHead version={version} />

                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
