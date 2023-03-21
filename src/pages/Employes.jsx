import React, { useState, useEffect } from 'react'
import axios from 'axios'
//* importaciones de chakra 
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  Heading,
  Box,
  List,
  ListItem,
  Button,
  Checkbox,
  Text 
} from '@chakra-ui/react'
import { SearchIcon, AddIcon } from '@chakra-ui/icons'
import '../assets/css/empleados.css'
import { FormEmp } from '../components/Employes/FormEmp'


export const Empleados = () => {
  const [data, setData] = useState([])
  const [getrol, setGetRol] = useState(false)
  const [obtEmpleado, setobtEmpleado] = useState({})
  const [showInactive, setShowInactive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    const getRol = JSON.parse(localStorage.getItem('user'))
    if(getRol['rol'] == 1) {
      setGetRol(true)
    }else{
      setGetRol(false)
    }
    const user = async () => {
      setIsLoading(true)
      await axios.get(`${process.env.REACT_APP_URL}/Allempleados`).then(function (res) {
        setData(res.data)
        setIsLoading(false)
      })
    }
    user()
  }, [setData])

  console.log(data)
  const handleCheckbox = () => {
    setShowInactive(!showInactive);
  }

  function ObtEmpleado(emp) {
    setobtEmpleado(emp)
  }

  function resetEmpleado() {
    setobtEmpleado({})
  }
  
  return (
    <Grid
      margin
      h='500px'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(5, 2fr)'
      gap={4}
    >
      <GridItem rowSpan={2} >
        <Card>
          <CardHeader>
            <Heading size='md' marginBottom={4}>Empleados</Heading>
            <InputGroup>
              <Input placeholder='Buscar empleado' onChange={e => setSearchTerm(e.target.value)} />
              <InputRightElement children={<SearchIcon />} />
            </InputGroup>
          </CardHeader>

          <CardBody>
            <Box>
              <Checkbox size="lg" marginBottom={5} onChange={handleCheckbox}> Empleados Inactivos</Checkbox>
            </Box>


            <Card py={5} px={5}>
              <List className='listado' height={360} width={265} spacing={3}>
                {
                isLoading ? (
                  <>
                   <Text fontSize='2xl'>Cargando Datos......</Text>
                  </>
                ) : (
                  <>
                {data 
                  .filter(emp => (showInactive ? emp.Activo == 1 : emp.Activo == 0)
                    && (emp.Nombre.toUpperCase().includes(searchTerm.toUpperCase())
                      || emp.Nombres.toUpperCase().includes(searchTerm.toUpperCase())
                      || emp.Primer_apellido.toUpperCase().includes(searchTerm.toUpperCase())
                      || emp.Segundo_apellido.toUpperCase().includes(searchTerm.toUpperCase())))
                  .map((emp) => (
                    <Button
                      colorScheme='withe'
                      color="black"
                      _hover={{ bg: '#F5F5F5' }}
                      size="md"
                      onClick={() => ObtEmpleado(emp)}
                    >
                      <ListItem key={emp.id} style={{ textAlign: "justify" }}>
                        <Text>
                            {emp.Nombre} {emp.Nombres} <br />
                            {emp.Primer_apellido} { emp.Segundo_apellido}&nbsp;&nbsp;
                        </Text>
                      </ListItem>
                    </Button>
                  ))}
                  </>
              )}
              </List>
              <CardFooter>
                  { getrol &&
                    <Button onClick={resetEmpleado} marginTop={4} className='btnr' leftIcon={<AddIcon />} colorScheme='teal' size='md'>
                      Nuevo Empleado
                    </Button>
                }
              </CardFooter>
            </Card>
          </CardBody>
        </Card>
      </GridItem>
        <FormEmp data={obtEmpleado} />
      <GridItem colSpan={4} />
    </Grid>
  )
}
