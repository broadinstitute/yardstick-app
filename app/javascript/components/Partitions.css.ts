import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = {};

const style = (_: Theme) => createStyles(styles);

export const useStyles = makeStyles(style);
