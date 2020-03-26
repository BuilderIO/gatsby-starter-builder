/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import RootLayout from '../../src/layouts/RootLayout';
import PageLayout from '../../src/layouts/PageLayout';

export const wrapRootElement = ({ element, props }) => {
  return <RootLayout {...props}>{element}</RootLayout>;
};

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>;
};
