import axios from "axios";

export async function InsertDocument({ SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
    CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
    CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC, ID_emp }) {
    await axios.post(`${process.env.REACT_APP_URL}/createdoc`, {
        SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
        CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
        CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC, ID_emp
    }).then(function (res) {
        if (res.status == 200) {
            console.log(res.status)
            //alert('Empleado creado correctamente')
            //window.location.reload()
        } else {
            alert('Error al intentar crear el empleado')
            console.log(res)
        }
    })
}

export async function UpdateDocument({ id, SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
    CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
    CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC, ID_emp }) {
        
    await axios.put(`${process.env.REACT_APP_URL}/updatedoc/${id}`, {
        SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
        CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
        CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC, ID_emp
    }).then(function (res) {
        if (res.status == 200) {
            console.log(res.status)
            alert('Documentos Actualizados')
            window.location.reload()
        } else {
            alert('Error al intentar Actualizar los documentos')
            console.log(res)
        }
    })
}