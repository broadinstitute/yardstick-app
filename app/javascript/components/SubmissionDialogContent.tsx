import * as React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const SubmissionDialogContent = () => {
    return (
        <DialogContent>
            <DialogContentText>
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
    )
};

export default SubmissionDialogContent;
