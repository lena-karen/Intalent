import React, { useState } from "react";

import { TextField, Box, MenuItem, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { categories, CustomSelect } from "../../components";
import { useIntl } from "react-intl";


export default function Search() {
  const intl = useIntl();
  type categoryType = {
    id?: string
    label: string
    value: string
  }
  const [category, setCategory] = useState<categoryType>(categories[0]);
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiInputBase-input": { padding: "5px", outline: "none" },
        "& .MuiInputBase-root": { border: ".1rem solid gray", borderRadius: 0, height: '33.39px' },
      }}
    >
      <TextField
        id="input-with-sx"
        focused
        placeholder={intl.formatMessage({ id: "search.placeholder" })}
        sx={{
          color: "gray",
          "& .MuiInputBase-root": {
            borderTopLeftRadius: ".5rem",
            borderBottomLeftRadius: ".5rem",
          },
        }}
      />

      <CustomSelect list = {categories} initial={categories[0].value} value = {category} setValue = {setCategory} />
      {/* <TextField
        id="demo-simple-select"
        value={categories[0].title}
        focused
        select
        onChange={(e) => setCategory(e.target.value)}
        sx={{
          width: 200,
          "& .MuiInputBase-root": {
            borderTopRightRadius: ".5rem",
            borderBottomRightRadius: ".5rem",
          },
        }}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.title}>
            {category.title}
          </MenuItem>
        ))}
      </TextField> */}

      <SearchIcon
        sx={{
          color: "gray",
          height: '33.39px',
          width: '33.39px',
          border: '.1rem solid gray',
          borderRadius: '.5rem',
          marginLeft: "5%"
        }}
      />
    </Box>
  );
}
