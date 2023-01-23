import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Rutas de la app
import { CreateUs } from '../pages/CreateUs'
import { Home } from '../pages/Home'
import { Empleados } from '../pages/Empleados'
import { Crearempleado } from '../pages/TEmpleados'
import { Layout } from '../Layout'

//Rutas Externas
import { Login } from '../components/Login'
import { AuthGuard } from './AuthGuard'



export const Rutas = () => {

  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route element={<Layout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateUs />} />
          <Route path="/createEmp" element={<Crearempleado />} />
          <Route path="/usuarios" element={<Empleados />} />
        </Route>
      </Route>
      <Route index path="/" element={<Login />} />
    </Routes>
  )
}

