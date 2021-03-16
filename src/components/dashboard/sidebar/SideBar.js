/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import SideBarItem from './SideBarItem';
import SettingsBar from './SettingsBar';
import { options, optionAdmin, optionOperator } from './sidebarItemOptions';

const SideBar = ({ toggleSideBar }) => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const user = JSON.parse(loggedInUser);

  return (
    <div className="sidebar-left h-screen bg-phantomDark min-w-max text-gray-400 text-center">
      <h2 className="text-3xl text-gray-300 px-5 py-2">Dashboard</h2>
      <div className="mt-10" onClick={toggleSideBar}>
        {options.map((option) => (
          <SideBarItem
            icon={option.icon}
            pageToRender={option.pageToRender}
            text={(option.text)}
            key={option.icon}
          />
        ))}

        {user.role === 'admin' ? (
          <div>
            {optionAdmin.map((option) => (
              <SideBarItem
                icon={option.icon}
                pageToRender={option.pageToRender}
                text={(option.text)}
                key={option.icon}
              />
            ))}
          </div>
        ) : user.role === 'operator' ? (
          <div>
            {optionOperator.map((option) => (
              <SideBarItem
                icon={option.icon}
                pageToRender={option.pageToRender}
                text={(option.text)}
                key={option.icon}
              />
            ))}
          </div>

        ) : (''
        )}

      </div>
      <div className="mt-12">
        <SettingsBar toggleSideBar={toggleSideBar} />
      </div>
    </div>
  );
};

export default SideBar;
