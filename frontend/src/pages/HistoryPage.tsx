import React, { useEffect, useState } from 'react'
import useGetCustomData from '../services/hooks/useGetCustomData'
import VisualData from '../components/VisualData'

export default function HistoryPage() {
   
    const { intake_history: history  } = useGetCustomData()
    const [ daysToLook, setDaysToLook ] = useState(7)

    useEffect( () => {
        
    }, [history])

  return (
    <div>
      <h1>{ `Intake history for a ${daysToLook} days` } </h1>
      <VisualData days={daysToLook}/>
    </div>
  )
}
