import React, { useState } from "react";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { TextField, MenuItem, Box } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from '@mui/icons-material/Apartment';
import QuizIcon from '@mui/icons-material/Quiz';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

import { useIntl } from "react-intl";
import "./index.scss";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const intl = useIntl();
  type categoryType = {
    id: string
    value: string,
    label: string,
    icon: React.ReactNode,
    link: string
  }
  const categories: categoryType[] = [
    {
      id: "1",
      value: "personal",
      label: intl.formatMessage({ id: "sidebar.personal" }),
      icon: <AccountBalanceIcon />,
      link: '/profile'
    },
    {
      id: "2",
      value: "departments",
      label: intl.formatMessage({ id: "sidebar.departments" }),
      icon: <ApartmentIcon />,
      link: '/profile'
    },
    {
      id: "3",
      value: "tests",
      label: intl.formatMessage({ id: "sidebar.tests" }),
      icon: <QuizIcon />,
      link: '/profile'
    },
    {
      id: "4",
      value: "statistics",
      label: intl.formatMessage({ id: "sidebar.statistics" }),
      icon: <AnalyticsIcon />,
      link: '/profile'
    },
    {
      id: "5",
      value: "news",
      label: intl.formatMessage({ id: "sidebar.news" }),
      icon: <FeedIcon />,
      link: '/profile'
    },
    {
      id: "6",
      value: "settings",
      label: intl.formatMessage({ id: "sidebar.settings" }),
      icon: <SettingsIcon />,
      link: '/profile'
    },
    {
      id: "7",
      value: "help",
      label: intl.formatMessage({ id: "sidebar.help" }),
      icon: <HelpCenterIcon />,
      link: '/profile'
    },
  ];
  const [category, setCategory] = useState(categories[0].label);
  return (
    <aside className="sidebar">
      {categories.map((category) => (
        <div className="sidebar__link__block" key={category.id}>
          <Link to={category.link} className="sidebar__link__block__a">
            {category.icon}
            {category.label}

            <IconContext.Provider value={{ style: { fill: "white" } }}>
              <MdKeyboardDoubleArrowRight />
            </IconContext.Provider>
          </Link>
        </div>
      ))}
    </aside>
  );
}
