/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SkeletonElements } from './skeletonElements';
import './skeleton.scss';

export const SkeletonTable = () => (
  <div className="skeleton-table">
    <SkeletonElements type="text" />
  </div>
);
