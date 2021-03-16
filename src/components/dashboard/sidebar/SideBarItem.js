/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = ({ icon, text, pageToRender }) => {
  const clases = `text-gray-300 mt-1 mr-3 ml-7 ${icon}`;
  const changePageToRender = () => {
    localStorage.setItem('pageToRender', pageToRender);
  };
  return (
    <Link to="#">
      <div
        data-testid="item"
        className="flex justify-start mt-1 p-2 hover:bg-gray-800"
        onClick={() => changePageToRender()}
      >
        <i className={clases} aria-hidden="true" />
        <p className="">{text}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
