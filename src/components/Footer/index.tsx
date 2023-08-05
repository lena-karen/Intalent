import React from "react";

import { Divider, Typography, useTheme } from "@mui/material";
import "./index.scss";
import Logo from '../Logo';

export default function Footer(): JSX.Element {
  const theme = useTheme();
  return (
    <footer className="footer" style = {{backgroundColor: theme.palette.background.paper}}>
      <Logo />
      <Typography variant="body1">
        Copyright &copy; {new Date().getFullYear()}{" "}
      </Typography>
    </footer>
  );
}
