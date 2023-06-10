import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { InputAdornment, TextFieldProps, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type formInputProps = {
	name: string
  placeholder: string ,
  isPassword?: boolean,
  errors: any
} & TextFieldProps

export const FormInput: React.FC<formInputProps> = ({name, placeholder, isPassword = false, errors, ...props}: formInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const { control} = useFormContext()

  return (
    <Controller 
      name = {name}
      control = {control}
      render = {({field}) => (
        <TextField
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          type = {
            isPassword 
            ? passwordVisible ? 'text' : 'password'
            : 'text'
          }
          {...field}
          {...props}
          error = {!!errors[name]}
          helperText = {errors[name] ? errors[name]?.message?.toString() : ''}

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
     )}
  />
)}
