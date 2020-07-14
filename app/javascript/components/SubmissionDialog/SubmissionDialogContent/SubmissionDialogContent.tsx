import * as React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import {TextField} from "@material-ui/core";

export const SubmissionDialogContent = (): JSX.Element => (
    <DialogContent>
        <TextField
            autoFocus
            fullWidth
            id="name"
            label="Name"
            type="text"
            variant="outlined"
        />

        <TextField
            label="Description"
            fullWidth
            multiline
            rows={8}
            defaultValue=""
            variant="outlined"
        />
    </DialogContent>
);
