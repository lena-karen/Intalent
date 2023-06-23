import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useIntl } from "react-intl";
import "./index.scss";

type profileProps = {
  children: React.ReactNode;
};

export const ProfileItem = ({ children }: profileProps) => {
  const intl = useIntl();
  return (
    <Box sx = {{display: 'flex', gap: '1rem', alignItems: 'center'}}>
      {children}
      <Box>
        <Tooltip title={intl.formatMessage({ id: "profile.edit" })}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={intl.formatMessage({ id: "profile.save" })}>
          <IconButton>
            <DoneAllIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
