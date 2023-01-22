import {SimpleGrid  } from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import {
  Chart as ChartJS,
  LinearScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios'
export const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const datos = async () => {
      await axios.get(`${process.env.REACT_APP_URL}/datos`).then(function (res) {
        setData(res.data)
      })
    }
    datos()
  }, [setData])

  ChartJS.register(
    LinearScale,
  );

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const graficaPor = () => {

  }
  console.log(data)
  return (
    <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
        <h1>Hola como estas</h1>
    </SimpleGrid>
  )
}
