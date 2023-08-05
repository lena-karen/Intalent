import React, {useCallback} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CiBellOn } from 'react-icons/ci'
import { AiOutlineLogin } from 'react-icons/ai'
import { Icon } from '../Icon'
import { useIntl } from 'react-intl'
import { RootState, saveSettingsRequestAction } from '../../redux'

import Tooltip from '@mui/material/Tooltip';
import AccountMenu from '../Menu'

import './index.scss'

export default function Nav() {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.settings)
  const intl = useIntl()

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('user')
    dispatch(saveSettingsRequestAction({token: null, isLoggedIn: false}))
  }, [dispatch])

  return (
	<nav className = 'nav'>

    { data?.isLoggedIn && 
      <>
        <Tooltip title = {intl.formatMessage({id: 'popup_menu.messages'})}>
          <Link to = '/'>
            <Icon icon = {<CiBellOn size={24}/>} style = { {fill: 'white'}} />
          </Link>
        </Tooltip>
        {/* <AccountMenu />  */}
      </>
    }

    {
      data?.isLoggedIn
      ?     
      <Tooltip title = {intl.formatMessage({id: 'popup_menu.logout'})}>
        <div onClick={handleLogOut}>
          <Link to = 'login'>       
            <Icon title = {intl.formatMessage({id: 'popup_menu.logout'})} icon = {<AiOutlineLogin size={24}/>} style = { {fill: 'white'}} />
          </Link>
        </div>
      </Tooltip>
      :
      <Tooltip title = {intl.formatMessage({id: 'login.title'})}>
        <Link to = 'login'>       
          <Icon title = {intl.formatMessage({id: 'login.title'})} icon = {<AiOutlineLogin size={24}/>} style = { {fill: 'white'}} />
        </Link>
      </Tooltip>

    }


  </nav>
  )
}
