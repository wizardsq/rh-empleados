import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Card,
    CardHeader,
    CardBody,
    Grid,
    GridItem,
    InputGroup,
    Input,
    InputRightElement,
    Heading,
    List,
    ListItem,
    Button,
    Text 
  } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { FormatEmployes } from '../components/Format/FormatEmployes'

export const Formato = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [obtEmpleado, setobtEmpleado] = useState({})
    const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const user = async () => {
        setIsLoading(true)
      await axios.get(`http://localhost:3000/api/Allempleados`).then(function (res) {
        setData(res.data)
        setIsLoading(false)
      })
    }
    user()
  }, [setData])

console.log(data)
  function ObtEmpleado(emp) {
    setobtEmpleado(emp)
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
                  .filter(emp => (emp.Nombre.toUpperCase().includes(searchTerm.toUpperCase())
                      || emp.Nombres.toUpperCase().includes(searchTerm.toUpperCase())
                      || emp.Primer_apellido.toUpperCase().includes(searchTerm.toUpperCase())
                      || emp.Segundo_apellido.toUpperCase().includes(searchTerm.toUpperCase())))
                  .map((emp) => (
                    <Button
                      colorScheme='withe'
                      color="black"
                      key={emp.id}
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
            </Card>
          </CardBody>
        </Card>
      </GridItem>
        <FormatEmployes data={obtEmpleado} /> 
      <GridItem colSpan={4} />
    </Grid>
  )
}
