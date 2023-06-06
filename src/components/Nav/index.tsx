import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//import { logOutAction } from '../../redux/actions/logOutAction'
import { RiAccountCircleLine } from 'react-icons/ri'
// import { CgProfile } from 'react-icons/cg'
import { IconContext } from 'react-icons'

import Button from '../Button'

import './index.scss'

export default function Nav() {

  const dispatch = useDispatch()

  const handleLogOut = () => {
    localStorage.clear()
    //dispatch(logOutAction(user))
  }
  return (
	<nav className = 'nav'>
   

    {/* <div className='nav__profile'> */}
      {/* <IconContext.Provider value={{ style: { fill: 'white' } }}>
        <div className='nav__profile__icon'>
          <RiAccountCircleLine />
        </div>
      </IconContext.Provider> */}
      {/* <Button handleClick = {handleLogOut} className = 'nav__btn' title = 'Account' />
    </div> */}
 
		{/* {
			user?.isLoggedIn
			? <Link to = 'login'>
          <Button handleClick = {handleLogOut} className = 'nav__btn' title = 'Log out' />
        </Link>
			: <Link to = 'login'>
          <Button className = 'nav__btn' title = 'Log in' />
        </Link>
		} */}
    {/* <Link to = 'register'>
      <Button>Sign up</Button>
    </Link> */}
  </nav>
  )
}
