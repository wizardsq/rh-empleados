import { useState, useEffect } from 'react'
import { CreatEmp, UpdateEmp, DeleteEmp, ActivEmp} from '../api/Empleados'

import {
  Input,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Stack,
}
  from '@chakra-ui/react'
export const FormEmp = ({ data }) => {
  //* estados de todas las variables del formulario
  const [getrol, setGetRol] = useState(false)
  const [Nomina, setNomina] = useState(data.Nomina ?? '')
  const [Nombre, setNombre] = useState(data.Nombre ?? '')
  const [Nombres, setNombres] = useState(data.Nombres ?? '')
  const [Primerapellido, setPrimerapellido] = useState(data.Primer_apellido ?? '')
  const [Segundoapellido, setSegundoapellido] = useState(data.Segundo_apellido ?? '')
  const [Correo, setCorreo] = useState(data.Correo ?? '')
  const [Genero, setGenero] = useState(data.Genero ?? '')
  const [Contrato, setContrato] = useState(data.T_cont_administrativo ?? '')
  const [Grado, setGrado] = useState(data.Grado_academico ?? '')
  const [Rectoria, setRectoria] = useState(data.Rec_dependiente ?? '')
  const [Facultad, setFacultad] = useState(data.Fac_dept ?? '')
  const [Centro, setCentro] = useState(data.Centro_trabajo ?? '')
  const [Puesto, setPuesto] = useState(data.Puesto ?? '')
  const [Jefe, setJefe] = useState(data.Jefe_inmediato ?? '')
  const [Fecha, setFecha] = useState(data.Fecha_Nacimiento ?? '')
  const [SeguroS, setSeguroS] = useState(data.Num_seguro_s ?? '')
  const [Curp, setCurp] = useState(data.Curp ?? '')
  const [Nacionalidad, setNacionalidad] = useState(data.Nacionalidad ?? '')
  const [EstadoCivil, setEstadoCivil] = useState(data.Estado_Civil ?? '')
  const [Direccion, setDireccion] = useState(data.Direccion ?? '')
  const [Telefono, setTelefono] = useState(data.Telefono ?? '')
  const [Nivel1, setNivel1] = useState(data.Nivel1 ?? '')
  const [Institucion1, setInstitucion1] = useState(data.Institucion_niv1 ?? '')
  const [Titulo1, setTitulo1] = useState(data.Nombre_Titulo1 ?? '')
  const [Nivel2, setNivel2] = useState(data.Nivel2 ?? '')
  const [Institucion2, setInstitucion2] = useState(data.Institucion_niv2 ?? '')
  const [Titulo2, setTitulo2] = useState(data.Nombre_Titulo2 ?? '')
  const [Nivel3, setNivel3] = useState(data.Nivel3 ?? '')
  const [Institucion3, setInstitucion3] = useState(data.Institucion_niv3 ?? '')
  const [Titulo3, setTitulo3] = useState(data.Nombre_Titulo3 ?? '')
  const [TipoContrato, setTipoContrato] = useState(data.Tipo_contrato ?? '')
  const [Edad, setEdad] = useState(data.Edad ?? '')
  const [Aservicio, setAservicio] = useState(data.A_servicio ?? '')
  const [Activo, setActivo] = useState(data.Activo ?? '')


  useEffect(() => {
    setNomina(data.Nomina ?? '');
    setNombre(data.Nombre ?? '');
    setNombres(data.Nombres ?? '');
    setPrimerapellido(data.Primer_apellido ?? '')
    setSegundoapellido(data.Segundo_apellido ?? '')
    setCorreo(data.Correo ?? '')
    setGenero(data.Genero ?? '')
    setContrato(data.T_cont_administrativo ?? '')
    setGrado(data.Grado_academico ?? '')
    setRectoria(data.Rec_dependiente ?? '')
    setFacultad(data.Fac_dept ?? '')
    setCentro(data.Centro_trabajo ?? '')
    setPuesto(data.Puesto ?? '')
    setJefe(data.Jefe_inmediato ?? '')
    setFecha(data.Fecha_Nacimiento ?? '')
    setSeguroS(data.Num_seguro_s ?? '')
    setCurp(data.Curp ?? '')
    setNacionalidad(data.Nacionalidad ?? '')
    setEstadoCivil(data.Estado_Civil ?? '')
    setDireccion(data.Direccion ?? '')
    setTelefono(data.Telefono ?? '')
    setNivel1(data.Nivel1 ?? '')
    setInstitucion1(data.Institucion_niv1 ?? '')
    setTitulo1(data.Nombre_Titulo1 ?? '')
    setNivel2(data.Nivel2 ?? '')
    setInstitucion2(data.Institucion_niv2 ?? '')
    setTitulo2(data.Nombre_Titulo2 ?? '')
    setNivel3(data.Nivel3 ?? '')
    setInstitucion3(data.Institucion_niv3 ?? '')
    setTitulo3(data.Nombre_Titulo3 ?? '')
    setTipoContrato(data.Tipo_contrato ?? '')
    setEdad(data.Edad ?? '')
    setAservicio(data.A_servicio ?? '')
    setActivo(data.Activo ?? '')
  }, [data]);

  useEffect(() => {
    const getRol = JSON.parse(localStorage.getItem('user'))
    if (getRol['rol'] == 1) {
      setGetRol(true)
    } else {
      setGetRol(false)
    }
  })

  const HandleSubmitEmp = (e) => {
    e.preventDefault();
    CreatEmp({
      Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
      Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
      Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
      Edad, Aservicio, Activo
    })


  }

  const HandleUpdateEmp = async (e) => {
    e.preventDefault()
    const id = data.id
    UpdateEmp({
      id, Nomina, Nombre, Nombres, Primerapellido, Segundoapellido, Correo, Genero, Contrato, Grado, Rectoria,
      Facultad, Centro, Puesto, Jefe, Fecha, SeguroS, Curp, Nacionalidad, EstadoCivil, Direccion, Telefono,
      Nivel1, Institucion1, Titulo1, Nivel2, Institucion2, Titulo2, Nivel3, Institucion3, Titulo3, TipoContrato,
      Edad, Aservicio, Activo
    })

  }

  const HandleDeletEmp = async (e) => {
    e.preventDefault()
    const id = data.id
    const Activo = 1
    DeleteEmp({ id, Activo })

  }

  const HandleActivEmp = async (e) => {
    e.preventDefault()
    const id = data.id
    const Activo = 0
    ActivEmp({id, Activo})
  }


  return (
    <>
      <Stack spacing={80} marginTop='-11%' maxW={'xl'} >
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          width="160%"
          p={6}>
          <Stack >
            <HStack py={2} spacing={5}>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Nomina</FormLabel>
                  <Input type="number" value={Nomina} onChange={((e) => setNomina(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input type="text" value={Nombre} onChange={((e) => setNombre(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nombres</FormLabel>
                  <Input type="text" value={Nombres} onChange={((e) => setNombres(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired>
                  <FormLabel>Primer Apellido</FormLabel>
                  <Input type="text" value={Primerapellido} onChange={((e) => setPrimerapellido(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Segundo Apellido</FormLabel>
                  <Input type="text" value={Segundoapellido} onChange={((e) => setSegundoapellido(e.target.value))} />
                </FormControl>
              </Box>
            </HStack>
            {/*  */}
            <HStack py={1} spacing={5}>
              <Box>
                <FormControl  >
                  <FormLabel>Correo</FormLabel>
                  <Input type="text" value={Correo} onChange={((e) => setCorreo(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Genero</FormLabel>
                  <Input type="text" value={Genero} onChange={((e) => setGenero(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Tipo contrato</FormLabel>
                  <Input type="text" value={Contrato} onChange={((e) => setContrato(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Grado Academico</FormLabel>
                  <Input type="text" value={Grado} onChange={((e) => setGrado(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Rectroria</FormLabel>
                  <Input type="text" value={Rectoria} onChange={((e) => setRectoria(e.target.value))} />
                </FormControl>
              </Box>
            </HStack>
            {/*  */}
            <HStack py={2} spacing={5}>
              <Box>
                <FormControl >
                  <FormLabel>Facultad/Dep</FormLabel>
                  <Input type="text" value={Facultad} onChange={((e) => setFacultad(e.target.value))} />

                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Centro trabajo</FormLabel>
                  <Input type="text" value={Centro} onChange={((e) => setCentro(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Puesto</FormLabel>
                  <Input type="text" value={Puesto} onChange={((e) => setPuesto(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Jefe inmediato</FormLabel>
                  <Input type="text" value={Jefe} onChange={((e) => setJefe(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Fecha nacimiento</FormLabel>
                  <Input type="text" value={Fecha || ""} onChange={((e) => setFecha(e.target.value))} />
                </FormControl>
              </Box>
            </HStack>

            {/*  */}
            <HStack py={2} spacing={5}>
              <Box>
                <FormControl  >
                  <FormLabel>Numero seguro social</FormLabel>
                  <Input type="number" value={SeguroS || ""} onChange={((e) => setSeguroS(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Curp</FormLabel>
                  <Input type="text" value={Curp || ""} onChange={((e) => setCurp(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nacionalidad</FormLabel>
                  <Input type="text" value={Nacionalidad} onChange={((e) => setNacionalidad(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Estado civil</FormLabel>
                  <Input type="text" value={EstadoCivil} onChange={((e) => setEstadoCivil(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Direccion</FormLabel>
                  <Input type="text" value={Direccion} onChange={((e) => setDireccion(e.target.value))} />
                </FormControl>
              </Box>
            </HStack>

            {/*  */}
            <HStack py={2} spacing={5}>
              <Box>
                <FormControl  >
                  <FormLabel>Telefono</FormLabel>
                  <Input type="text" value={Telefono} onChange={((e) => setTelefono(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Licenciaturas/Tecnica</FormLabel>
                  <Input type="text" value={Nivel1} onChange={((e) => setNivel1(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nombre institución</FormLabel>
                  <Input type="text" value={Institucion1} onChange={((e) => setInstitucion1(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nombre titulo</FormLabel>
                  <Input type="text" value={Titulo1} onChange={((e) => setTitulo1(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Maestria/equivalente</FormLabel>
                  <Input type="text" value={Nivel2} onChange={((e) => setNivel2(e.target.value))} />
                </FormControl>
              </Box>
            </HStack>

            {/*  */}
            <HStack py={2} spacing={5}>
              <Box>
                <FormControl  >
                  <FormLabel>Nombre institución</FormLabel>
                  <Input type="text" value={Institucion2} onChange={((e) => setInstitucion2(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nombre titulo</FormLabel>
                  <Input type="text" value={Titulo2} onChange={((e) => setTitulo2(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Doctorado/equivalente</FormLabel>
                  <Input type="text" value={Nivel3} onChange={((e) => setNivel3(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nombre institución</FormLabel>
                  <Input type="text" value={Institucion3} onChange={((e) => setInstitucion3(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel>Nombre titulo</FormLabel>
                  <Input type="text" value={Titulo3} onChange={((e) => setTitulo3(e.target.value))} />
                </FormControl>
              </Box>
            </HStack>

            {/*  */}
            <HStack py={2} spacing={5}>
              <Box>
                <FormControl  >
                  <FormLabel style={{ whiteSpace: 'nowrap' }}>Tipo contrato</FormLabel>
                  <Input type="text" value={TipoContrato} onChange={((e) => setTipoContrato(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl isRequired>
                  <FormLabel>Edad</FormLabel>
                  <Input type="text" value={Edad || ""} onChange={((e) => setEdad(e.target.value))} />
                </FormControl>
              </Box>

              <Box>
                <FormControl >
                  <FormLabel style={{ whiteSpace: 'nowrap' }}>Años servicio</FormLabel>
                  <Input type="text" value={Aservicio || ""} onChange={((e) => setAservicio(e.target.value))} />
                </FormControl>
              </Box>
              {getrol &&
                <>
                  {
                    !data.Nomina ?
                      <Box>
                        <Button marginTop="18%" width={40} colorScheme='green' onClick={HandleSubmitEmp}>Generar empleado</Button>
                      </Box>
                      :
                      <Box>
                        <Button marginTop="18%" width={40} colorScheme='facebook' onClick={HandleUpdateEmp}>Actualizar Empleado</Button>
                      </Box>
                  }
                  {
                    data.Activo == 0 ?
                      <Box>
                        <Button marginTop="18%" width={40} colorScheme='red' onClick={HandleDeletEmp}>Desactivar empleado</Button>
                      </Box>
                      : data.Activo == 1 ?
                        <Box>
                          <Button marginTop="18%" width={40} colorScheme='whatsapp' onClick={HandleActivEmp}>Activar Empleado</Button>
                        </Box>
                        :
                        <> </>
                  }

                </>
              }
            </HStack>
          </Stack>
        </Box>
      </Stack >
    </>
  )
}