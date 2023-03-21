import React from 'react'
import jsPDF from 'jspdf';
import { Button } from '@chakra-ui/react';
export const FormatPdf = ({data, document}) => {
    const logo = `${process.env.PUBLIC_URL}/img/logoum.png`
    const handleDownload = () => {
        const doc = new jsPDF();
        doc.setFontSize(10);
        doc.setFont(undefined, 'bold')
        doc.text(108, 20, 'UNIVERSIDAD DE MONTEMORELOS', 'center');
        doc.setFont(undefined, 'normal')
        doc.text(108, 30, 'DIRECCIÓN DE RECURSOS HUMANOS', 'center');
        doc.setFont(undefined, 'bold')// MarginLeft, MARGINtOP
        doc.text(108, 40, 'FICHA TÉCNICA DE PERSONAL', 'center');
        doc.addImage(logo, 'png', 10, 13, 30, 30); // marginleft, margintop, WIDTH, HEIGT

        const nombreCompleto = `${data.Nombre} ${data.Nombres} ${data.Primer_apellido} ${data.Segundo_apellido}`
        doc.setFont(undefined, 'bold')
        doc.text(10, 55, `Nombre Completo:`)
        doc.setFont(undefined, 'normal')
        doc.text(43.5, 55, `${nombreCompleto}`)

        // Grupo 1
        doc.setFont(undefined, 'bold')
        doc.text(10, 65, `Dirección: `)
        doc.setFont(undefined, 'normal')
        doc.text(28, 65, `${data.Direccion}`)

        // Grupo 2
        doc.setFont(undefined, 'bold')
        doc.text(10, 75, `Tipo de contratación:`)
        doc.setFont(undefined, 'normal')
        doc.text(46.5, 75, `${data.Tipo_contrato}`)

        doc.setFont(undefined, 'bold')
        doc.text(86, 75, `Fecha de Nacimiento:`)
        doc.setFont(undefined, 'normal')
        doc.text(123, 75, `${data.Fecha_Nacimiento}`)

        doc.setFont(undefined, 'bold')
        doc.text(153, 75, `Nomina:`)
        doc.setFont(undefined, 'normal')
        doc.text(168, 75, `${data.Nomina}`)

        // Grupo 3
        doc.setFont(undefined, 'bold')
        doc.text(10.5, 85, `Nacionalidad:`)
        doc.setFont(undefined, 'normal')
        doc.text(35, 85, `${data.Nacionalidad}`)

        doc.setFont(undefined, 'bold')
        doc.text(85.5, 85, `CURP:`)
        doc.setFont(undefined, 'normal')
        doc.text(97.5, 85, `${data.Curp}`)

        doc.setFont(undefined, 'bold')
        doc.text(144, 85, `Estado Civil:`)
        doc.setFont(undefined, 'normal')
        doc.text(167, 85, `${data.Estado_Civil}`)

        // Grupo 4
        doc.setFont(undefined, 'bold')
        doc.text(10, 95, `Correo Electronico:`)
        doc.setFont(undefined, 'normal')
        doc.text(44, 95, `${data.Correo}`)

        doc.setFont(undefined, 'bold')
        doc.text(93, 95, `NSS:`)
        doc.setFont(undefined, 'normal')
        doc.text(102, 95, `${data.Num_seguro_s}`)

        doc.setFont(undefined, 'bold')
        doc.text(144, 95, `Telefono:`)
        doc.setFont(undefined, 'normal')
        doc.text(161, 95, `${data.Telefono}`)

        ////////////////////////////////////////

        doc.setFont(undefined, 'bold')
        doc.text(10.5, 106, `Nivel:`)
        doc.text(86, 106, `Título:`)
        doc.text(144, 106, `Institución:`)
        doc.setFont(undefined, 'normal')
        doc.text(10, 115, `${data.Nivel1}`)
        doc.text(10, 129, `${data.Nivel2}`)
        doc.text(10, 149, `${data.Nivel3}`)
        doc.text(86, 115, `${data.Nombre_Titulo1}`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 40 })
        doc.text(86, 129, `${data.Nombre_Titulo2}`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 40 })
        doc.text(86, 149, `${data.Nombre_Titulo3}`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 40 })
        doc.text(144, 115, `${data.Institucion_niv1}`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 40 })
        doc.text(144, 128, `${data.Institucion_niv2}`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(144, 149, `${data.Institucion_niv3}`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        ////////////////////////////////////////////////////////////////////////////////////////////
        doc.setFont(undefined, 'bold')
        doc.setFontSize(14)
        doc.text(10, 167, `Documentos:`, { fontSize: 20 })
        doc.setFontSize(10)
        doc.setFont(undefined, 'normal')
        doc.text(10, 180, `Solicitud de empleo:`)
        doc.text(10, 190, `Currículum Vitae:`)
        doc.text(10, 200, `Copia de acta de nacimiento del empleado:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(10, 217, `Copia del acta de matrimonio o documento que acredite su estado civil:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(10, 238, `Copia del acta de nacimiento del cónyuge y de los hijos:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(10, 252, `Copia de los certificados de primaria, secundaria, preparatoria o técnica:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(10, 266.5, `Copia del título  de Licenciatura:`)
        doc.text(10, 277, `Copia de la cédula profesional de Licenciatura:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(10, 291, `Copia del título de Maestría/Epecialidad:`)
        ///////////////////////////////////////////////////////////////
        doc.text(120, 180, `Copia de la cédula profesional de Maestría/Especialidad:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(120, 195, `Copia del título de Doctorado:`)
        doc.text(120, 205, `Copia de la cédula profesional del Doctorado:`)
        doc.text(120, 215, `Copia del CURP:`)
        doc.text(120, 224, `Copia de la credencial de elector:`)
        doc.text(120, 234, `Copia de calidad migratoria (si es extranjero)/Pasaporte:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(120, 250, `Copia de la preafiliación al IMSS o del documento del Seguro Social:`, { align: 'left', lineHeightFactor: 1.35, maxWidth: 60 })
        doc.text(120, 265, `Certificado médico reciente:`)
        doc.text(120, 275, `Comprobante de Domicilio:`)
        doc.text(120, 285, `RFC:`)
        ///////////////////////////////////////////////////////////////
        doc.setFont(undefined, 'bold')
        doc.text(76, 179, `${document.SolicitudEmp ? 'Si' : 'No'}`)
        doc.text(76, 190, `${document.CurriculumVit ? 'Si' : 'No'}`)
        doc.text(76, 205, `${document.CopiaActaNacimiento ? 'Si' : 'No'}`)
        doc.text(76, 226.5, `${document.CopiaActaMatrimonio ? 'Si' : 'No'}`)
        doc.text(76, 243, `${document.CopiaActaNaciConyuge_Hijos ? 'Si' : 'No'}`)
        doc.text(76, 257, `${document.CopiaCertificadosPrim_Sec_Prep ? 'Si' : 'No'}`)
        doc.text(76, 266.5, `${document.CopiaTituloLic ? 'Si' : 'No'}`)
        doc.text(76, 281.8, `${document.CopiaCedulaLic ? 'Si' : 'No'}`)
        doc.text(76, 291, `${document.CopiaTiutuloMae ? 'Si' : 'No'}`)
        ////////////////////////////////////////////////////////////////
        doc.text(193.5, 185, `${document.CopiaCedulaMae ? 'Si' : 'No'}`)
        doc.text(193.5, 194.8, `${document.CopiaTituloDoc ? 'Si' : 'No'}`)
        doc.text(193.5, 205, `${document.CopiaCedulaDoc ? 'Si' : 'No'}`)
        doc.text(193.5, 215, `${document.CopiaCurp ? 'Si' : 'No'}`)
        doc.text(193.5, 224, `${document.CopiaCredenElec ? 'Si' : 'No'}`)
        doc.text(193.5, 238.8, `${document.CopiaCalidadMig_Pasaporte ? 'Si' : 'No'}`)
        doc.text(193.5, 254.8, `${document.CopiaPreafiliacion_IMSS_SS ? 'Si' : 'No'}`)
        doc.text(193.5, 265.1, `${document.Certificado_Medico ? 'Si' : 'No'}`)
        doc.text(193.5, 275, `${document.Comprobante_Domicilio ? 'Si' : 'No'}`)
        doc.text(193.5, 285, `${document.RFC ? 'Si' : 'No'}`)
        doc.save('ficha-tecnica-personal.pdf')
    };
        
        return (
            <>
             <Button type="button" style={{ width: '20%', marginLeft: '76%', marginBottom: '2%', marginTop: '-4.5%' }} onClick={handleDownload}>
                    Exportar a pdf
                </Button>
            </>
        )
}
