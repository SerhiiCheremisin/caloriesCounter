import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import useGetCustomData from '../services/hooks/useGetCustomData'
import { datesToDisplay, sortHistoryIntake } from '../services/functions/sharedFunctions'
import { IEatenMeal } from '../services/types/sharedTypes'

interface IVisualDataProps {
    days:number
}

export default function VisualData( { days }: IVisualDataProps ) {
    const { calories_limit : limit, intake_history: history } = useGetCustomData()
    const daysToDisplay: string[] = datesToDisplay(days)
    const sortedIntakes: {[key: string] : IEatenMeal[]} = sortHistoryIntake(history)

    const data: {}[] = []
    daysToDisplay.reverse().map( (el:string) => {
       if (!sortedIntakes[el]) {
          data.push( { name: el, kcal: 0 } )   
          return  
       }
       let kcal = 0
       sortedIntakes[el].map( (el) => kcal += el.kcal) 
       return  data.push( { name: el, kcal: kcal } )   
   })
  return (
     <LineChart width={800} height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Line dataKey="kcal" stroke="#337f15" />
      <ReferenceLine y={Number(limit)} stroke="red" strokeDasharray="3 5" label="Limit" />
    </LineChart>
  )
}
