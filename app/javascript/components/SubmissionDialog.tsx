import * as React from "react";
import {Dialog} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SubmissionDialogContent from "./SubmissionDialogContent";
import SubmissionDialogActions from "./SubmissionDialogActions";
import SubmissionDialogTitle from "./SubmissionDialogTitle";

type CreateSubmissionProps = {
    onClose: () => void
    open: boolean
}

const SubmissionDialog = ({onClose, open}: CreateSubmissionProps) => {
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog fullScreen={fullScreen} onClose={onClose} open={open}>
            <SubmissionDialogTitle/>
            <SubmissionDialogContent/>
            <SubmissionDialogActions onClose={onClose}/>
        </Dialog>
    )
};

export default SubmissionDialog;
