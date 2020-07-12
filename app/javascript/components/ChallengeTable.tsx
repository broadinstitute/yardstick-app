import * as React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const ChallengeTable = () => {
    const metrics = [];

    const header = metrics.map(({id, name, abbreviation}, index) => {
        return (
            <TableCell align="right" key={index}>
                {abbreviation}
            </TableCell>
        );
    })

    return (
        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>&nbsp;</TableCell>
                            <TableCell>&nbsp;</TableCell>
                            {header}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow key="0">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell>example</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                        </TableRow>

                        <TableRow key="1">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell>example</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                        </TableRow>

                        <TableRow key="2">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell>example</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                        </TableRow>

                        <TableRow key="3">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell>example</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                        </TableRow>

                        <TableRow key="4">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell>example</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                            <TableCell align="right">0.0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
};

export default ChallengeTable;
