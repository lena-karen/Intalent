import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CiBellOn } from 'react-icons/ci'
import { AiOutlineLogin } from 'react-icons/ai'
import { Icon } from '../Icon'
import { useIntl } from 'react-intl'

import CustomTooltip from '../Tooltip'
import AccountMenu from '../Menu'

import './index.scss'

export default function Nav() {
  const [isAccoutVisible, setIsAccoutVisible] = useState(false)
  const dispatch = useDispatch()

  const intl = useIntl()

  const handleLogOut = () => {
    localStorage.clear()
    //dispatch(logOutAction(user))
  }

  return (
	<nav className = 'nav'>
    <CustomTooltip title = {intl.formatMessage({id: 'popup_menu.messages'})}>
      <Link to = '/'>
          <Icon icon = {<CiBellOn size={24}/>} style = { {fill: 'white'}} />
        </Link>
    </CustomTooltip>

    <AccountMenu />

    <CustomTooltip title = {intl.formatMessage({id: 'login.title'})}>
      <Link to = 'login'>       
        <Icon title = {intl.formatMessage({id: 'login.title'})} icon = {<AiOutlineLogin size={24}/>} style = { {fill: 'white'}} />
		  </Link>
    </CustomTooltip>

  </nav>
  )
}
