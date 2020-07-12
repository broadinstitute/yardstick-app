import * as React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

type ChallengeTableHeadProps = {
    version?: Version;
}

const ChallengeTableHead = ({version}: ChallengeTableHeadProps) => {
    let metrics = [];

    if (version) {
        metrics = version.metrics.map(({name, abbreviation}, index) => {
            return (
                <TableCell align="right" key={index}>
                    {abbreviation}
                </TableCell>
            );
        });
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                {metrics.length > 0 && metrics}
            </TableRow>
        </TableHead>
    )
}

export default ChallengeTableHead;
