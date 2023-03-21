import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Rutas de la app
import { CreateUs } from '../pages/CreatUser'
import { Home } from '../pages/Home'
import { Empleados } from '../pages/Employes'
import { Crearempleado } from '../pages/TEmployes'
import { Layout } from '../Layout'
import { TEmpleadosIna } from '../pages/TEmployesIna'
import { Formato } from '../pages/Format'

//Rutas Externas
import { Login } from '../components/Login/Login'
import { AuthGuard } from './AuthGuard'



export const Rutas = () => {

  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route element={<Layout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateUs />} />
          <Route path="/formato" element={<Formato />} />
          <Route path="/createEmp" element={<Crearempleado />} />
          <Route path="/empleadosin" element={<TEmpleadosIna />} />
          <Route path="/usuarios" element={<Empleados />} />
        </Route>
      </Route>
      <Route index path="/" element={<Login />} />
    </Routes>
  )
}

