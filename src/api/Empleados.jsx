import axios from 'axios'



//import {ToastContainer ,toast } from 'react-toastify';

export async function LoginUser({ correo, passw }) {

    await axios.post(`${process.env.REACT_APP_URL}/login`, {
        correo,
        passw
    })
        .then(function (res) {
            localStorage.setItem('user', JSON.stringify(res.data));
            const user = localStorage.getItem('user');
            if (user != null) {
                window.location.href = "/home"
            }
        })
        .catch(function (error) {
            alert('Usuario y/o contrasena incorrecta')
        })
}


export async function CreatEmp({ Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
    Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
    Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
    Edad, Aservicio
}) {
    await axios.post(`${process.env.REACT_APP_URL}/createmp`, {
        Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
        Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
        Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
        Edad, Aservicio
    }).then(function (res) {
        if(res.status == 200){
            alert('Empleado creado correctamente')
            window.location.reload()
        }else{
            alert('Error al intentar crear el empleado')
            console.log(res)
        }
    })
}

export async function UpdateEmp({ id, Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
    Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
    Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
    Edad, Aservicio
}) {
    await axios.put(`${process.env.REACT_APP_URL}/updateEmp/${id}`, {
        Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
        Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
        Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
        Edad, Aservicio
    }).then(function (res) {
        if(res.status == 200){
            alert('Empleado Actualizado')
            window.location.reload()
        }else{
            alert('Ocurrio un error al intentar Actualizar al empleado')
        }
    })
}

export async function DeleteEmp({id, Activo}){
    await axios.put(`${process.env.REACT_APP_URL}/deleteEmp/${id}`, {
        Activo
    }).then(function (res) {
        if(res.status == 200){
            alert('Usuario Eliminado')
            window.location.reload()
        }else{
            alert('Ocurrio un error al intentar eliminar al empleado')
            console.log(res)
        }
    })
}

export async function ActivEmp({id, Activo}){
    await axios.put(`${process.env.REACT_APP_URL}/activEmp/${id}`, {
        Activo
    }).then(function (res) {
        console.log(res.status)
        if(res.status == 200){
            alert('Usuario Activado')
            window.location.reload()
        }else{
            alert('Ocurrio un error al intentar Activar al empleado')
            console.log(res)
        }
    })
}
