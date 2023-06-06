import React, {useCallback, useRef, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Input } from '../Input'
// import { signUpRequestAction, logInRequestAction } from '../../redux/auth/actions'
// import { authRequestAction } from '../../redux/actions/authAction'
import { signUpSaga, logInSaga, signUpRequestAction, logInRequestAction } from '../../redux'
//import { logInRequestAction } from '../../redux/actions/logInRequestAction'

import Button from '../Button'
import './index.scss'
//import axios from '../../requests/axios'

type formData = {
  email: string,
  password: string,
  confirm_password: string
}

export default function Form({route}: any) {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const {
          register, 
          handleSubmit, 
          reset, 
          watch,
          formState: {errors}
        } = useForm<formData>()

  const email = watch('email')
  const password = watch('password')
  const confirm_password = watch('confirm_password')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let isDisabled
  route === 'register' 
  ? isDisabled = !email || !password || !confirm_password
  : isDisabled = !email || !password
  type formValues = {
    email: string,
    password: string,
    confirm_password: string
  }
  // type FieldError = {
  //   type: string;
  //   ref?: HTMLElement;
  //   message?: string;
  // };

  const submit: SubmitHandler<formValues> = useCallback(() => {
    if (route === 'register') {
      console.log('reg')
      dispatch(signUpRequestAction({email, password, confirm_password}))
    } else {
      console.log('login')
      //dispatch(logInRequestAction({email, password}))
    }
    navigate('/')
    reset()
  }, [email, password, confirm_password])

  return (
	<form className = 'form' onSubmit = {handleSubmit(submit)}>
    <Input 
      placeholder = 'Your email'
      type = 'email' 
      className = 'form__input' 
      name = 'email'
      register = {register}
      rules = {{required: 'Email is required'}}
    />
    {
      errors.email 
      ? <p>{errors?.email.message}</p>
      : ''
    }

    <div className='form__password'>
      <Input 
        placeholder =  'Your password'
        type = {passwordVisible ? 'text' : 'password'} 
        className = 'form__input'
        name = 'password'
        register = {register}
        rules = {{required: 'Password is required'}}
      />
  
      <span className = 'form__password__eye' onClick={() => setPasswordVisible(prev => !prev)}>
        {
          passwordVisible 
            ? <IconContext.Provider value={{ style: { fill: 'black' } }}><AiFillEye /></IconContext.Provider>
            : <IconContext.Provider value={{ style: { fill: 'black' } }}><AiFillEyeInvisible /></IconContext.Provider>
        } 
      </span>
    </div>
    {
      errors.password 
      ? <p>{errors?.password.message}</p>
      : ''
    }
    {
      route === 'login' &&
      <div className = 'form__login'>
        <Link to = '/'>
          Forgot the password
        </Link>

        <Link to = '/register'>
          Not registered yet?
        </Link>
      </div>

    }
    {
      route === 'register' &&
      <>
        <div className='form__password'>
          <Input 
            placeholder = 'Confirm your password'
            type = {confirmPasswordVisible ? 'text' : 'password'}  
            className = 'form__input' 
            name = 'confirm_password'
            register={register}
            rules = {{required: 'Password is required'}}
          />

          <span className = 'form__password__eye' onClick={() => setConfirmPasswordVisible(prev => !prev)}>
            {
              confirmPasswordVisible 
              ? <IconContext.Provider value={{ style: { fill: 'black' } }}><AiFillEye /></IconContext.Provider>
              : <IconContext.Provider value={{ style: { fill: 'black' } }}><AiFillEyeInvisible /></IconContext.Provider>
            } 
          </span>
        </div>
        {
      errors.confirm_password 
      ? <p>{errors?.confirm_password.message}</p>
      : ''
    }
        <Link to = '/login'>
          Log in
        </Link>
      </>

    }

    <Button className = 'form__input' type = 'submit' title = 'Submit' isDisabled = {isDisabled} />
  </form>
  )
}
