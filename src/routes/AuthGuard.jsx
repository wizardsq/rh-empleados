import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Layout  } from '../Layout';


export const AuthGuard = () => {
  const auth = localStorage.getItem('user')
  let isAuthenticated = null
  if(auth != null){
      isAuthenticated = true
  }else{
      isAuthenticated = false
  }
  return isAuthenticated ? <Outlet /> : <Navigate replace to="/" /> ;
}

 