import React, { useState } from 'react'
import { AppButton, AppForm } from '../../styles/sharedStyles'
import { useIntake } from '../../services/hooks/useIntake'
import { sendOneNewEatenMeal } from '../../services/functions/databaseHandler'
import { singleMealCalories } from '../../services/functions/sharedFunctions'
import { useAuthState } from '../../services/hooks/useAuthState'
import useSetCustomData from '../../services/hooks/useSetCustomData'
import useGetCustomData from '../../services/hooks/useGetCustomData'
import { IEatenMeal } from '../../services/types/sharedTypes'


export default function FoodForm() {
  
  const { currentMeal, setMealName, currentWeight, setWeight, setIsMealChosen, allFood } = useIntake()
  const { userName } = useAuthState()
  const { setHistory } = useSetCustomData()
  const { intake_history } =  useGetCustomData()
  
  const keyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Backspace') {
           setIsMealChosen(false)
    }}

  const formSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        if (currentMeal.length === 0 || currentWeight.length === 0 ) {
           alert("All fields should be filled")
           return 
        }
        if (!Number(currentWeight)) {
          alert("The weight field is incorrect")
          return
        }
        const mealToSend = [...allFood].filter( (e) => e.name_en.toLowerCase() === currentMeal.toLowerCase() )
        const selectedMeal = mealToSend[0]
        const kcal = singleMealCalories(selectedMeal, currentWeight)
        const eatenMeal: IEatenMeal =  {
          meal: currentMeal,
          weight: currentWeight,
          proteins: selectedMeal.proteins,
          fats: selectedMeal.fats,
          carbs: selectedMeal.carbs,
          kcal: kcal,
          date: String(new Date)
        }
        sendOneNewEatenMeal(userName, eatenMeal )
        .then( (data) => {
          setMealName('')
          setWeight('')
          setHistory([...intake_history, ...[eatenMeal]])
          return
        })
  }   

  return (
       <AppForm onSubmit={(e) => formSubmitHandler(e)} style={{height: '400px'}}>
         <label htmlFor="meal">What are you eating</label>
         <input autoComplete='off' required value={currentMeal} id='meal' name='meal' type="text" 
         onChange={(e) => setMealName(e.target.value)} onKeyDown={ (e) => keyDownHandler(e) } />
         <label htmlFor="weight">How much</label>
         <input autoComplete='off' required value={currentWeight} id='weight' name='weight' type="text" onChange={(e) => {setWeight(e.target.value)}} />
         <AppButton type='submit'>Add food intake</AppButton>
       </AppForm>
       
  )
}
