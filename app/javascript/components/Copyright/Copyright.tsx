import * as React from "react";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export const Copyright = () => (
    <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}{" "}
            <Link color="inherit" href="https://www.broadinstitute.org/">
                Broad Institute
            </Link>
            {". "}
            All rights reserved.
        </Typography>
    </Box>
);
