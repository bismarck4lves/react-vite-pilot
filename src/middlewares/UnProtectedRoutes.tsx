import React from 'react';
import {  Outlet } from 'react-router-dom';



const UnProtectedMiddleware = () => {
  return <Outlet />; //implement
};

export default UnProtectedMiddleware;
