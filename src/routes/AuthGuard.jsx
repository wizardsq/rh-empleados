import React from 'react';
import { Navigate } from 'react-router-dom';
import { Layout } from '../Layout';


export const AuthGuard = () => {
  const auth = localStorage.getItem('user')
  let isAuthenticated = null
  if(auth != null){
      isAuthenticated = true
  }else{
      isAuthenticated = false
  }
  return isAuthenticated ? <Layout /> : <Navigate replace to="/" /> ;
}

 