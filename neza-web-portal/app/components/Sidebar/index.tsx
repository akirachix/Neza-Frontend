'use client';
import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { RxDashboard, RxExit, RxPerson, RxPieChart } from "react-icons/rx";
import Link from "next/link";
import classNames from "classnames";
import LogoutModal from "../SignOutPopUp";

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
    { id: 3, label: "Profile", link: "/profile", icon: <RxPerson /> },
  ];

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleSideBarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const getNavItemClasses = (menu: MenuItem) => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap my-1 p-3 mt-9 transition duration-300",
      {
        "text-yellow-500": activeMenuItem && activeMenuItem.id === menu.id,
        "justify-center": toggleCollapse,
        "hover:text-yellow-500": !toggleCollapse,
        "mr-2": toggleCollapse,
      }
    );
  };

  const handleMouseEnter = (menu: MenuItem) => {
    if (toggleCollapse) {
      setActiveMenuItem(menu);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenuItem(null);
  };

  const handleLogoutConfirmation = async () => {
    try {
      const response = await fetch("https://nezabackend-2a2e9782ab7f.herokuapp.com/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/signup";
      } else {
        console.error("Sign-out request failed");
      }
    } catch (error) {
      console.error("Sign-out request failed", error);
    }
  };

  const sidebarClasses = classNames("h-screen px-4 pt-8 pb-4 bg-green-800 flex flex-col justify-between transition-all duration-300", {
    "w-80": !toggleCollapse,
    "w-20": toggleCollapse,
    "items-center": toggleCollapse,
  });

  const logoClasses = classNames("hover:text-yellow-500 mt-10 ml-1", {
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

  const exitIconClasses = classNames("text-white text-xl hover:text-yellow-500 ", {
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
                onMouseEnter={() => handleMouseEnter({ id, label, link, icon })}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mr-5">
                  {React.cloneElement(icon, {
                    style: {
                      width: "22px",
                      height: "23px",
                      fontWeight: "bold",
                      flexShrink: 0,
                    },
                  })}
                </div>
                {!toggleCollapse && <span className="text-white text-lg font-semibold">{label}</span>}
              </div>
            </Link>
          ))}
          <div
            className={getNavItemClasses({ id: 4, label: "Log Out", link: "/logOut", icon: <RxExit /> })}
            onMouseLeave={handleMouseLeave}
            onClick={() => setShowLogoutPopup(true)}
          >
            <div className="ml-[-8px] mt-[-8px]">
              <div
                className={`group flex items-center text-ml gap-5 font-medium p-2 hover:bg-hoverblue rounded-md mt-1 font-nunito `}
                onClick={handleLogoutConfirmation}
              >
                <span className={exitIconClasses}>
                  <RxExit />
                </span>
                {!toggleCollapse && <h2 className={logoutTextClasses}>Log Out</h2>}
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
        />
      )}
    </div>
  );
};

export default SideBar;
