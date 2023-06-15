import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

type inputProps = {
	placeholder: string,
	width?: number | string,
	height?: number | string,
	icon?: React.ReactNode,
	id?: string
}

export const CustomInput = ({placeholder, width = '100%', height = 33.39, icon, ...props}: inputProps) => {
  return (
    <Paper
    	sx={{ 
			display: 'flex', 
			alignItems: 'center', 
			width: {width}, 
			height: {height}, 
			border: '1px solid gray' 
		}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
		{...props}
      />
      <IconButton type="button" aria-label="search">
        { icon && icon }
      </IconButton>
    </Paper>
  );
}