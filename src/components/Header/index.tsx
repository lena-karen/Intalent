import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { ColorModeContext } from '../../theme/themeContext'
import Select, { StylesConfig, components, GroupProps } from 'react-select'
import Logo from '../Logo'
import Nav from '../Nav'
import Search from '../Search'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { IUser, ISignUp } from '../../types'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme/themeContext'
import { RootState } from '../../redux/rootSaga'
import { authReducer } from '../../redux'
import { CiSettings, CiBellOn } from 'react-icons/ci'
import { AiOutlineLogin } from 'react-icons/ai'
import { MdOutlineLanguage, MdOutlineManageAccounts } from 'react-icons/md'
import './index.scss'
import { IconContext } from 'react-icons'
import { Icon } from '../Icon'
import { Link } from 'react-router-dom'
export default function Header() {

	const colorMode = useContext(ColorModeContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
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

	  console.log({...colorStyles})
	//const user: ReturnType< typeof authReducer> = useSelector((store : RootState) => store.authUser)
	const user = {}
	const [lang, setLang] = useState('EN')
	const languages = [
		{ value: 'en', label: 'EN'},
		{ value: 'ru', label: 'RU'},
		{ value: 'de', label: 'DE'},
	]

  return (
	<header className = 'header'>
		<Logo />
		<Search />

		<div className = 'header__menu'>
			<Nav />
			<div className='header__menu__select'>
				<Select 
					options={languages}
					//onChange = {(e) => setLang(e.target.option)}
					className = 'react-select-container'
					classNamePrefix = "react-select"
					placeholder = {	
					<Icon 
						icon = {<MdOutlineLanguage size={24} />} 
						className = 'header__menu__select__icon'
					/>
					}
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

			{/* <Icon icon = {<CiSettings size={24}/>} style = { {fill: 'white'}} /> */}

			<Icon icon = {<CiBellOn size={24}/>} style = { {fill: 'white'}} />
			
		
			<Link to = '/'>
				<Icon icon = {<MdOutlineManageAccounts size={24}/>} />
			</Link>

			
			<Link to = 'login'>       
				<Icon title = 'Login' icon = {<AiOutlineLogin size={24}/>} style = { {fill: 'white'}} />
			</Link>

			<div onClick={colorMode.toggleColorMode} className='header__menu__theme'>
				{
					theme.palette.mode === 'dark' 
					? (<DarkModeIcon height={28} width={28}/>)
					: (<LightModeIcon height={28} width={28}/>)
				}
			</div>
		</div>

	</header>
  )
}
