// 'use client';
// import React from "react";
// import './style.css'

// export default function LogoutPopup({ onClose }) {
//   const handleConfirmLogout = () => {
//     onClose();
//   };
//   const handleCancelLogout = () => {
//     onClose();
//   };
//   return (
// <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="w-full h-full flex items-center justify-center">
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 rounded-lg w-96 h-96 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-10">
//           <p className="text-4xl font-bold mb-4 text-white ">
//             Are you sure you want to logout?
//           </p>
//           <div className="flex flex-col space-y-4">
//             <button
//               onClick={handleConfirmLogout}
//               className="bg-green-500 text-white px-6 py-3 rounded-md w-48"
//             >
//               Yes
//             </button>
//             <button
//               onClick={handleCancelLogout}
//               className="bg-green-300 text-gray-700 px-6 py-3 rounded-md w-48 border-2 border-green-500"
//             >
//               No
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="fixed inset-0 bg-black opacity-50"></div>
//     </div>
//   );
// }