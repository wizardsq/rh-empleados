import {
    Card,
    CardBody,
    Stat,
    StatLabel,
    StatNumber,
    SimpleGrid,
    Box
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GiWorld, GiMexico } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { IoWomanOutline, IoManOutline } from "react-icons/io5";



export const Estadisticas = () => {
    const [data, setData] = useState([])
    const [screensize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const datos = async () => {
            await axios.get(`${process.env.REACT_APP_URL}/info`).then(function (res) {
                setData(res.data)
            })
        }
        datos()

    }, [setData])
    console.log(data)

    useEffect(() => {
        window.addEventListener('resize', () => setScreenSize(window.innerWidth));
        return () => window.removeEventListener('resize', () => setScreenSize(window.innerWidth));
    }, [])

    return (
        <SimpleGrid columns={5} spacingX='40px' spacingY='20px'>
            <Card variant='filled' backgroundColor='#2c445c'>
                <CardBody>
                    <Box
                        style={{ height: screensize > 1500 ? '110px' : '130px' }}
                    >
                        <Stat>
                            <StatLabel fontSize={18} color='white'>Empleados
                                <FaUsers
                                    style={{
                                        marginLeft: screensize > 1500 ? '80%' : '5%',
                                        marginTop: screensize > 1500 ? '-15%' : '5%'
                                    }} size={45}
                                />
                            </StatLabel>
                            <StatNumber fontSize={50} color='white'>{data['Total de empleados']}</StatNumber>
                        </Stat>
                    </Box>
                </CardBody>
            </Card>

            <Card variant='filled' backgroundColor='#355c7d'>
                <CardBody>
                    <Box style={{ height: screensize > 1500 ? '110px' : '130px' }}>
                        <Stat>
                            <StatLabel fontSize={18} color='white'>Mexicanos
                                <GiMexico style={{
                                    marginLeft: screensize > 1500 ? '76%' : '5%',
                                    marginTop: screensize > 1500 ? '-16%' : '5%'
                                }} size={45}
                                />
                            </StatLabel>
                            <StatNumber fontSize={50} color='white'>{data['Total Empleados Mexicanos']}</StatNumber>
                        </Stat>
                    </Box>
                </CardBody>
            </Card>

            <Card variant='filled' backgroundColor='#725a7a '>
                <CardBody>
                    <Box style={{ height: screensize > 1500 ? '110px' : '130px' }}>
                        <Stat>
                            <StatLabel fontSize={18} color='white' >Extranjeros <GiWorld style={{
                                marginLeft: screensize > 1500 ? '76%' : '5%',
                                marginTop: screensize > 1500 ? '-16%' : '3%'
                            }} size={50} /></StatLabel>
                            <StatNumber fontSize={50} color='white'>{data['Total Empleados Extranjeros']}</StatNumber>
                        </Stat>
                    </Box>
                </CardBody>
            </Card>

            <Card variant='filled' backgroundColor='#ac5c74'>
                <CardBody>
                    <Box style={{ height: screensize > 1500 ? '110px' : '130px' }}>
                        <Stat>
                            <StatLabel fontSize={18} color='white'>Hombres <IoManOutline style={{
                                    marginLeft: screensize > 1500 ? '85%' : '5%',
                                    marginTop: screensize > 1500 ? '-15%' : '5%'
                                }}  size={43} /></StatLabel>
                            <StatNumber fontSize={50} color='white'>{data['Total Empleados Hombres']}</StatNumber>
                        </Stat>
                    </Box>
                </CardBody>
            </Card>

            <Card variant='filled' backgroundColor='#c56c90'>
                <CardBody>
                    <Box style={{ height: screensize > 1500 ? '110px' : '130px' }}>
                        <Stat>
                            <StatLabel fontSize={18} color='white'>Mujeres <IoWomanOutline style={{
                                    marginLeft: screensize > 1500 ? '85%' : '5%',
                                    marginTop: screensize > 1500 ? '-15%' : '5%'
                                }} size={43} /></StatLabel>
                            <StatNumber fontSize={50} color='white'>{data['Total Empleados Mujeres']}</StatNumber>
                        </Stat>
                    </Box>
                </CardBody>
            </Card>
        </SimpleGrid>
    )
}