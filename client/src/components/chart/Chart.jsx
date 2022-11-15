import { Box } from '@chakra-ui/react'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { chartData, dateWiseData } from './chartData'
import { useSelector } from 'react-redux'

const Chart = ({ title }) => {
  const { usersAlItems } = useSelector((store) => store.diary)
  if (usersAlItems) var dataArray = dateWiseData(usersAlItems)
  const data = chartData(dataArray, title)
  return (
    <Box
      w="full"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      px={{base:'auto',lg:"20px"}}
    >
      <Bar data={data} />
    </Box>
  )
}

export default Chart
