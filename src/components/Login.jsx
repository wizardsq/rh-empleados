// Importaciones de Chakra y/o otros librerias
import {
  Button,
// Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  useToast 
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';




// Importaciones locales
import {LoginUser} from '../api/Empleados'
//Importaciones de React
import { useState } from 'react';
//import { Navigate } from 'react-router-dom';


const logo = process.env.PUBLIC_URL + '/img/' + 'logoum.jpg'
export const Login = () => {
  localStorage.setItem('auth', 'false')
  const [correo, setCorreo] = useState('')
  const [passw, setPassw] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast()

  const HandleSubmit = (event) => {
    event.preventDefault()
    
    
    LoginUser({ correo, passw}).then(function (){
        const auth = localStorage.getItem('auth')
        if(auth == 'false'){
          toast({
            title: 'Error en session.',
            position: 'top',
            description: "Correo y/o contraseña incorrecta",
            status: 'error',
            duration: 4000,
          })
        }else {
          toast({
            title: 'Acceso',
            position: 'top',
            description: "Iniciando sesión...",
            status: 'success',
            duration: 4000,
          })
          let timeoutId = setTimeout(function(){
          }, 5000);
          clearTimeout(timeoutId);
        }
    })
    
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          
          <img src={logo} style={{width: '43%', marginTop: '-15%',marginLeft: '33%' }} alt="Universidad de Montemorelos"/>
          <Heading fontSize={'2xl'}>Iniciar Sessión </Heading>
          <FormControl id="email">
            <FormLabel>Correo Electronico</FormLabel>
            <Input 
              type="email" 
              borderColor={'gray'}
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña</FormLabel>
            <InputGroup>
              <Input 
                type={showPassword ? 'text' : 'password'} 
                borderColor={'gray'} 
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
              />
              <InputRightElement h={'full'}>
                  <Button
                    variant={'smooth'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
               {/* <Checkbox>Remember me</Checkbox>  */}
              <Link color={'blue.500'}>Olvidaste la contraseña</Link>
            </Stack>
            <Button type='submit' onClick={HandleSubmit}  colorScheme={'blue'} variant={'solid'} style={{width: '80%', marginLeft: '8%'}}>
              Iniciar Sessión
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}


