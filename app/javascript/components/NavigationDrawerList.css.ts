import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styles = {};

const style = (theme: Theme) => createStyles(styles);

export const useStyles = makeStyles(style);
