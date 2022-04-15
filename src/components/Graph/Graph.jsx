import {React,useEffect,useState} from 'react'
import './Graph.css'


import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);





function Graph({graphData}) {
  const [lineData, setLineData] = useState([])
  const [timestamps,setTimestamps] = useState([])
  let time = []
  let count = []




  const getData = ()=>{

    graphData.map((timestamp) => {
      time.push(timestamp['created_at']);
      count.push(timestamp['count'])
    })

  }

  useEffect(() => {
    getData()
    setLineData(count)
    setTimestamps(time)
  }, [graphData]);
  
    
  return (
    <div className='graph-container'>
        <div className="graph">

    <Line   data={{
       // x-axis label values
       labels: timestamps,
       datasets: [
          {
              label: "Disaster",
              // y-axis data plotting values
              data: lineData,
              fill: false,
              borderWidth:0.5,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'red',
              responsive:true
            },
          ],
        }} />
        </div>
    </div>
  )
}

export default Graph