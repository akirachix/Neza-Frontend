'use client';
import React from "react";
import useUserLogOut from "@/app/hooks/useUserLogout";
type LogoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
};
const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onLogout }) => {
  const { handleUserLogOut } = useUserLogOut();
  const handleLogoutConfirmation = () => {
    handleUserLogOut();
    onClose();
  };
  return (
    <div
      className={`bg-opacity-50 bg-gray-500 fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 pt-20 pb-20 pl-10 rounded-lg w-66 h-250 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-50">
        <h2 className="text-2xl font-nunito mb-4 text-white">Are you sure you <br /> want to logout?</h2>
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-3 py-3 rounded-md w-28 border-2 border-green-500 font-nunito"
            onClick={onClose}
          >
            Cancel
          </button>
          <div
            className="bg-green-500 bg-opacity-20 text-white px-3 py-3 rounded-md w-28 border-2 border-green-500 font-nunito relative"
            onClick={handleLogoutConfirmation}
          >
            <span
              className="opacity-0 absolute left-1/2 transform -translate-x-1/2 -bottom-6 text-lg font-semibold text-yellow-500"
              // Show the label on hover
              onMouseEnter={() => {
                const label = document.querySelector(".logout-label");
                if (label) label.classList.add("opacity-100");
              }}
              // Hide the label when not hovering
              onMouseLeave={() => {
                const label = document.querySelector(".logout-label");
                if (label) label.classList.remove("opacity-100");
              }}
            >
              Log Out
            </span>
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoutModal;