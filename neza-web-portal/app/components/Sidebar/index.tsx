'use client';
import React, { useState } from "react";

import Link from "next/link";
import classNames from "classnames";
import LogoutModal from "@/app/modals/SignOutPopUp";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DescriptionIcon from '@mui/icons-material/Description';

import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

type MenuItem = {
  id: number;
  link: string;
  icon: JSX.Element;
  label: string;
};




const SideBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    return localStorage.getItem("activeLink") || "";
  });

  const menuItems: MenuItem[] = [
    {
      id: 1,
      link: "/dashboard",
      icon: <DashboardIcon />,
      label: "Dashboard",
    },
    {
      id: 2,
      link: "/datamanagement",
      icon: <CloudUploadIcon />,
      label: "Upload",
    },
    {
      id: 3,
      link: "/documentation",
      icon: <DescriptionIcon />,
      label: "Documentation",
    },

    {
      id: 4,
      link: "/logout",
      icon: <LogoutIcon />,
      label: "Logout",
    },
  ];

  const handleActiveLink = (link: string) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  const getNavItemClasses = (menu: MenuItem) => {
    return classNames("flex items-center gap-2 p-2 rounded-md hover:bg-gray-200", {
      "bg-gray-200": activeLink === menu.link,
    });
  };

  const sidebarClasses = classNames("h-screen  px-4 pt-8 pb-4 bg-yellow-500 flex flex-col justify-between transition-all duration-300", {
    "w-[-2px]": toggleCollapse,
  });

  const handleSideBarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleLogoutConfirmation = () => {
   
  };

  const handleMouseEnter = (menu: MenuItem) => {
    if (!toggleCollapse && menu.link) {
      setShowLabel(true);
      setLabelText(menu.label);
    }
  };

  const handleMouseLeave = () => {
    setShowLabel(false);
  };

  const [showLabel, setShowLabel] = useState(false);
  const [labelText, setLabelText] = useState("");


const logoClasses = classNames(" mt-10 ml-1", {
  "mt-10": !toggleCollapse,
  "mx-auto": toggleCollapse,
  "mt-20": toggleCollapse,
  "mb-13": toggleCollapse,
  "ml-2": toggleCollapse,
  });
  

  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col pl-3">
        <div className="flex items-center justify-between relative">
        <div className="flex items-center pl-1 gap-4 flex-col">
<img
src="/images/LOGO.png"
alt="Logo"
width={toggleCollapse ? 45 : 90}
height={toggleCollapse ? 28 : 56}
className={logoClasses}
/>
{!toggleCollapse && <div className="w-4" />}
</div>
        </div>
        <div className="flex flex-col items-start p-4 gap-[60px]">
          {menuItems.map((menu) => (
            <Link key={menu.id} href={menu.link}>
              <div
                className={getNavItemClasses(menu)}
                onClick={() => handleActiveLink(menu.link)}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap">
                  {activeLink === menu.link ? (
                    <span className="text-yellow-500">{menu.icon}</span>
                  ) : (
                    menu.icon
                  )}
                  {!toggleCollapse && showLabel && labelText === menu.label && (
                    <span className={activeLink === menu.link ? "text-yellow-500" : ""}>
                      {menu.label}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {showLogoutPopup && (
        <LogoutModal isOpen={showLogoutPopup} onClose={() => setShowLogoutPopup(false)} onLogout={handleLogoutConfirmation} activeLink={activeLink} />
      )}
    </div>
  );
};

export default SideBar;
