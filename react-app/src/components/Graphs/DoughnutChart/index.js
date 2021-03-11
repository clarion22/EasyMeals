import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';
import {useSelector} from 'react-redux';

function DoughnutChart() {
const [chartData, setChartData] = useState({});
const [calorieData, setCalorieData] = useState([0, 0, 1, 1, 0])
const selectedProtein = useSelector(state => state.recipe.selected.Protein)
const selectedVegetables = useSelector(state => state.recipe.selected.Vegetables)
const selectedFruit = useSelector(state => state.recipe.selected.Fruit)
const selectedDairy = useSelector(state => state.recipe.selected.Dairy)
const selectedCarb = useSelector(state => state.recipe.selected.Carbs)

const createChart = () => {
  setChartData({
    labels: ['Protein', 'Dairy', 'Vegetables', 'Fruit', 'Carbs'],
  datasets: [
    {
      label: '# of Votes',
      data: calorieData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  })
}

useEffect(() => {
   if (selectedProtein || selectedVegetables || selectedFruit || selectedDairy || selectedCarb) {
   setCalorieData([selectedProtein.calories, selectedDairy.calories, selectedVegetables.calories, selectedFruit.calories, selectedCarb.calories])
   }
}, [selectedProtein, selectedVegetables, selectedFruit, selectedDairy, selectedCarb])

useEffect(() => {
  createChart()
},[calorieData])

  return (
    <div>
      <Doughnut data={chartData} options={{responsive: true, maintainAspectRatio: false}} />
    </div>
  )
}

export default DoughnutChart;
