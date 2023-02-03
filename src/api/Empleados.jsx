import axios from 'axios'



//import {ToastContainer ,toast } from 'react-toastify';



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
            console.log(res.status)
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
    Edad, Aservicio, FechaR, CausaR
}) {
    let stat;
    await axios.put(`${process.env.REACT_APP_URL}/updateEmp/${id}`, {
        Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
        Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
        Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
        Edad, Aservicio, FechaR, CausaR
    }).then(function (res) {
        if(res.status == '200'){
            stat = res.status
        }else{
            stat = res.status
        }
    }).catch(function (error) {
        console.log(error)
    })
    return stat
}

export async function DeleteEmp({id, Activo}){
    let stat;
    await axios.put(`${process.env.REACT_APP_URL}/deleteEmp/${id}`, {
        Activo
    }).then(function (res) {
        if(res.status == 200){
           stat = res.status
        }else{
          stat = res.status
        }
    })
    return stat
}

export async function ActivEmp({id, Activo}){
    let stat
    await axios.put(`${process.env.REACT_APP_URL}/activEmp/${id}`, {
        Activo
    }).then(function (res) {
        console.log(res.status)
        if(res.status == 200){
            stat= res.status
        }else{
            stat = res.status
        }
    })
    return stat
}
