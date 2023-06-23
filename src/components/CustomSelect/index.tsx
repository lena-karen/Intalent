import { TextField, MenuItem, Box, Autocomplete } from "@mui/material";
import React, { useState } from "react";
import {countryType, cityType } from '../../types'

type itemType = {
  id?: string;
  flag?: string;
  value: string;
  label: string;
};

//type itemType = countryType //| cityType

interface SelectProps {
  list: itemType[] ;
  initial: string;
  value: itemType;
  setValue: any;
  isCountry?: boolean;
  isCity?: boolean
}
export const CustomSelect = ({
  list,
  initial,
  value,
  setValue,
  isCountry = false,
  isCity = false
}: SelectProps) => {

  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState(initial);

  const handleChange = (e: any, newValue: itemType | null): void => {
    setValue(newValue);
    console.log(e);
  };

  const handleInputChange = (e: any, newValue: string): void => {
    setInputValue(newValue);
    console.log(e);
  };

  return (
    <>
      {
      (isCountry && !isCity) ? (
        <Autocomplete
          options={list}
          autoHighlight
          value={value}
          disableClearable={!!value}
          onChange={handleChange}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          getOptionLabel={(option) => option.label}
          sx={{
            "& .MuiFormControl-root": { height: "33.39px", width: "100%" },
            "& .MuiButtonBase-root": {
              padding: 0,
            },
            "& .MuiInputBase-root": {
              padding: 0,
              height: "33.39px",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              border: "0.1rem solid gray",
            },
            "& .MuiOutlinedInput-root .MuiAutocomplete-input": {padding: '0.5px 4px 1.5px 5px'},
            "& .MuiFormLabel-root": { top: "-25%" },
          }}
          renderInput={(params) => (
            <TextField
              focused
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
          renderOption={(props, option) => (
              <Box
              component="li"
              sx={{
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                height: "100%",
                marginLeft: ".3rem",
              }}
              {...props}
            >
              {option.flag} {option.label}
            </Box>
            )
          }
        />
      ) : 
      isCity ?
      (
        <Autocomplete
          options={list}
          autoHighlight
          value={value}
          disableClearable={!!value}
          onChange={handleChange}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          getOptionLabel={(option) => option.label}
          sx={{
            "& .MuiFormControl-root": { height: "33.39px", width: "100%" },
            "& .MuiButtonBase-root": {
              padding: 0,
            },
            "& .MuiInputBase-root": {
              padding: 0,
              height: "33.39px",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              border: "0.1rem solid gray",
            },
            "& .MuiOutlinedInput-root .MuiAutocomplete-input": {padding: '0.5px 4px 1.5px 5px'},
            "& .MuiFormLabel-root": { top: "-25%" },
          }}
          renderInput={(params) => (
            <TextField
              focused
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
          renderOption={(props, option) => (
              <Box
              component="li"
              sx={{
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                height: "100%",
                marginLeft: ".3rem",
              }}
              {...props}
            >
              {option.label}
            </Box>
            )
          }
        />
      )
      :
      (
        <TextField
          id="demo-simple-select"
          value={item}
          focused
          select
          onChange={(e) => setItem(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              borderTopRightRadius: ".5rem",
              borderBottomRightRadius: ".5rem",
              border: ".1rem solid gray",
              width: "10rem",
              "& .MuiSelect-select.MuiSelect-outlined": {
                padding: '0 0.3rem',
                borderRadius: ".5rem",
              },
            },
          }}
        >
          {list.map((el) => (
            <MenuItem key={el.id} value={el.value}>
              <>{el.label}</>
            </MenuItem>
          ))}
        </TextField>
      )}
    </>
  );
};
