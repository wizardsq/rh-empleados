import React, { useState, useEffect } from 'react'
import {
    Box,
    Text,
    Heading,
    Button,
    Flex,
    Checkbox,
    Td,
    Tr,
    useColorModeValue,
    Table
} from '@chakra-ui/react'
import { GetDocuments, InsertDocument, UpdateDocument } from '../../services/DocumentService/Documents'
import '../../assets/css/image.css'
import { FaArrowLeft } from 'react-icons/fa'
import { FormatPdf } from './FormatPdf'
export const FormatDocument = ({ data, currentStep, previousStep }) => {
    const textColor = useColorModeValue('black', 'white')
    const [doc, setDoc] = useState({})
    const [documentData, setDocument] = useState(doc[0] || {})
    useEffect(() => {
        GetDocuments({ id: data.id }).then((res) => {
            setDoc({
                ...res,
                existeRegistro: res && Object.keys(res).length > 0 
            });
            setDocument(res);
        })
    }, [data.id])
    useEffect(() => {
        setDocument(doc[0] || {});
    }, [doc]);

    const documentos = ["Solicitud de empleo", "Copia de acta de nacimiento", "Currículum Vitae",
        "Copia del acta de matrimonio o documento que acredite su Civ.", "Copia del acta de nacimiento del cónyuge y de los hijos",
        "Copia de los certificados de (Prim,Sec,Prep/Técnica)",
        "Copia del título de Licenciatura", "Copia de la cédula profesional de Lic", "Copia del título de Maestría/Epecialidad",
        "Copia de la cédula profesional de Maestría/Especialidad",
        "Copia del título de Doctorado", "Copia de la cédula profesional del Doc", "Copia del CURP", "Copia de la credencial de elector",
        "Copia de calidad migratoria (si es extranjero)/Pasaporte",
        "Copia de la preafiliación al IMSS o documento del Seguro Social", "Certificado médico reciente", "Comprobante de Domicilio", "RFC"]

    const handleCheckboxChange = (key, value) => {
        setDocument((prevDocument) => ({
            ...prevDocument,
            [key]: value,
        }));
    }

    //console.log(documentData)
    const handleUpdate = () => {
        const id = documentData.id
        const ID_emp = data.id
        console.log(documentData)
        UpdateDocument({
            id,
            ...documentData,
        })
    }

    const handleSubmit = () => {
        const ID_emp = data.id
        InsertDocument({
            ...documentData,
            ID_emp
        })
    }
    return (
        <>
            <Heading py={7} px={5} as='h2' size='md'> Documentos de los empleados </Heading>
            <Box px={8}>
                <Table>
                    <Tr>
                        <Td minWidth={{ sm: "250px" }} pl="0px">
                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">

                                <Text
                                    fontSize="md"
                                    color={textColor}
                                    fontWeight="bold"
                                    minWidth="100%"
                                >
                                    Documentos
                                </Text>
                            </Flex>

                            {documentos.map((nombre, index) => (
                                <Flex key={index} direction="column">
                                    <Text marginTop={5}>
                                        {nombre}
                                    </Text>
                                </Flex>
                            ))
                            }
                        </Td>

                        <Td minWidth={{ sm: "250px" }} pl="0px">
                            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap" >
                                <Text
                                    fontSize="md"
                                    color={textColor}
                                    fontWeight="bold"
                                    minWidth="100%"
                                >
                                    Entregados al Departamento de Recursos Humanos
                                </Text>
                            </Flex>

                            <Flex direction='column' marginTop='5%' >
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.SolicitudEmp} onChange={(e) => { handleCheckboxChange("SolicitudEmp", e.target.checked) }} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaActaNacimiento} onChange={(e) => { handleCheckboxChange("CopiaActaNacimiento", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CurriculumVit} onChange={(e) => { handleCheckboxChange("CurriculumVit", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaActaMatrimonio} onChange={(e) => { handleCheckboxChange("CopiaActaMatrimonio", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>
                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaActaNaciConyuge_Hijos} onChange={(e) => { handleCheckboxChange("CopiaActaNaciConyuge_Hijos", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCertificadosPrim_Sec_Prep} onChange={(e) => { handleCheckboxChange("CopiaCertificadosPrim_Sec_Prep", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaTituloLic} onChange={(e) => { handleCheckboxChange("CopiaTituloLic", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCedulaLic} onChange={(e) => { handleCheckboxChange("CopiaCedulaLic", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaTiutuloMae} onChange={(e) => { handleCheckboxChange("CopiaTiutuloMae", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCedulaMae} onChange={(e) => { handleCheckboxChange("CopiaCedulaMae", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaTituloDoc} onChange={(e) => { handleCheckboxChange("CopiaTituloDoc", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCedulaDoc} onChange={(e) => { handleCheckboxChange("CopiaCedulaDoc", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCurp} onChange={(e) => { handleCheckboxChange("CopiaCurp", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCredenElec} onChange={(e) => { handleCheckboxChange("CopiaCredenElec", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaCalidadMig_Pasaporte} onChange={(e) => { handleCheckboxChange("CopiaCalidadMig_Pasaporte", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.CopiaPreafiliacion_IMSS_SS} onChange={(e) => { handleCheckboxChange("CopiaPreafiliacion_IMSS_SS", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.Certificado_Medico} onChange={(e) => { handleCheckboxChange("Certificado_Medico", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.Comprobante_Domicilio} onChange={(e) => { handleCheckboxChange("Comprobante_Domicilio", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                            <Flex direction='column'>
                                <Checkbox style={{ borderColor: 'black' }} size='lg' isChecked={documentData?.RFC} onChange={(e) => { handleCheckboxChange("RFC", e.target.checked) }} marginTop={5} colorScheme='green' />
                            </Flex>

                        </Td>
                    </Tr>
                </Table>

                {currentStep == 3 && currentStep !== 1 && (
                    <Button type="button" style={{ marginTop: '3%', width: '20%', marginLeft: '2%' }} onClick={previousStep}>
                        <FaArrowLeft style={{ marginTop: '1%' }} />&nbsp; Pagina anterior
                    </Button>
                )}

                <FormatPdf data={data} document={documentData} />

            </Box>
            {
                doc.existeRegistro ? (
                    <Button mr={2} ml={2} mb={2} onClick={handleUpdate} colorScheme='blue'>Actualizar información </Button>
                ) : (
                    <Button mb={3} mr={2} ml={2} onClick={handleSubmit} colorScheme='green'>Agregar Información</Button>
                )
            }
        </>

    )
}
