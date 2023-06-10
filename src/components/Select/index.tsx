import { CSSProperties } from '@mui/styled-engine'
import React, {FC, useEffect} from 'react'
import Select, { StylesConfig } from 'react-select'
import { languages } from '../../lang/locales'
import './index.scss'

interface SelectProps {
	placeholder?: string | JSX.Element
	setLang: (e: any) => void,
}
export default function SelectComponent({placeholder, setLang}: SelectProps) {

	const changeLanguage = (option: any) => {
		console.log(option)
		localStorage.setItem('lang', JSON.stringify(option.value))
		setLang(option.value)
	}
	const colorStyles: StylesConfig = {
		control: (styles) => ({ ...styles, color: 'gray' }),

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
				onChange = {changeLanguage}
				defaultValue = {languages[3].value}
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
