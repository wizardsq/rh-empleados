import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import {CreateUser} from '../api/User'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import '../assets/css/createus.css'
export const CreateUs = () => {
  const [Nombre, setNombre] = useState('')
  const [Correo, setCorreo] = useState('')
  const [rol, setRol] = useState()
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');

  const toast = useToast()

  function handleVerifyPasswordChange(e) {
    setVerifyPassword(e.target.value);
    if (password !== e.target.value) {
      setError('Las contraseñas no coinciden');
    } else {
      setError('');
    }
  } 

  const HandleSumbit = (e) => {
    e.preventDefault()
    CreateUser({Nombre, Correo, rol,password})
    .then(function(result) {
      if (result == '200') {
        toast({
          title: 'Creación Correcto',
          description: 'Usaurio creado correctamente',
          status: 'success',
          duration: 4000,
          position: 'top',
        })
      } else {
        toast({
          title: 'Creación Incorrecta',
          description: 'Error al Crear el usuario',
          status: 'error',
          duration: 4000,
          position: 'top',
        })
      }

    })
  }

  return (
    <Flex
      minH={'100%'}
      align={'center'}
      justify={'center'}
      className='container'
    >
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Registrar un Usuario
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            El usuario registrado podra tener acceso limitado o completo, dependiendo el tipo de Rol que se le agregue
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
         
          boxShadow={'lg'}
          p={8}>
          <Stack spacing='30px'>
            <HStack spacing={50}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <Input 
                  value={Nombre}
                  type="text" 
                  onChange={(e) => setNombre(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Correo Electronico</FormLabel>
                  <Input 
                  value={Correo}
                  type="text" 
                  onChange={(e)=> setCorreo(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>

            <HStack spacing={50}>
              <Box>
                <FormControl id="password" isRequired>
                  <FormLabel>Contraseña</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="password" isRequired>
                  <FormLabel>Verificar Contraseña</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword1 ? 'text' : 'password'}
                      defaultValue={verifyPassword}
                      onChange={handleVerifyPasswordChange}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword1((showPassword1) => !showPassword1)
                        }>
                        {showPassword1 ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
              <Select value={rol} onChange={e => setRol(e.target.value)}>
                <option>Selecciona un Rol</option>
                <option value='1'>Admin</option>
                <option value='2'>Lector</option>
              </Select>
            </FormControl>

            {
              error &&
              <div >
                <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </div>
            }

            <Stack justifyContent="center" alignItems="center" pt={1}>
              <Button
                width={60}
                loadingText="Submitting"
                size="md"
                rounded='lg'
                bg={'blue.500'}
                color={'white'}
                _hover={{
                  bg: 'blue.400',
                }}
                onClick={HandleSumbit}>
                Registrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  )
}
