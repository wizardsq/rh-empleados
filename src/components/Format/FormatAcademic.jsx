import React from 'react'
import {
    Box,
    Input,
    HStack,
    FormLabel,
    Text,
    Heading
  } from '@chakra-ui/react'
export const FormatAcademic = ({ data }) => {
    console.log(data)
    return (
        <>
            <Heading py={10} px={5} as='h2' size='md'> PREPARACIÓN ACADÉMICA (ESTUDIOS REALIZADOS)</Heading>
            <HStack>
                <Box px={10}>
                    <HStack>
                        <Box style={{ borderColor: 'black' }}>
                            <FormLabel> <Text>Nivel1:</Text> </FormLabel>
                            <Input width='80%' value={data.Nivel1} readOnly />
                        </Box>
                    </HStack>
                </Box>
                <Box >
                    <HStack>
                        <Box marginLeft='-25%' style={{ borderColor: 'black' }}>
                            <FormLabel> <Text>Título1:</Text> </FormLabel>
                            <Input width='300%' value={data.Nombre_Titulo1} readOnly />
                        </Box>

                    </HStack>
                </Box>
            </HStack>
            <HStack>
                <Box py={2} px={10}>
                    <Box style={{ borderColor: 'black' }}>
                        <FormLabel> <Text>Institución1:</Text> </FormLabel>
                        <Input width='397%' value={data.Institucion_niv1} readOnly />
                    </Box>
                </Box>
            </HStack>

            <HStack>
                <Box px={10}>
                    <HStack>
                        <Box style={{ borderColor: 'black' }}>
                            <FormLabel> <Text>Nivel2:</Text> </FormLabel>
                            <Input width='80%' value={data.Nivel2} readOnly />
                        </Box>
                    </HStack>
                </Box>
                <Box py={5}>
                    <HStack>
                        <Box marginLeft='-25%' style={{ borderColor: 'black' }}>
                            <FormLabel> <Text>Título2:</Text> </FormLabel>
                            <Input width='300%' value={data.Nombre_Titulo2} readOnly />
                        </Box>
                    </HStack>
                </Box>
            </HStack>

            <HStack>
                <Box px={10}>
                    <Box style={{ borderColor: 'black' }}>
                        <FormLabel> <Text>Institución2:</Text> </FormLabel>
                        <Input width='397%' value={data.Institucion_niv2} readOnly />
                    </Box>
                </Box>
            </HStack>

            <HStack>
                <Box px={10}>
                    <HStack>
                        <Box style={{ borderColor: 'black' }}>
                            <FormLabel> <Text>Nivel3:</Text> </FormLabel>
                            <Input width='80%' value={data.Nivel3} readOnly />
                        </Box>
                    </HStack>
                </Box>
                <Box py={5}>
                    <HStack>
                        <Box marginLeft='-25%' style={{ borderColor: 'black' }}>
                            <FormLabel> <Text>Título3:</Text> </FormLabel>
                            <Input width='300%' value={data.Nombre_Titulo3} readOnly />
                        </Box>
                    </HStack>
                </Box>
            </HStack>
            <HStack >
                <Box px={10} >
                    <Box style={{ borderColor: 'black' }}>
                        <FormLabel> <Text>Institución3:</Text> </FormLabel>
                        <Input width='397%' value={data.Institucion_niv3} readOnly />
                    </Box>
                </Box>
            </HStack>
        </>
    )
}
