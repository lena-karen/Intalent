import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../redux";

import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

import "./index.scss";

export const Layout = ({ lang, setLang }: any): JSX.Element => {
  const { data } = useSelector((state: RootState) => state.settings);

  return (
    <div className="layout">
      <div className="container">
        <Header lang={lang} setLang={setLang} />
        <div className="layout__content">
          {data?.isLoggedIn && (
            <div className="layout__content__sidebar">
              <Sidebar />
            </div>
          )}

          <main className="layout__main">
            
              <>
			  {data?.isLoggedIn && (
                <div className="layout__main__bg"></div>
				)}
                <Outlet />
              </>
            
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};
