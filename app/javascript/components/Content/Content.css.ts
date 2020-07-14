import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const style = (theme: Theme) => {
    const styles = {
        content: {
            flexGrow: 1,
        },
        toolbar: theme.mixins.toolbar,
    };

    return createStyles(styles);
};

export const useStyles = makeStyles(style);
