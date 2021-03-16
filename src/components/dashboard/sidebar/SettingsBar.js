/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import SideBarItem from './SideBarItem';

// const Settings = ({ toggleSideBar }) => {
//   const [drop, setDrop] = useState('hidden');
//   const toggleDrop = () => {
//     setDrop(drop === 'hidden' ? '' : 'hidden');
//   };
//   return (
//     <div>
//       <Link to="#">
//         <div
//           data-testid="crat"
//           className="flex justify-start mt-1 p-2 hover:bg-gray-800"
//           onClick={toggleDrop}
//         >
//           <i
//             className="text-gray-200 mt-1 mr-3 ml-7 fa fa-cog "
//             aria-hidden="true"
//           />
//           <div className="flex">
//             <p>sideBar.settings</p>
//             {drop === 'hidden' ? (
//               <i
//                 className="fa fa-caret-down text-gray-400 ml-1 text-xl"
//                 aria-hidden="true"
//               />
//             ) : (
//               <i
//                 className="fa fa-caret-up text-gray-400 ml-1 text-xl"
//                 aria-hidden="true"
//               />
//             )}
//           </div>
//         </div>
//       </Link>
//       <div className={`${drop} ml-4`} onClick={toggleSideBar}>
//         <SideBarItem
//           icon="fas fa-user"
//           text="sideBar.profile"
//           pageToRender="profile"
//         />
//       </div>
//     </div>
//   );
// };
// export default Settings;
