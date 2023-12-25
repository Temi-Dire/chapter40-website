import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationMenu.css";

interface NavigateItem {
  path: string;
  label: string;
}

interface Props {
  navigationItems: NavigateItem[];
}

const NavigationMenu = ({ navigationItems }: Props) => {
  return (
    <div>
      <header className="text-4xl mb-[29px] text-black">Chapter40</header>
      <div className="p-[16px] font-montserrat text-borderDark text-[20px] space-x-[20px] mb-[26px]">
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
            {index < navigationItems.length - 1 && (
              <span className="ml-[20px] text-[#606060]">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
