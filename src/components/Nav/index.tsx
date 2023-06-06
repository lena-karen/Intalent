import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//import { logOutAction } from '../../redux/actions/logOutAction'
import { RiAccountCircleLine } from 'react-icons/ri'
// import { CgProfile } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { CiBellOn } from 'react-icons/ci'
import { AiOutlineLogin } from 'react-icons/ai'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { Icon } from '../Icon'

import './index.scss'

export default function Nav() {

  const dispatch = useDispatch()

  const handleLogOut = () => {
    localStorage.clear()
    //dispatch(logOutAction(user))
  }
  return (
	<nav className = 'nav'>
			<Link to = '/'>
        <Icon icon = {<CiBellOn size={24}/>} style = { {fill: 'white'}} />
      </Link>

			
			<Link to = '/'>
				<Icon icon = {<MdOutlineManageAccounts size={24}/>} />
			</Link>

			<Link to = 'login'>       
				<Icon title = 'Login' icon = {<AiOutlineLogin size={24}/>} style = { {fill: 'white'}} />
			</Link>
  </nav>
  )
}
