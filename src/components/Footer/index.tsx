import React from "react";

import { Divider, Typography } from "@mui/material";
import "./index.scss";
import Logo from '../Logo';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Logo />
      <Typography variant="body1">
        Copyright &copy; {new Date().getFullYear()}{" "}
      </Typography>
    </footer>
  );
}
