import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigateItem{
    path: string;
    label: string;
}

interface Props{
    navigationItems: NavigateItem[];
}

const NavigationMenu = ({ navigationItems }: Props) => {
    const location = useLocation();
    const storedPath = localStorage.getItem("selectedPath");
    const [currentPath, setCurrentPath] = useState<string>(
      storedPath || location.pathname
    );

    useEffect(() => {
      localStorage.setItem("selectedPath", currentPath);
    }, [currentPath]);
    return (
      <div>
        <header className="text-4xl mb-[29px] text-black">Chapter40</header>
        <div className="p-[16px] font-montserrat text-borderDark text-[20px] space-x-[20px] mb-[26px]">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.path}>
              <Link
                to={item.path}
                className={currentPath === item.path ? "text-[#36254B]" : ""}
                onClick={() => setCurrentPath(item.path)}
              >
                {item.label}
              </Link>
              {index < navigationItems.length - 1 && <span className="ml-[20px] text-[#606060]">/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
};

export default NavigationMenu;