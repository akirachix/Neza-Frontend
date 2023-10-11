'use client';
import React, { useState, useEffect } from "react";
import { CgMenu } from "react-icons/cg";
import { RxDashboard, RxPerson, RxExit, RxAccessibility } from "react-icons/rx";
import Link from "next/link";
import classNames from "classnames";
import LogoutModal from "@/app/modals/SignOutPopUp";
import useUserLogOut from "@/app/hooks/useUserLogout";
type MenuItem = {
  id: number;
  label: string;
  link: string;
  icon: JSX.Element;
};
const SideBar = () => {
  const { handleUserLogOut } = useUserLogOut();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/"); 
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const menuItems: MenuItem[] = [
    { id: 1, label: "Dashboard", link: "/", icon: <RxDashboard /> },
    { id: 2, label: "Profile", link: "/profile", icon: <RxPerson /> },
    { id: 3, label: "Data Management", link: "/datamanagement", icon: <RxAccessibility /> },
  ];
  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);
  const handleMenuItemClick = (link: string, itemId: number) => {
    setActiveLink(link);
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };
  const exitIconClasses = classNames("text-white text-xl");
  const logoutTextClasses = "text-white text-lg font-semibold";
  const handleLogoutConfirmation = () => {
    setShowLogoutModal(true);
  };
  return (
    <div className="h-screen w-20 bg-green-800 px-4 pt-8 pb-4 flex flex-col justify-between transition-all duration-300">
      <div className="flex flex-col pl-3">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4 flex-col">
            <img
              src="/LOGO.png"
              alt="Logo"
              width={45}
              height={28}
              className="mt-10 ml-1"
            />
          </div>
        </div>
        <div className="flex flex-col items-start mt-10 text-white font-nunito">
          {menuItems.map(({ id, label, link, icon }) => (
            <Link key={id} href={link}>
              <div
                className={classNames(
                  "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap my-1 p-3 mt-9 transition duration-300",
                  {
                    "text-yellow-500": activeLink === link,
                    "text-white": activeLink !== link,
                  }
                )}
                onClick={() => handleMenuItemClick(link, id)}
              >
                <div className="mr-5">
                  {React.cloneElement(icon, {
                    className: classNames("w-22 h-23 font-bold flex-shrink-0", {
                      "text-yellow-500": activeLink === link,
                      "text-white": activeLink !== link,
                    }),
                  })}
                </div>
                <span
                  className={classNames("text-lg font-semibold", {
                    'mr-2': expandedItem !== id, 
                  })}
                  style={{ opacity: activeLink === link || expandedItem === id ? 1 : 0 }}
                >
                  {label}
                </span>
              </div>
            </Link>
          ))}
          <div className="ml-[-8px] mt-[-8px]">
            <div
              className="group flex items-center text-ml gap-5 font-medium p-2 hover:bg-hoverblue rounded-md mt-1 font-nunito"
              onClick={handleLogoutConfirmation}
            >
              <span className={exitIconClasses}>
                {React.cloneElement(<RxExit />, {
                  className: "w-22 h-23 text-white font-bold flex-shrink-0 ml-[10px]",
                })}
              </span>
              <span
                className={classNames(logoutTextClasses, {
                  'opacity-0': activeLink !== '/logOut',
                })}
              >
                Log Out
              </span>
            </div>
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <LogoutModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onLogout={handleUserLogOut}
        />
      )}
    </div>
  );
};
export default SideBar;