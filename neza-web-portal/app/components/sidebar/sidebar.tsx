'use client';
import React, { useState, useMemo } from "react";
import classNames from "classnames";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";


type MenuItem = {
  id: number;
  label: string;
  link: string;
};

const SideBar = () => {
  const menuItems: MenuItem[] = [
    { id: 1, label: "Dashboard", link: "/" },
    { id: 2, label: "Data Management", link: "/datamanagement" },
    { id: 3, label: "Profile", link: "/profile" },
    { id: 4, label: "LogOut", link: "/thepopup" },
    { id: 5, label: "Settings", link: "/settings" },
  ];

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const activeMenu = useMemo(() => menuItems.find((menu) => menu.link === '/'), []);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSideBarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const getNavItemClasses = (menu: MenuItem) => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap my-1 p-3 transition duration-300 hover:bg-green-400",
      {
        "bg-yellow": activeMenu && activeMenu.link === menu.link,
        "hidden": toggleCollapse,
      }
    );
  };

  const sidebarClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-yellow-200 500 flex justify-between flex-col border border-dashed w-80",
    {
      "w-80": !toggleCollapse,
      "w-20": toggleCollapse,
    }
  );

  const collapseIconClasses = classNames("p-4 rounded bg-blue absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  return (
    <>
      <div className={sidebarClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <img src="LOGO.png/" alt="Logo" width={100} height={30} className="no-hover-effect mt-10 mb-10" /> 
              <span
                className={classNames("mt-10 text-sm ml--0.1 font-small text-text", {
                  hidden: toggleCollapse,
                })}
              >
                TinyLife Wellness
              </span>
            </div>
            {isCollapsible && (
              <button className={collapseIconClasses} onClick={handleSideBarToggle}>
                {toggleCollapse ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
              </button>
            )}
          </div>
          <div className="flex flex-col items-start mt-4">
            {menuItems.map(({ label, link }) => {
              const classes = getNavItemClasses({ label, link });
              return (
                <Link key={label} href={link}>
                  <div className={classes}>
                    {label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
       
        {!toggleCollapse && (
          <div className="bg-yellow p-4">
           
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;