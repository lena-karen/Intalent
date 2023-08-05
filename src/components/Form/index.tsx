import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { LoadingButton } from '@mui/lab';

import { FormattedMessage, useIntl } from 'react-intl'

import { FormInput } from '../FormInput'

import { literal, object, string, TypeOf} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, FormControlLabel, FormGroup, FormHelperText, Typography, Checkbox } from '@mui/material';

export default function Form({route}: any) {
  const [loading, setLoading] = useState(false);

  const intl = useIntl()
  const registerSchema = object({
    // name: string()
    // 	.nonempty('Name is required')
    // 	.max(32, 'Name must be less than 100 characters')
  
    email: string().nonempty(intl.formatMessage({id: 'form.email'})),
    password: string()
      .nonempty(intl.formatMessage({id: 'form.password'}))
      .min(8, intl.formatMessage({id: 'form.password.min'}))
      .max(32, intl.formatMessage({id: 'form.password.max'})),
    confirm_password: string().nonempty(intl.formatMessage({id: 'form.password.confirm'})),
    terms: literal(true, {
      errorMap: () => ({ message: intl.formatMessage({id: 'form.terms'}) }),
    }),
  }).refine(data => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: intl.formatMessage({id: 'form.password.match'})
  })
  
  type RegisterInput = TypeOf<typeof registerSchema>;

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
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

  const submit: SubmitHandler<RegisterInput> = ({email, password, confirm_password}) => {
    if (route === 'register') {
      console.log('register', email, password, confirm_password)
      //dispatch(signUpRequestAction({email, password, confirm_password}))
     } else {
      console.log('login', email, password)
      //dispatch(logInRequestAction({email, password}))
     }
    navigate('/')
  }

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(submit)}
        sx = {{
          dispay: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <FormInput 
          name = 'email' 
          variant='filled'
          fullWidth
          sx={{ mb: 2 }}
          errors = {errors}
          placeholder = {intl.formatMessage({id: 'register.email'})}
        /> 

        <FormInput 
          name = 'password' 
          fullWidth
          sx={{ mb: 2 }}
          errors = {errors}
          placeholder = {intl.formatMessage({id: 'register.password'})}
          isPassword = {true}
        />

        {
          route === 'register' &&
          <>
            <FormInput 
              name = 'confirm_password' 
              fullWidth
              sx={{ mb: 2 }}
              errors = {errors}
              placeholder = {intl.formatMessage({id: 'register.confirm_password'})}
              isPassword = {true}
            />

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    required 
                    sx = {{
                      '&.Mui-checked': {
                        color: 'gray',
                      },
                    }}
                  />
                }
                {...register('terms')}
              
                label={
                  <Typography 
                    sx = {{fontSize: '1rem'}}
                    color={errors['terms'] ? 'error' : 'inherit'}
                  >
                      {intl.formatMessage({id: 'terms'})}
                  </Typography>
                }
              />
              <FormHelperText error={!!errors['terms']} sx = {{mb: '1rem'}}>
                {errors['terms'] ? errors['terms'].message : ''}
              </FormHelperText>
            </FormGroup>
          </>
        }

        <LoadingButton 
          loading = {loading} 
          variant="outlined" 
          fullWidth type = 'submit'
          sx = {{borderColor: 'gray', color: 'gray', mb: '1rem'}}
        >
          <span>{intl.formatMessage({id: 'login.submit'})}</span>
        </LoadingButton>

        {
          route === 'login' 
          ?
          <div className = 'form__login'>
            <Link to = '/'>
              <FormattedMessage id = 'login.forgot' />
            </Link>

            <Link to = '/register'>
              <FormattedMessage id = 'login.registered' />
            </Link>
          </div>
          :             
          <Link to = '/login'>
            <FormattedMessage id = 'login.title' />
          </Link>
        }
      </Box>
    </FormProvider>

  )
}
