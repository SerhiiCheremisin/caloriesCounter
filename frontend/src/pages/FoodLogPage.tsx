import React from 'react'
//shared
import { nowDateGenerator } from '../services/functions/sharedFunctions'
//components
import IntakeAdder from '../components/foodIntake/IntakeAdder'

export default function FoodLogPage() {
  return (
    <>
      <h3>Today is : {nowDateGenerator()}</h3>
      <IntakeAdder/>
    </>
  )
}
