//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logInSaga } from './redux'
import Layout from './components/Layout';
import { HomePage } from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LogInPage from './pages/LogInPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode} from './theme/themeContext'
import { IUser } from './types'
import { RootState } from './redux';
import { logInRequestAction } from './redux';

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
  return (
 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Layout />}>
              <Route index element = {<HomePage />} />
              <Route path = ':route' element = {<LogInPage />} /> 
              <Route path = ':route' element = {<RegistrationPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App
