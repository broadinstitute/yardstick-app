import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import { SubmissionDialogContent } from "../SubmissionDialogContent";
import { SubmissionDialogActions } from "../SubmissionDialogActions";
import { SubmissionDialogTitle } from "../SubmissionDialogTitle";

type CreateSubmissionProps = {
    onClose: () => void;
    open: boolean;
};

export const SubmissionDialog = ({
    onClose,
    open,
}: CreateSubmissionProps): JSX.Element => (
    <Dialog onClose={onClose} maxWidth="lg" open={open}>
        <SubmissionDialogTitle />
        <SubmissionDialogContent />
        <SubmissionDialogActions onClose={onClose} />
    </Dialog>
);
