import React, { useState } from 'react'
import { AppButton, AppForm } from '../../styles/sharedStyles'
import { useIntake } from '../../services/hooks/useIntake'

export default function FoodForm() {
  
  const { currentMeal, setMealName, currentWeight, setWeight, setIsMealChosen } = useIntake()
  
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
        
  }   

  return (
       <AppForm onSubmit={(e) => formSubmitHandler(e)} style={{height: '600px'}}>
         <label htmlFor="meal">What are you eating</label>
         <input required value={currentMeal} id='meal' name='meal' type="text" 
         onChange={(e) => setMealName(e.target.value)} onKeyDown={ (e) => keyDownHandler(e) } />
         <label htmlFor="weight">How much</label>
         <input required value={currentWeight} id='weight' name='weight' type="text" onChange={(e) => {setWeight(e.target.value)}} />
         <AppButton type='submit'>Add food intake</AppButton>
       </AppForm>
  )
}
