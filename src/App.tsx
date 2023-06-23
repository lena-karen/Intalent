import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/themeContext";
import { loadSettingsRequestAction } from "./redux";
import { IntlProvider } from "react-intl";
import { messages, LOCALES, DEFAULT_LANG } from "./lang";

import { Layout } from "./components";
import { HomePage, RegistrationPage, LogInPage, ProfilePage, MessagesPage, FavoritesPage } from "./pages";

import { useGeoInfo } from "./hooks";

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
  const location = useGeoInfo();
  console.log(location);
  const dispatch = useDispatch();

  const [theme, colorMode] = useMode();
  const [lang, setLang] = useState(navigator.language);

  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    if (currentLang) {
      setLang(JSON.parse(currentLang));
    } else {
      if (Object.values(LOCALES).includes(lang)) {
        localStorage.setItem("lang", JSON.stringify(lang));
      } else {
        localStorage.setItem("lang", JSON.stringify(DEFAULT_LANG));
      }
    }
    dispatch(loadSettingsRequestAction());
  }, []);

  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    if (currentLang) {
      setLang(JSON.parse(currentLang));
    }
  }, [lang]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider locale={lang} messages={messages[lang]}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Layout lang={lang} setLang={setLang} />}
              >
                <Route index element={<HomePage />} />
                <Route path="login" element={<LogInPage />} />
                <Route path="register" element={<RegistrationPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="messages" element={<MessagesPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
