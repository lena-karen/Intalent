import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';

import { useIntl } from 'react-intl'

export default function Search() {
  const intl = useIntl()

  return (
    <Box 
      sx={{ 
         display: 'flex', 
         justifyContent: 'center', 
         alignItems: 'center', 
         outline: 'none',         
         padding: 0,
        '& label.Mui-focused': {
          color: 'gray',
          top: '2px',
        },
        '& label': {top: '-10px', fontSize: '12px' },
        '& .MuiOutlinedInput-notchedOutline': {border: '2px solid gray', borderRadius: '.5rem'},

        '& .MuiInputBase-input': {padding: '5px', },
        '&: focus span': {color: 'gray'},
        '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {border: '1px solid gray'},
       }}
    >
       <TextField 
        id="input-with-sx" 
        label={intl.formatMessage({id: 'search.placeholder'})}  
        variant="outlined"
        sx={{ 
          color: 'gray',
        }}/> 
      <SearchIcon sx={{ color: 'gray', size: 'small', marginLeft: '-15%' }} />
    </Box>
  )
}
