import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, InputAdornment, TextFieldProps, TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type formInputProps = {
	name: string
  placeholder: string ,
  isPassword?: boolean,
  isPhone?: boolean,
  defaultCountry?: string,
  lang?: string,
  errors: any
} & TextFieldProps

export const FormInput: React.FC<formInputProps> = ({name, placeholder, isPassword = false, defaultCountry = 'de', isPhone = false, lang, errors, ...props}: formInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const { control} = useFormContext()

  return (
    <Controller 
      name = {name}
      control = {control}
      render = {({field}) => (
        <Box sx = {{ "& label.Mui-focused": {color: 'gray'} }}>
          {
            isPhone
            ? 
            <MuiTelInput 
              // value={value} 
              // onChange={handlePhone}
              variant="standard"
              defaultCountry='DE'
              focusOnSelectCountry
              forceCallingCode
              langOfCountryName = {lang}
              {...field}
              placeholder={placeholder}
              sx={{
                '& .MuiTelInput-TextField':
                {width: "100%",
                borderBottomColor: "gray",
                color: "gray",
                backgroundColor: "inherit",
                border: "none",}
              }}
            />
         :
         <TextField
            sx={{ ml: 1, flex: 1, color: 'gray',
              '& .MuiInput-underline:after': {borderBottomColor: 'gray'},
              "& .MuiFormLabel-root label.Mui-focused": {color: 'gray'}, 
              '&$focused': {
                color: 'gray',
              },
              '&: focus span': {color: 'gray'},
            }}

            label={placeholder}
            variant="standard"
            type = {
              isPassword 
              ? passwordVisible ? 'text' : 'password'
              : 'text'
            }
            {...field}
            {...props}
            // error = {!!errors[name]}
            // helperText = {errors[name] ? errors[name]?.message?.toString() : ''}

            InputProps={{
              endAdornment: isPassword 
              ? (
                <InputAdornment position="end" onClick={() => setPasswordVisible(prev => !prev)}>
                {
                  !passwordVisible 
                  ? <VisibilityIcon sx={{fontSize: '1rem'}} />
                  : <VisibilityOffIcon sx={{fontSize: '1rem'}}/>
                }
                </InputAdornment>
              ) 
              : null
            }}
            />
          }
      </Box>
     )}
  />
)}
