/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import './skeleton.scss';

export const SkeletonElements = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes} />;
};
