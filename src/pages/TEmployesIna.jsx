import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Select,
    Button
  } from '@chakra-ui/react';
  import axios from 'axios';
  import { useState, useEffect } from 'react';
  import * as XLSX from 'xlsx'
  import '../assets/css/paginacion.css'
  import { RiFileExcel2Line } from "react-icons/ri";
export const TEmpleadosIna = () => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [header, setHeader] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [filteredData, setFilteredData] = useState([])
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const user = async () => {
          await axios.get(`${process.env.REACT_APP_URL}/empleadosin`).then(function (res) {
            setData(res.data)
            setFilteredData(res.data)
            setHeader(Object.keys(res.data[0]))
            setTotalPages(Math.ceil(res.data.length / perPage));
            setTotal(res.data.length)
          })
        }
        user()
      }, [perPage])
      useEffect(() => {
        setTotalPages(Math.ceil(filteredData.length / perPage));
      }, [filteredData, perPage]);

      const currentData = filteredData.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
      );
    
      const HandleExport = () => {
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.json_to_sheet(currentData)
        XLSX.utils.book_append_sheet(wb, ws, 'Empleados')
        XLSX.writeFile(wb, 'Tabla_empleados.xlsx')
      }

      console.log(data)
    
  return (
    <>
      <Button key='exportexcel' rightIcon={<RiFileExcel2Line   size="24px" />} colorScheme='whatsapp' onClick={HandleExport}>Exportar a excel</Button>
      <TableContainer>
        <Table className='table'>
          <Thead>
            <Tr>
              {
                header.map((name) => (
                  <Th key={name}>
                    {name}
                  </Th>
                ))
              }
            </Tr>
          </Thead>
          <Tbody>
            {
             currentData
                .map((datos) => (
                  <Tr key={datos.id}>
                    <Td>{datos.id}</Td>
                    <Td>{datos.Nomina}</Td>
                    <Td>{datos.Nombre}</Td>
                    <Td>{datos.Nombres}</Td>
                    <Td>{datos.Primer_apellido}</Td>
                    <Td>{datos.Segundo_apellido}</Td>
                    <Td>{datos.Correo}</Td>
                    <Td>{datos.Genero}</Td>
                    <Td>{datos.T_cont_administrativo}</Td>
                    <Td>{datos.Grado_academico}</Td>
                    <Td>{datos.Rec_dependiente}</Td>
                    <Td>{datos.Fac_dept}</Td>
                    <Td>{datos.Centro_trabajo}</Td>
                    <Td>{datos.Puesto}</Td>
                    <Td>{datos.Jefe_inmediato}</Td>
                    <Td>{datos.Fecha_Nacimiento}</Td>
                    <Td>{datos.Num_seguro_s}</Td>
                    <Td>{datos.Curp}</Td>
                    <Td>{datos.Nacionalidad}</Td>
                    <Td>{datos.Estado_Civil}</Td>
                    <Td>{datos.Direccion}</Td>
                    <Td>{datos.Telefono}</Td>
                    <Td>{datos.Nivel1}</Td>
                    <Td>{datos.Institucion_niv1}</Td>
                    <Td>{datos.Nombre_Titulo1}</Td>
                    <Td>{datos.Nivel2}</Td>
                    <Td>{datos.Institucion_niv2}</Td>
                    <Td>{datos.Nombre_Titulo2}</Td>
                    <Td>{datos.Nivel3}</Td>
                    <Td>{datos.Institucion_niv3}</Td>
                    <Td>{datos.Nombre_Titulo3}</Td>
                    <Td>{datos.Tipo_contrato}</Td>
                    <Td>{datos.Edad}</Td>
                    <Td>{datos.A_servicio}</Td>
                    {
                      datos.Activo == 0 ? (
                        <Td>Activo</Td>
                      ) : (
                        <Td>Inactivo</Td>
                      )
                    }
                    <Td>{datos.FechaRetiro}</Td>
                    <Td>{datos.CausaRetiro}</Td>
                    <Td>{datos.createdAt}</Td>
                    <Td>{datos.updatedAt}</Td>
                  </Tr>
                ))
            }
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={header.length}>
                <div className="pagination-container">
                  <Button colorScheme='facebook' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Anterior</Button>
                  &nbsp; <strong className='pag'>Página {currentPage} de {totalPages}</strong> &nbsp;
                  <Button  colorScheme='facebook' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</Button>

                  <Select width={70} value={perPage} onChange={(e) => setPerPage(e.target.value)}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={total}>Todos</option>
                  </Select>
                </div>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  )
}
