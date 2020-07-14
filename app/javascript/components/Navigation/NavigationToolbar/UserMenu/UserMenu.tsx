import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

type UserMenuProps = {
    anchorEl: null | HTMLElement;
    onClose: () => void;
};

export const UserMenu = ({anchorEl, onClose}: UserMenuProps): JSX.Element => {
    const open = Boolean(anchorEl);

    return (
        <Menu
            anchorEl={anchorEl}
            id="appbar-user-menu"
            keepMounted
            onClose={onClose}
            open={open}
            transformOrigin={{horizontal: "center", vertical: "bottom"}}
        >
            <MenuItem component="a" href="/user" onClick={onClose}>
                Your profile
            </MenuItem>

            <MenuItem
                component="a"
                data-method="delete"
                href="/users/sign_out"
                onClick={onClose}
            >
                Sign out
            </MenuItem>
        </Menu>
    );
};
