import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


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

 