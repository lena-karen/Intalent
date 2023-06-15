import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode} from './theme/themeContext'
import { loadSettingsRequestAction } from './redux';
import { IntlProvider } from 'react-intl'
import { messages, LOCALES, DEFAULT_LANG } from './lang'
import { FavoritesPage } from './pages/FavoritesPage';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LogInPage from './pages/LogInPage';
import ProfilePage from './pages/ProfilePage';
import axios from 'axios'

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
  const [location, setLocation] = useState({
    ip: "",
    countryName: "",
    countryCode: "",
    city: "",
    timezone: ""
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setLocation({
          ...location,
          ip: data.ip,
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          timezone: data.timezone
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dispatch = useDispatch()
  
  const [theme, colorMode] = useMode()
  const [lang, setLang] = useState(navigator.language)


  useEffect(() => {
    getGeoInfo();
    const currentLang = localStorage.getItem('lang')
    if (currentLang) {
      setLang(JSON.parse(currentLang))
    } else {
      if (Object.values(LOCALES).includes(lang)) {
        localStorage.setItem('lang', JSON.stringify(lang))
      } else {
        localStorage.setItem('lang', JSON.stringify(DEFAULT_LANG))
      }
    } 
    dispatch(loadSettingsRequestAction())
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
                <Route path = 'favorites' element = {<FavoritesPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App
