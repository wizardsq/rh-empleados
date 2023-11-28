import axios from "axios";

export async function GetDocuments({ id }) {
    try {
      //console.log('llamada', id);
      const res = await axios.get(`http://localhost:3000/api/documentos/${id}`);
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.error('Error al obtener documentos:', error);
      return null; // Devolver null o manejar el error como prefieras
    }
  }

export async function InsertDocument({ SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
    CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
    CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC, ID_emp }) {
    await axios.post(`http://localhost:3000/api/creatdoc`, {
        SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
        CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
        CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC, ID_emp
    }).then(function (res) {
        if (res.status == 200) {
            console.log(res.status)
            alert('Empleado creado correctamente')
            window.location.reload()
        } else {
            alert('Error al intentar crear el empleado')
            console.log(res)
        }
    })
}

export async function UpdateDocument({ id, SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
    CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
    CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC }) {
        
    await axios.put(`http://localhost:3000/api/updateDoc/${id}`, {
        SolicitudEmp, CopiaActaNacimiento, CurriculumVit, CopiaActaMatrimonio, CopiaActaNaciConyuge_Hijos, CopiaCertificadosPrim_Sec_Prep,
        CopiaTituloLic, CopiaCedulaLic, CopiaTiutuloMae, CopiaCedulaMae, CopiaTituloDoc, CopiaCedulaDoc, CopiaCurp, CopiaCredenElec, CopiaCalidadMig_Pasaporte,
        CopiaPreafiliacion_IMSS_SS, Certificado_Medico, Comprobante_Domicilio, RFC
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