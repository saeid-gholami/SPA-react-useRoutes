import React from 'react'
import { isLogin } from '../utiles'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
  let isUserLogin = isLogin("saeid");
  return (
    <div>
      {isUserLogin ? (
        <Outlet />
      ) : (
        <Navigate to='/login' />
      )}
    </div>
  )
}
