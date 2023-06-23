import React, { useState, useCallback } from "react";
import {
  ListItemIcon,
  Avatar,
  Menu,
  Divider,
  Tooltip,
  MenuItem,
  Button,
} from "@mui/material";

import Settings from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import Logout from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { saveSettingsRequestAction } from "../../redux";
import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import { Icon } from "../Icon";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const intl = useIntl();
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = useCallback(() => {
	setAnchorEl(null)
  }, [setAnchorEl])
  
  const handleClose = useCallback(() => {
    localStorage.removeItem("user");
    dispatch(saveSettingsRequestAction({ token: null, isLoggedIn: false }));
    setAnchorEl(null);
  }, [dispatch]);

  const handleProfile = useCallback(() => {
    navigate("/profile");
    setAnchorEl(null);
  }, [navigate]);

  const handleFavorites = useCallback(() => {
    navigate("/favorites");
    setAnchorEl(null);
  }, [navigate]);

  const handleMessages = useCallback(() => {
    navigate("/messages");
    setAnchorEl(null);
  }, [navigate]);

  return (
    <div>
      <Tooltip title={intl.formatMessage({ id: "popup_menu.profile" })}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <a href="#">
            <Icon icon={<MdOutlineManageAccounts size={24} />} />
          </a>
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <Avatar sx={{ width: "20px", height: "20px" }} />
          </ListItemIcon>
          {intl.formatMessage({ id: "popup_menu.profile" })}
        </MenuItem>

        <MenuItem onClick={handleMessages}>
          <ListItemIcon>
            <MailIcon fontSize="small" />
          </ListItemIcon>
          {intl.formatMessage({ id: "popup_menu.messages" })}
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleFavorites}>
          <ListItemIcon>
            <FavoriteIcon fontSize="small" />
          </ListItemIcon>
          {intl.formatMessage({ id: "popup_menu.favorites" })}
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {intl.formatMessage({ id: "popup_menu.logout" })}
        </MenuItem>
      </Menu>
    </div>
  );
}
