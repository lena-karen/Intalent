import React, {useEffect, useState} from 'react'
import Form from '../../components/Form'
import Title from '../../components/Title'

import { FormattedMessage, useIntl } from 'react-intl'
import { LoadingButton } from '@mui/lab';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

import { useNavigate, Link } from 'react-router-dom'
import { FormInput } from '../../components/FormInput'
import { useDispatch } from 'react-redux';
import { literal, object, string, TypeOf} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, FormControlLabel, FormGroup, FormHelperText, Typography, Checkbox } from '@mui/material';
import { logInRequestAction } from '../../redux';

import './index.scss'

export default function LogInPage() {
	const [loading, setLoading] = useState(false);

	const intl = useIntl()
	const registerSchema = object({
		email: string().nonempty(intl.formatMessage({id: 'form.email'})),
		password: string()
			.nonempty(intl.formatMessage({id: 'form.password'}))
			.min(8, intl.formatMessage({id: 'form.password.min'}))
			.max(32, intl.formatMessage({id: 'form.password.max'})),
		})

	type RegisterInput = TypeOf<typeof registerSchema>;

	const methods = useForm<RegisterInput>({
	resolver: zodResolver(registerSchema),
	defaultValues: {
		email: '',
		password: '',
	}
	});

	const {
			handleSubmit, 
			reset, 
			register,
			formState: {isSubmitSuccessful, errors}
		} = methods;

	useEffect(() => {
	if (isSubmitSuccessful) {
		reset();
	}
	}, [isSubmitSuccessful]);

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const submit: SubmitHandler<RegisterInput> = ({email, password}) => {
		console.log('login', email, password)
		dispatch(logInRequestAction({email, password}))
	  navigate('/')
	}
  return (
	<section className = 'login'>
		<Title type = 'h1'>
      		<FormattedMessage id = {'login.title'} />
    	</Title>
		<FormProvider {...methods}>
			<Box
				component='form'
				noValidate
				autoComplete='off'
				onSubmit={handleSubmit(submit)}
				sx = {{dispay: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}}
			>
				<FormInput 
					name = 'email' 
					fullWidth
					sx={{ mb: 2 }}
					errors = {errors}
					placeholder = {intl.formatMessage({id: 'register.email'})}
				/> 
				<FormHelperText error={!!errors['email']} sx = {{mb: '1rem'}}>
					{errors['email'] ? errors['email'].message : ''}
				</FormHelperText>

				<FormInput 
					name = 'password' 
					fullWidth
					sx={{ mb: 2 }}
					errors = {errors}
					placeholder = {intl.formatMessage({id: 'register.password'})}
					isPassword = {true}
				/>
				<FormHelperText error={!!errors['password']} sx = {{mb: '1rem'}}>
					{errors['password'] ? errors['password'].message : ''}
				</FormHelperText>

				<LoadingButton 
					loading = {loading} 
					variant="outlined" 
					fullWidth type = 'submit'
					sx = {{borderColor: 'gray', color: 'gray', mb: '1rem'}}
				>
					<span>{intl.formatMessage({id: 'login.submit'})}</span>
				</LoadingButton>
				
        <div className = 'login__buttons'>
            <Link to = '/'>
              <FormattedMessage id = 'login.forgot' />
            </Link>

            <Link to = '/register'>
              <FormattedMessage id = 'login.registered' />
            </Link>
        </div>
    
			</Box>
		</FormProvider>
	</section>  
)}
