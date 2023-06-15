import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { ColorModeContext } from '../../theme/themeContext'
import { IUser, ISignUp } from '../../types'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme/themeContext'
import { RootState } from '../../redux/rootSaga'
import { authReducer } from '../../redux'
import { MdOutlineLanguage } from 'react-icons/md'
import { Icon } from '../Icon'
import { useIntl } from 'react-intl'
import { CustomInput } from '../CustomInput'
import CustomTooltip from '../Tooltip'
import SelectComponent from '../Select'
import Logo from '../Logo'
import Nav from '../Nav'
import Search from '../Search'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AccountMenu from '../Menu'
import Tooltip from '@mui/material/Tooltip';
import './index.scss'

export default function Header({setLang}: any) {

	const colorMode = useContext(ColorModeContext)
	const theme = useTheme()
	//const colors = tokens(theme.palette.mode)
	const intl = useIntl()
	//const user: ReturnType< typeof authReducer> = useSelector((store : RootState) => store.authUser)
	const user = {}

  return (
	<header className = 'header'>
		<Logo />

		<Search />
		<Nav />

		<div className = 'header__menu'>
			
			<div className='header__menu__select'>
				<SelectComponent 
					placeholder={
						<Icon 
							icon = {<MdOutlineLanguage size={24} />} 
							className = 'header__menu__select__icon'
						/>
					}
					setLang = {setLang}
				/>
			</div>

			<div onClick={colorMode.toggleColorMode} className='header__menu__theme'>
			<Tooltip title = {intl.formatMessage({id: 'header.theme'})}>
				{
					theme.palette.mode === 'dark' 
					? <DarkModeIcon height={28} width={28}/>
					: <LightModeIcon height={28} width={28}/>
				}
			</Tooltip>
			</div>
		</div>

	</header>
  )
}
