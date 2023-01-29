import {
  FormLabel,
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

export const Crearempleado = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [header, setHeader] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    Genero: '',
    Fac_dept: '',
    Fecha_Nacimiento: '',
    A_servicio: '',
    Rec_dependiente: '',
    Grado_academico: '',
    Tipo_contrato: ''
  });

  useEffect(() => {
    const user = async () => {
      await axios.get(`${process.env.REACT_APP_URL}/empleados`).then(function (res) {
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

  useEffect(() => {
    setFilteredData(
      data.filter(
        (dato) =>
          (!filter.Genero || dato.Genero === filter.Genero) &&
          (!filter.Fac_dept || dato.Fac_dept === filter.Fac_dept) &&
          (!filter.Rec_dependiente || dato.Rec_dependiente === filter.Rec_dependiente) &&
          (!filter.Grado_academico || (filter.Grado_academico &&
            (dato.Grado_academico.toUpperCase().includes("PRIMARIA") ||
              dato.Grado_academico.toUpperCase().includes("PREPARATORIA") ||
              dato.Grado_academico.toUpperCase().includes("SECUNDARIA") ||
              dato.Grado_academico.toUpperCase().includes("PREPARATORIA") ||
              dato.Grado_academico.toUpperCase().includes("TÉCNICA") ||
              dato.Grado_academico.toUpperCase().includes("TECNICO") ||
              dato.Grado_academico.toUpperCase().includes("LICENCIATURA") ||
              dato.Grado_academico.toUpperCase().includes("ESPECIALIDAD") ||
              dato.Grado_academico.toUpperCase().includes("MAESTRIA") ||
              dato.Grado_academico.toUpperCase().includes("DOCTORADO") ||
              dato.Grado_academico.toUpperCase().includes("MASTER"))
          )) &&
          (!filter.Fecha_Nacimiento || (getMonthFromDate(dato.Fecha_Nacimiento) === parseInt(filter.Fecha_Nacimiento))) &&
          (!filter.T_cont_administrativo || dato.T_cont_administrativo === filter.T_cont_administrativo)

      )
    );
  }, [filter, data]);

  const getMonthFromDate = (date) => {
    if (!date) return null
    const dateArray = date.split('-');
    return parseInt(dateArray[1]);

  }

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  }
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

  return (
    <>
      <Button key='exportexcel' rightIcon={<RiFileExcel2Line   size="24px" />} colorScheme='whatsapp' onClick={HandleExport}>Exportar a excel</Button>
      <TableContainer className='table'>
        <Table>
          <Thead>
            <Th key='Genero'>
              <FormLabel>Género :</FormLabel>
              <Select width={110} name="Genero" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </Select>
            </Th>
            <Th key='Fac_dept'>
              <FormLabel>Facultad:</FormLabel>
              <Select width={110} name="Fac_dept" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="ARTCOM">ARTCOM </option>
                <option value="AUDITORIA INTERNA">AUDITORIA INTERNA</option>
                <option value="BIBLIOTECA">BIBLIOTECA</option>
                <option value="C. EXTENSIONES">C. EXTENSIONES </option>
                <option value="CENTRI WHITE">CENTRI WHITE </option>
                <option value="COMPRAS">COMPRAS</option>
                <option value="COMUNICACION">COMUNICACION </option>
                <option value="CONTABILIDAD"> CONTABILIDAD </option>
                <option value="CONTRALORIA">CONTRALORIA</option>
                <option value="CONTRALORIA/SER. GEALES.">CONTRALORIA/SER. GEALES. </option>
                <option value="DESARROLLO"> DESARROLLO </option>
                <option value="DIR. DE FACSA">DIR. DE FACSA</option>
                <option value="DIRECCION CONTABIE">DIRECCION CONTABIE </option>
                <option value="DIRECCION CONTABLE">DIRECCION CONTABLE </option>
                <option value="DIRECCION DE CONTRALORIA">DIRECCION DE CONTRALORIA</option>
                <option value="DIRECCIÓN DE DESARROLLO">DIRECCIÓN DE DESARROLLO </option>
                <option value="DIRECCION DE EFECTIVIDAD">DIRECCION DE EFECTIVIDAD </option>
                <option value="DIRECCION DE R.H.">DIRECCION DE R.H.</option>
                <option value="DIRECCION DE SISTEMAS">DIRECCION DE SISTEMAS  </option>
                <option value="DIRECCION DE TECNOLOGÍA E INFORMÁTICA">DIRECCION DE TECNOLOGÍA E INFORMÁTICA </option>
                <option value="DIRECCION ESCOLAR">DIRECCION ESCOLAR</option>
                <option value="DIRECCION FINANCIERA">	DIRECCION FINANCIERA </option>
                <option value="DIRECCION FINANCOERA">DIRECCION FINANCOERA </option>
                <option value="DIRECCIÓN JURÍDICA"> DIRECCIÓN JURÍDICA  </option>
              </Select>
            </Th>
            <Th key='Fecha_Nacimiento'>
              <FormLabel>Fecha Nacimineto:</FormLabel>
              <Select width={110} name="Fecha_Nacimiento" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="01"> 1</option>
                <option value="02"> 2</option>
                <option value="03"> 3</option>
                <option value="04"> 4</option>
                <option value="05"> 5</option>
                <option value="06"> 6</option>
                <option value="07"> 7</option>
                <option value="08"> 8</option>
                <option value="09"> 9</option>
                <option value="10"> 10</option>
                <option value="11"> 11</option>
                <option value="12"> 12</option>
              </Select>
            </Th>
            <Th key='A_servicios'>
              <FormLabel>Años servicio:</FormLabel>
              <Select width={110} name="A_servicios" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="5">Mayor a 5</option>
                <option value="15">Mayor a 15</option>
                <option value="25">Mayor a 25</option>
                <option value="35">Mayor a 35</option>
              </Select>
            </Th>
            <Th key='Rec_dependiente'>
              <FormLabel> Rectoria:</FormLabel>
              <Select width={110} name="Rec_dependiente" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="RECTORIA">RECTORIA</option>
                <option value="RVRF">RVRF</option>
                <option value="VRA">VRA</option>
                <option value="VRE">VRE</option>
                <option value="VRF">VRF</option>
              </Select>
            </Th>
            <Th key='Grado_academico'>
              <FormLabel>Grado Academico:</FormLabel>
              <Select width={110} name="Grado_academico" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="PRIMARIA">Primaria </option>
                <option value="PREPARATORIA">Preparatoria </option>
                <option value="SECUNDARIA">Secundaria </option>
                <option value="PREPARATORIA">Preparatoria </option>
                <option value="TÉCNICA">Tecnica </option>
                <option value="TECNICO">Tecnico </option>
                <option value="LICENCIATURA">Licenciatura </option>
                <option value="MÉDICO ">Medico  </option>
                <option value="ESPECIALIDAD ">Especialidad </option>
                <option value="MAESTRIA">Maestria  </option>
                <option value="MASTER">Master  </option>
                <option value="DOCTORADO">Doctorado  </option>
              </Select>
            </Th>
            <Th key='T_cont_administrativo'>
              <FormLabel>Tipo contrato:</FormLabel>
              <Select width={110} name="T_cont_administrativo" onChange={handleFilterChange}>
                <option value="">Todos</option>
                <option value="A">A</option>
                <option value="ADMIN/CENTRAL">ADMIN/CENTRAL</option>
                <option value="D">D</option>
                <option value="DIR/ADM.">DIR/ADM.</option>
              </Select>
            </Th>
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
                .filter(dato => !filter.Genero || dato.Genero === filter.Genero)
                .filter(dato => !filter.Fac_dept || dato.Fac_dept === filter.Fac_dept)
                .filter(dato => !filter.Rec_dependiente || dato.Rec_dependiente === filter.Rec_dependiente)
                .filter(dato => !filter.Grado_academico || (filter.Grado_academico &&
                  (dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()) ||
                    dato.Grado_academico.toUpperCase().includes(filter.Grado_academico.toUpperCase()))))
                .filter(dato => !filter.Fecha_Nacimiento || getMonthFromDate(dato.Fecha_Nacimiento) === parseInt(filter.Fecha_Nacimiento))
                .filter(dato => !filter.T_cont_administrativo || dato.T_cont_administrativo === filter.T_cont_administrativo)
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
                    <Td>Trabajando</Td>
                    <Td>Trabajando</Td>
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
                  <Button colorScheme='facebook' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</Button>

                  <Select width={70} value={perPage} onChange={(e) => setPerPage(e.target.value)}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
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
