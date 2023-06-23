import React, { useState } from "react";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { TextField, MenuItem, Box } from "@mui/material";
import "./index.scss";

export const categories = [
  {
    id: "1",
    value: 'medicine',
    label: "Medicine",
  },
  {
    id: "2",
    value: 'Lawyer',
    label: "Lawyer",
  },
  {
    id: "3",
    value: 'Media',
    label: "Media",
  },
  {
    id: "4",
    value: 'Appartments',
    label: "Appartments",
  },
  {
    id: "5",
    value: 'Study',
    label: "Study",
  },
  {
    id: "6",
    value: 'Insurance',
    label: "Insurance",
  },
  {
    id: "7",
    value: 'In house',
    label: "In house",
  },
  {
    id: "8",
    value: 'Renovation',
    label: "Renovation",
  },
];

export default function Sidebar() {
  const [category, setCategory] = useState(categories[0].label);
  return (
    <aside className="sidebar">
      {categories.map((category) => (
        <div className="sidebar__link__block" key={category.id}>
          <a href="#" className="sidebar__link__block__a">
            {category.label}
            <IconContext.Provider value={{ style: { fill: "white" } }}>
              <MdKeyboardDoubleArrowRight />
            </IconContext.Provider>
          </a>
        </div>
      ))}
      
    </aside>
  );
}
