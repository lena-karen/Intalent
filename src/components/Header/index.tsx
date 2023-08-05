import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ColorModeContext } from "../../theme/themeContext";

import { useTheme, Select, MenuItem, TextField } from "@mui/material";
import { useIntl } from "react-intl";
import LanguageIcon from "@mui/icons-material/Language";

import Logo from "../Logo";
import Nav from "../Nav";
//import Search from "../Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { Tooltip, Box } from "@mui/material";
import "./index.scss";
import { languages } from "../../lang";
//import { categories } from "../Sidebar";

export default function Header({ lang, setLang }: any) {
  //const [category, setCategory] = useState(categories[0].label);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const intl = useIntl();
console.log(theme.palette)
  const handleChange = useCallback(
    (event: any) => {
      localStorage.setItem("lang", JSON.stringify(event.target.value));
      setLang(event.target.value);
    },
    [lang, setLang]
  );

  return (
    <header className="header" style = {{backgroundColor: theme.palette.background.paper}}>
      <Logo />
      
      {/* <Search />  */}
      <Nav />

      <div className="header__menu">
        <div className="header__menu__select">
          <TextField
            variant="outlined"
            InputLabelProps={{
              style: {
                fontSize: 18,
                color: "grey",
                backgroundColor: "white",
                fontFamily: "monospace",
                height: "33.39px",
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                height: "33.33px",
                width: "75px",
                borderRadius: ".5rem",
                border: ".1rem solid gray",
              },
              "& .MuiOutlinedInput-input": {
                overflow: "visible !important",
              },
            }}
            id="demo-simple-select"
            value={lang}
            select
            SelectProps={{ IconComponent: () => <LanguageIcon /> }}
            onChange={(e) => handleChange(e)}
          >
            {languages.map((l) => (
              <MenuItem key={l.value} value={l.value}>
                {l.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div
          onClick={colorMode.toggleColorMode}
          className="header__menu__theme"
        >
          <Tooltip title={intl.formatMessage({ id: "header.theme" })}>
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon height={28} width={28} />
            ) : (
              <LightModeIcon height={28} width={28} />
            )}
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
