import {
  Card,
  CardHeader,
  CardBody,
  Heading,
} from '@chakra-ui/react'
import { Estadisticas } from '../components/Home/Stadistics'

export const Home = () => {
 


  return (
    <Card width="95%">
       <CardHeader>
        <Heading>Estadisticas del Sistema</Heading>
      </CardHeader>
      <CardBody>
        <Estadisticas />
      </CardBody> 
    </Card>
  )
}
