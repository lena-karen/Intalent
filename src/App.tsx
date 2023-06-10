//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logInSaga } from './redux'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LogInPage from './pages/LogInPage';
import ProfilePage from './pages/ProfilePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode} from './theme/themeContext'
import { IUser } from './types'
import { RootState } from './redux';
import { logInRequestAction } from './redux';
//import { useIntl} from 'react-intl'
import { IntlProvider } from 'react-intl'
import {messages} from './lang/locales'
import { SettingsPage } from './pages/SettingsPage';
// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

function App() {
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const dispatch = useDispatch()
  //const intl = useIntl()
  //const user: IUser = useSelector((store : RootState) => store.authUser)
  const [logIn, setLogIn] = useState(false)
  
  // useEffect(() => {
  //   const currentUser = localStorage.getItem('user')
  //   console.log(typeof currentUser)
  //   if ( typeof currentUser === 'string') {
  //     dispatch(logInRequestAction(JSON.parse(currentUser)))
  //     setLogIn(true)
  //   }
  // }, [])
  const [theme, colorMode] = useMode()
  const [lang, setLang] = useState(navigator.language)


  useEffect(() => {
    const currentLang = localStorage.getItem('lang')
    if (currentLang) {
      setLang(JSON.parse(currentLang))
    } else {
      localStorage.setItem('lang', JSON.stringify(lang))
    }

  }, [])

  useEffect(() => {
    const currentLang= localStorage.getItem('lang')
    if (currentLang) {
      setLang(JSON.parse(currentLang))
    }
  }, [lang])

  return (
 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider locale={lang} messages={messages[lang]}>
          <BrowserRouter>
            <Routes>
              <Route path = '/' element = {<Layout setLang = {setLang} />}>
                <Route index element = {<HomePage />} />
                <Route path = 'login' element = {<LogInPage />} /> 
                <Route path = 'register' element = {<RegistrationPage />} />
                <Route path = 'profile' element = {<ProfilePage />} />
                <Route path = 'settings' element = {<SettingsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App
