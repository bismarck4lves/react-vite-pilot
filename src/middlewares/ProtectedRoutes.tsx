import React from 'react';
import {  Outlet } from 'react-router-dom';



const ProtectedMiddleware = () => {
  return <Outlet />; //implement
};

export default ProtectedMiddleware;
