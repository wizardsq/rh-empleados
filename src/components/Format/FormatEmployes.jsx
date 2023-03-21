
import React, { useState, useEffect } from 'react'
import { FormatDocument } from './FormatDocument'
import { FormatAcademic } from './FormatAcademic'
import {
 Image,
 Card,
 HStack,
 Box,
 Text,
 FormLabel,
 Input,
 Button,
} from '@chakra-ui/react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'


export const FormatEmployes = ({ data }) => {

    const logo = `${process.env.PUBLIC_URL}/img/logoum.png`
    const [document, setDocument] = useState({})
    const [Nomina, setNomina] = useState(data.Nomina ?? '')
    const [Nombre, setNombre] = useState(data.Nombre ?? '')
    const [Nombres, setNombres] = useState(data.Nombres ?? '')
    const [Primerapellido, setPrimerapellido] = useState(data.Primer_apellido ?? '')
    const [Segundoapellido, setSegundoapellido] = useState(data.Segundo_apellido ?? '')
    const [Correo, setCorreo] = useState(data.Correo ?? '')
    const [Curp, setCurp] = useState(data.Curp ?? '')
    const [Nacionalidad, setNacionalidad] = useState(data.Nacionalidad ?? '')
    const [EstadoCivil, setEstadoCivil] = useState(data.Estado_Civil ?? '')
    const [Direccion, setDireccion] = useState(data.Direccion ?? '')
    const [Telefono, setTelefono] = useState(data.Telefono ?? '')
    const [TipoContrato, setTipoContrato] = useState(data.Tipo_contrato ?? '')
    const [Fecha, setFecha] = useState(data.Fecha_Nacimiento ?? '')
    const [SeguroS, setSeguroS] = useState(data.Num_seguro_s ?? '')
    const [currentStep, setCurrentStep] = useState(1)

    useEffect(() => {
        setNomina(data.Nomina ?? '');
        setNombre(data.Nombre ?? '');
        setNombres(data.Nombres ?? '');
        setPrimerapellido(data.Primer_apellido ?? '')
        setSegundoapellido(data.Segundo_apellido ?? '')
        setCorreo(data.Correo ?? '')
        setFecha(data.Fecha_Nacimiento ?? '')
        setSeguroS(data.Num_seguro_s ?? '')
        setCurp(data.Curp ?? '')
        setNacionalidad(data.Nacionalidad ?? '')
        setEstadoCivil(data.Estado_Civil ?? '')
        setDireccion(data.Direccion ?? '')
        setTelefono(data.Telefono ?? '')
        setTipoContrato(data.Tipo_contrato ?? '')
        setDocument(data.document)
    }, [data]);

    const nombreCompleto = `${Nombre} ${Nombres} ${Primerapellido} ${Segundoapellido}`

    const previousStep = () => {
        setCurrentStep(currentStep - 1)
    }
    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }
    

    return (

        <HStack>
            <Card width='100vh'>
                {currentStep == 1 && (
                    <>
                        <HStack >
                            <Image className='image' src={logo} />
                            <Box className='text'>
                                <Text> <strong>UNIVERSIDAD DE MONTEMORELOS</strong> </Text>
                                <Text>DIRECCIÓN DE RECURSOS HUMANOS</Text>
                                <Text>FICHA TÉCNICA DE PERSONAL </Text>
                            </Box>
                        </HStack>

                        <HStack>
                            <Box py={5} px={50}>
                                <FormLabel><Text>Nombre Completo del Empleado:</Text></FormLabel>
                            </Box>

                            <Box style={{ borderColor: 'black' }}>
                                <Input marginLeft={'-30%'} width='158%' value={nombreCompleto} readOnly />
                            </Box>

                            <Box >
                                <HStack >
                                    <Box  marginRight={'23%'}>
                                        <FormLabel > <Text marginRight={'-150%'} marginLeft={'100%'} >Estado civil:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input width='80%' value={EstadoCivil} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                        </HStack>

                        <HStack>
                            <Box py={8} px={10}>
                                <HStack>
                                    <Box>
                                        <FormLabel> <Text>Dirección:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input width='240%' value={Direccion} readOnly />
                                    </Box>
                                </HStack>
                            </Box>

                            <Box  >
                                <HStack marginLeft='88%'>
                                    <Box >
                                        <FormLabel> <Text>Nómina:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input marginLeft={'0%'} width='407%' value={Nomina} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                            
                        </HStack>

                        <HStack>
                            <Box px={10}>
                                <HStack>
                                    <Box >
                                        <FormLabel> <Text>Fecha de Nacimiento:</Text> </FormLabel>
                                    </Box>
                                    <Box  style={{ borderColor: 'black' }}>
                                        <Input marginLeft={-12} width='90%' value={Fecha} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                           
                            <Box  >
                                <HStack>
                                    <Box marginLeft='-8%'>
                                        <FormLabel> <Text>Nacionalidad:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input marginLeft={'-8%'} width='70%' value={Nacionalidad} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                            <Box >
                                <HStack>

                                    <Box marginLeft='-0.5%' >
                                        <FormLabel> <Text>Tipo de contratación:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input marginLeft={'-25%'} width='100%' value={TipoContrato} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                            
                        </HStack>

                        <HStack>
                            <Box py={10}  px={10}>
                                <HStack>
                                    <Box >
                                        <FormLabel> <Text>CURP:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input width='120%' value={Curp} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                            <Box py={10} px={10} >
                                <HStack>

                                    <Box >
                                        <FormLabel> <Text>NSS:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input width='120%' value={SeguroS} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                        </HStack>

                        <HStack style={{marginBottom: '4%'}}>
                            <Box py={1} px={10}>
                                <HStack>
                                    <Box >
                                        <FormLabel> <Text>Correo electrónico:</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input width='100%' value={Correo} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                            <Box  >
                                <HStack >
                                    <Box>
                                        <FormLabel> <Text>Teléfono(Casa/Celular):</Text> </FormLabel>
                                    </Box>
                                    <Box style={{ borderColor: 'black' }}>
                                        <Input width='60%' value={Telefono} readOnly />
                                    </Box>
                                </HStack>
                            </Box>
                        </HStack>
                    </>
                )}

                {currentStep == 2 && (
                    <>
                        <FormatAcademic data={data}/>
                    </>
                )}
                {currentStep == 3 && (
                    <>
                        <FormatDocument document={document} data={data} currentStep={currentStep} previousStep={() => setCurrentStep(currentStep - 1)}/>
                    </>
                )}

                {currentStep !== 1 && currentStep !== 3 &&(
                    <Button type="button" style={{ marginTop: '3%', width: '20%', marginLeft: '2%', marginBottom: '-4.1%'  }} onClick={previousStep}>
                        <FaArrowLeft style={{ marginTop: '1%' }} />&nbsp; Pagina anterior
                    </Button>
                )}
                {currentStep !== 3 && (
                    <Button type="button" style={{ width: '20%', marginLeft: '76%', marginBottom: '4%', }} onClick={nextStep}>
                        Siguiente pagina &nbsp;<FaArrowRight style={{ marginTop: '3%' }} />
                    </Button>
                )}
                
            </Card>
        </HStack>
    )
}
