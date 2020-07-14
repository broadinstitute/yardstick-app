import * as React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useStyles } from "../ChallengeTable/ChallengeTable.css";

type ChallengeTableHeadProps = {
    version?: Version;
};

export const ChallengeTableHead = ({
    version,
}: ChallengeTableHeadProps): JSX.Element => {
    const classes = useStyles();

    let metrics = [];

    if (version) {
        metrics = version.metrics.map(({ name, abbreviation }, index) => (
            <TableCell align="right" className={classes.root} key={index}>
                {abbreviation}
            </TableCell>
        ));
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell className={classes.root}>&nbsp;</TableCell>
                <TableCell className={classes.root}>&nbsp;</TableCell>
                <TableCell className={classes.root}>&nbsp;</TableCell>
                <TableCell className={classes.root}>&nbsp;</TableCell>
                {metrics.length > 0 && metrics}
            </TableRow>
        </TableHead>
    );
};
