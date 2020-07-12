import * as React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChallengeTableHead from "./ChallengeTableHead";
import {useStyles} from "./ChallengeTable.css";

type ChallengeTableProps = {
    version?: Version;
}

const ChallengeTable = ({version}: ChallengeTableProps) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table>
                    <ChallengeTableHead version={version}/>

                    <TableBody>
                        <TableRow key="0">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.root}>example</TableCell>
                            <TableCell className={classes.root}>@0x00B1</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                        </TableRow>

                        <TableRow key="1">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.root}>example</TableCell>
                            <TableCell className={classes.root}>@0x00B1</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                        </TableRow>

                        <TableRow key="2">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.root}>example</TableCell>
                            <TableCell className={classes.root}>@0x00B1</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                        </TableRow>

                        <TableRow key="3">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.root}>example</TableCell>
                            <TableCell className={classes.root}>@0x00B1</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                        </TableRow>

                        <TableRow key="4">
                            <TableCell component="th" scope="row">
                                <IconButton size="small">
                                    <KeyboardArrowDownIcon/>
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.root}>example</TableCell>
                            <TableCell className={classes.root}>@0x00B1</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                            <TableCell align="right" className={classes.root}>0.0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
};

export default ChallengeTable;
