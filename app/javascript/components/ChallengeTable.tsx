import * as React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

type ChallengeTableProps = {}

const ChallengeTable = ({}: ChallengeTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>&nbsp;</TableCell>
                        <TableCell align="right">&nbsp;</TableCell>
                        <TableCell align="right">&nbsp;</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow key="">
                        <TableCell component="th" scope="row">0.0</TableCell>
                        <TableCell align="right">0.0</TableCell>
                        <TableCell align="right">0.0</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default ChallengeTable;
