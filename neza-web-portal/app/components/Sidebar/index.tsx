'use client'
import React, { useState, useEffect } from "react";
import { CgMenu } from "react-icons/cg";
import { RxDashboard, RxExit, RxPerson, RxPieChart } from "react-icons/rx";
import Link from "next/link";
import classNames from "classnames";
import LogoutModal from "@/app/modals/SignOutPopUp";
import Profile from "../../profile/page";
import { link } from "fs";

type MenuItem = {
  id: number;
  label: string;
  link: string;
  icon: JSX.Element;
};

const SideBar = () => {
  const menuItems: MenuItem[] = [
    { id: 1, label: "Dashboard", link: "/", icon: <RxDashboard /> },
    { id: 2, label: "Data Management", link: "/datamanagement", icon: <RxPieChart /> },
    { id: 3, label: "Profile", link: '/profile', icon: <RxPerson /> },
  ];

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);


  const handleActiveLink=(link:any)=>{
   
    setActiveLink(link)
  }

  const handleSideBarToggle = () => {
    setToggleCollapse(!toggleCollapse);
    

  };

  const getNavItemClasses = (menu: MenuItem) => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap my-1 p-3 mt-9 transition duration-300",
      {
        "justify-center": toggleCollapse,
        "hover:text-yellow-500": !toggleCollapse && activeLink !== menu.link,
        "mr-2": toggleCollapse,
      
        "text-yellow-500": activeLink === menu.link || (menu.link === "/" && activeLink === "/"),
        "text-white": activeLink !== menu.link,
      }
    );
  };
  

  const handleMouseEnter = (menu: MenuItem) => {
    if (toggleCollapse && menu.link) {
      setActiveLink(menu.link);
    }
  };

  const handleMouseLeave = () => {
    if (toggleCollapse) {
    
    }
  };

  const handleLogoutConfirmation = ()=>{
  
  };

  const sidebarClasses = classNames("h-screen px-4 pt-8 pb-4 bg-green-800 flex flex-col justify-between transition-all duration-300", {
    "w-80": !toggleCollapse,
    "w-20": toggleCollapse,
    "items-center": toggleCollapse,
  });

  const logoClasses = classNames(" mt-10 ml-1", {
    "mt-10": !toggleCollapse,
    "mx-auto": toggleCollapse,
    "mt-20": toggleCollapse,
    "mb-13": toggleCollapse,
    "ml-2": toggleCollapse,
  });


  const collapseIconClasses = classNames("p-4 rounded bg-blue absolute right-0 transition-all duration-300 mb-4", {
    "rotate-180": toggleCollapse,
    "mr-3.5": toggleCollapse,
    "mb-1": toggleCollapse,
  });

  const exitIconClasses = classNames("text-white text-xl ", {
    "ml-[-15px]": toggleCollapse,
  });

  const logoutTextClasses = "text-white text-lg font-semibold ";

  
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
          <button className={collapseIconClasses} onClick={handleSideBarToggle}>
            <CgMenu className="text-white text-2xl mt-2 ml-1" />
          </button>
        </div>
        <div className="flex flex-col items-start mt-10 text-white font-nunito ">
          {menuItems.map(({ id, label, link, icon }) => (
            <Link key={id} href={link}>
              <div
                className={getNavItemClasses({ id, label, link, icon })}
                onMouseEnter={() => handleMouseEnter( icon.props)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleActiveLink(link)} 
              >
                <div className="mr-5">
                  {React.cloneElement(icon, {
                    className: classNames("w-22 h-23 font-bold flex-shrink-0", {
                      "": activeLink === link,
                    }),
                  })}
                </div>
                {!toggleCollapse && (
                  <span className={classNames("text-lg font-semibold", {
                    "": activeLink === link,
                  })}>
                    {label}
                  </span>
                )}
              </div>
            </Link>
          ))}
          <div
            className={getNavItemClasses({ id: 4, label: "Log Out", link: "/logOut", icon: <RxExit /> })}
            onClick={() => setShowLogoutPopup(true)}
          >
            <div className="ml-[-8px] mt-[-8px]">
              <div
                className={`group flex items-center text-ml gap-5 font-medium p-2 hover:bg-hoverblue rounded-md mt-1 font-nunito `}
                onClick={handleLogoutConfirmation}
              >
                <span className={classNames(exitIconClasses, { "text-yellow-500": activeLink === "/logOut" })}>
                  {React.cloneElement(<RxExit />, {
                    className: classNames("w-22 h-23 font-bold flex-shrink-0", {
                      "text-yellow-500": activeLink === "/logOut",
                    }),
                  })}
                </span>
                {!toggleCollapse && (
                  <h2 className={classNames(logoutTextClasses, { "text-yellow-500": activeLink === "/logOut" })}>Log Out</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogoutPopup && (
        <LogoutModal
          isOpen={showLogoutPopup}
          onClose={() => setShowLogoutPopup(false)}
          onLogout={handleLogoutConfirmation}
              activeLink={activeLink}
        />
      )}
    </div>
  );
};

export default SideBar;