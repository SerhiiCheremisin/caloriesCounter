import React, { useEffect, useState } from 'react'
import { NewDishMenu } from '../../styles/foodIntake'

//Shared
import { changeCustomDatabase } from '../../services/functions/databaseHandler'
import { IDefaultFoodDatabase } from '../../services/types/sharedTypes'
import { AppButton, AppForm } from '../../styles/sharedStyles'
import { defaultEmptyFood } from '../../services/shared/sharedData'
// Hooks
import useGetCustomData from '../../services/hooks/useGetCustomData'
import useSetCustomData from '../../services/hooks/useSetCustomData'
import { useAuthState } from '../../services/hooks/useAuthState'
import { useIntake } from '../../services/hooks/useIntake'

interface dishAdderProps {
          isWindowActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DishAdder( { isWindowActive } : dishAdderProps) {

const [newDish, setNewDish] = useState<IDefaultFoodDatabase>(defaultEmptyFood)
const { custom_recipes } = useGetCustomData()
const { currentMeal, setMealName } = useIntake()
const { setRecipes } = useSetCustomData()
const { userName } = useAuthState()

useEffect( () => {
    setNewDish({...newDish, name_en: currentMeal })
}, [])

const formHandler = (e: React.FormEvent<HTMLFormElement>) : void => {
      e.preventDefault()
      if (newDish.name_en === "") {
         alert("Dish name field should not be empty")
         return 
      }
      const modifiedDish:IDefaultFoodDatabase = { ...newDish, id: custom_recipes.length }
      changeCustomDatabase(userName, "customRecipes", modifiedDish)
      .then( (data) => {
        setRecipes(data.custom_recipes)
        isWindowActive(false)
        setNewDish(defaultEmptyFood)
        setMealName("")
      } ) 
}

const dishHandler = (key:string, value:string) : void => {
      if (key === "dish") {
         const newState = {...newDish, name_en : value}
         setNewDish(newState)
         return 
      }
      const changedValue = value.replace(/[^0-9]/g, "")
      if (value !== changedValue) {
        return
      }
      const newState = {...newDish, [key] : changedValue}
      setNewDish(newState)
      return
}

  return (
    <NewDishMenu>
      <AppForm onSubmit={(e) => formHandler(e)} style={{height: '600px'}}>
        <label htmlFor="Dish name">Dish name</label>
        <input onChange={(e) => dishHandler("dish", e.target.value)} value={newDish.name_en} type="text" id='Dish name'/>
        <label htmlFor="Fats">Fats</label>
        <input onChange={(e) => dishHandler("fats", e.target.value)} value={newDish.fats} type="text" id='Fats'/>
        <label htmlFor="Proteins">Proteins</label>
        <input onChange={(e) => dishHandler("proteins", e.target.value)} value={newDish.proteins} type="text" id='Proteins'/>
        <label htmlFor="Carbs">Carbs</label>
        <input onChange={(e) => dishHandler("carbs", e.target.value)} value={newDish.carbs} type="text" id='Carbs'/>
        <label htmlFor="Kcal">Kcal</label>
        <input onChange={(e) => dishHandler("kcal", e.target.value)} value={newDish.kcal} type="text" id='Kcal'/>
        <AppButton type='submit'>Add new dish</AppButton>
        <AppButton onClick={() => isWindowActive(false)}>Close</AppButton>
      </AppForm>
    </NewDishMenu>
  )
}
