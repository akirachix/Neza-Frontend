'use client'
import React, { useState, useEffect } from "react";

import { RxDashboard, RxExit, RxPerson, RxPieChart } from "react-icons/rx";
import Link from "next/link";
import classNames from "classnames";
import LogoutModal from "@/app/modals/SignOutPopUp";
import Image from "next/image";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import { CgMenu } from "react-icons/cg";

type MenuItem = {
  id: number;
  link: string;
  icon: JSX.Element;
};

const SideBar = () => {
  const menuItems: MenuItem[] = [
    { id: 1,  link: "/dashboard", icon: <DashboardIcon /> },
    { id: 2,  link: "/datamanagement", icon: <CloudUploadIcon /> },
    { id: 3,  link: '/profile', icon: <DescriptionIcon /> },
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
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap my-1 p-3 transition duration-300",
      {
        "justify-center": toggleCollapse,
        "hover:text-green-500": !toggleCollapse && activeLink !== menu.link,
        "mr-2": toggleCollapse,
      
        "text-green-500": activeLink === menu.link || (menu.link === "/" && activeLink === "/"),
        "text-black": activeLink !== menu.link,
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

  const sidebarClasses = classNames("h-screen w-[100px] ml-[-1%] pt-8 pb-4 pl-5 mr-[5%] bg-yellow-400 flex flex-col justify-between transition-all duration-300", {
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


  // const collapseIconClasses = classNames("p-4 rounded bg-blue absolute right-0 transition-all duration-300 mb-4", {
  //   "rotate-180": toggleCollapse,
  //   "mr-3.5": toggleCollapse,
  //   "mb-1": toggleCollapse,
  // });

  const exitIconClasses = classNames("text-black text-2xl font-bold ", {
    "ml-[-15px]": toggleCollapse,
  });

  const logoutTextClasses = "text-black text-lg font-semibold ";

  
  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col pl-3">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4 flex-col">
            <Image
              src="/LOGO.png"
              alt="Logo"
              width={toggleCollapse ? 45 : 90}
              height={toggleCollapse ? 28 : 56}
              className='mt-10 ml-[-2%]'
            />
            {!toggleCollapse && <div className="w-4" />}
          </div>
          {/* <button className={collapseIconClasses} onClick={handleSideBarToggle}>
            <CgMenu className="text-black text-2xl mt-2 ml-1" />
          </button> */}
        </div>
        <div className="flex flex-col items-start mt-20 text-black font-nunito ">
          {menuItems.map(({ id, link, icon }) => (
            <Link key={id} href={link}>
              <div
                className={getNavItemClasses({ id, link, icon })}
                onMouseEnter={() => handleMouseEnter( icon.props)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleActiveLink(link)} 
              >
                <div className="mr-5">
                  {React.cloneElement(icon, {
                    className: classNames("w-22 h-[75px] font-semibold flex-shrink-0", {
                      "": activeLink === link,
                    }),
                  })}
                </div>
                {!toggleCollapse && (
                  <span className={classNames("text-lg font-bold", {
                    "": activeLink === link,
                  })}>
                    {}
                  </span>
                )}
              </div>
            </Link>
          ))}
          <div
            className={getNavItemClasses({ id: 4, link: "/logOut", icon: <LogoutIcon /> })}
            onClick={() => setShowLogoutPopup(true)}
          >
            <div className="ml-[-8px] mt-[-8px]">
              <div
                className={`group flex items-center text-ml gap-5 font-medium p-2 hover:bg-hoverblue rounded-md mt-1 font-nunito `}
                onClick={handleLogoutConfirmation}
              >
                <span className={classNames(exitIconClasses, { "text-yellow-500": activeLink === "/logOut" })}>
                  {React.cloneElement(<LogoutIcon />, {
                    className: classNames("w-22 h-23 font-bold flex-shrink-0", {
                      "text-yellow-500": activeLink === "/logOut",
                    }),
                  })}
                </span>
                {!toggleCollapse && (
                  <h2 className={classNames(logoutTextClasses, { "text-green-500": activeLink === "/logOut" })}></h2>
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

// import React, { useState } from "react";
// import { CgMenu } from "react-icons/cg";
// import Image from "next/image";
// import Link from "next/link";
// import classNames from "classnames";
// import LogoutModal from "@/app/modals/SignOutPopUp";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LogoutIcon from '@mui/icons-material/Logout';
// import DescriptionIcon from '@mui/icons-material/Description';

// type MenuItem = {
//   id: number;
//   link: string;
//   icon: JSX.Element;
//   label: string;
// };

// const SideBar = () => {
//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [activeLink, setActiveLink] = useState("");

//   const menuItems: MenuItem[] = [
//     {
//       id: 1,
//       link: "/dashboard",
//       icon: <DashboardIcon />,
//       label: "Dashboard",
//     },
//     {
//       id: 2,
//       link: "/upload",
//       icon: <CloudUploadIcon />,
//       label: "Upload",
//     },
//     {
//       id: 3,
//       link: "/logout",
//       icon: <LogoutIcon />,
//       label: "Logout",
//     },
//   ];

//   const handleActiveLink = (link: string) => {
//     setActiveLink(link);
//   };

//   const getNavItemClasses = (menu: MenuItem) => {
//     return classNames("flex items-center gap-2 p-2 rounded-md hover:bg-gray-200", {
//       "bg-gray-200": activeLink === menu.link,
//     });
//   };

//   const sidebarClasses = classNames("h-[800px] w-[80px] mt-[5%] ml-[4%] rounded-[10px]  pt-8 pb-4 bg-yellow-400 flex flex-col justify-between transition-all duration-300", {
//     "w-20": toggleCollapse,
//   });

//   const handleSideBarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };

//   const handleLogoutConfirmation = () => {
//     // Handle logout confirmation logic here
//   };

//   const handleMouseEnter = (menu: MenuItem) => {
//     if (!toggleCollapse && menu.link) {
//       setShowLabel(true);
//       setLabelText(menu.label);
//     }
//   };

//   const handleMouseLeave = () => {
//     setShowLabel(false);
//   };

//   const [showLabel, setShowLabel] = useState(false);
//   const [labelText, setLabelText] = useState("");

//   return (
//     <div className={sidebarClasses}>
//       <div className="flex flex-col pl-3">
//          <div className="flex items-center justify-between relative">
//            <div className="flex items-center pl-1 gap-4 flex-col">
//              <Image
//                src="/LOGO.png"
//                alt="Logo"
//                width={toggleCollapse ? 45 : 90}
//                height={toggleCollapse ? 28 : 56}
             
//              />
         
//           </div>
//         </div>
//         <div className="flex flex-col items-start p-4 gap-[60px]">
//           {menuItems.map((menu) => (
//             <Link key={menu.id} href={menu.link}>
//               <div
//                 className={getNavItemClasses(menu)}
//                 onClick={() => handleActiveLink(menu.link)}
//                 onMouseEnter={() => handleMouseEnter(menu)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className="flex items-center gap">
//                   {menu.icon}
//                   {!toggleCollapse && showLabel && labelText === menu.label && <span>{menu.label}</span>}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       {showLogoutPopup && (
//         <LogoutModal isOpen={showLogoutPopup} onClose={() => setShowLogoutPopup(false)} onLogout={handleLogoutConfirmation} activeLink={activeLink} />
//       )}
//     </div>
//   );
// };

// export default SideBar;
