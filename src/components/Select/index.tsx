import { CSSProperties } from '@mui/styled-engine'
import React, {FC} from 'react'
import Select, { StylesConfig } from 'react-select'
import { languages } from '../../constants/languages'
import './index.scss'

interface SelectProps {
	placeholder?: string | JSX.Element
	handleClick?: () => void,
}
export default function SelectComponent({placeholder, handleClick}: SelectProps) {
	const colorStyles: StylesConfig = {
		control: (styles) => ({ ...styles, color: 'gray' }),
		// option: (styles, { isDisabled, isFocused, isSelected }) => {
		//   return {
		// 	...styles,
		// 	backgroundColor: isDisabled
		// 	? undefined
		// 	: isSelected
		// 	? 'data.color'
		// 	: isFocused
		// 	? 'white'
		// 	: 'undefined',

		// 	color: isSelected
		// 	? isFocused
		// 	? 'white'
		// 	  	: 'white' 
		// 		: 'gray',
			
		// 	cursor: isDisabled ? 'not-allowed' : 'default',
		//   };
		// },
		valueContainer: (styles) => ({
			...styles,
			minWidth: '35px',
			padding: '0.2',
			border: '1px solid gray',
			//backgroundColor: isDisabled ? 'undefined' : 'gray'
		  }),
		input: (styles) => {
			return { 
				...styles, 
				padding: '0.2',
				//height: isFocused ? '24px' : 0
			}
		},
			
		placeholder: (styles) => ({ ...styles, padding: '0'}),
		singleValue: (styles) => ({ ...styles, padding: '0.2'}),
	  };

	return (
	 <div className='select'>
			<Select 
				options={languages}
				onChange = {handleClick}
				className = 'react-select-container'
				classNamePrefix = "react-select"
				placeholder = {placeholder}
				styles={colorStyles}
				isSearchable={false}
				theme={(theme) => ({
					...theme,
					borderRadius: 5,
					colors: {
					...theme.colors,
					primary25: 'gray',
					primary: 'black',
					},
				})}
			/>
	 </div>
  )
}
