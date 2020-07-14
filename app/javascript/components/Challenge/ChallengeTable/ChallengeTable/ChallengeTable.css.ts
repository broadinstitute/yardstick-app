import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const styles = {
    root: {
        fontFamily: "'Roboto Mono'",
    },
};

const style = (_: Theme) => createStyles(styles);

export const useStyles = makeStyles(style);
