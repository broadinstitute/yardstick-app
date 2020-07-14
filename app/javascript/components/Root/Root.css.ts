import {createStyles, makeStyles} from "@material-ui/core/styles";

const styles = {
    root: {
        display: "flex",
    },
};

const style = () => createStyles(styles);

export const useStyles = makeStyles(style);
