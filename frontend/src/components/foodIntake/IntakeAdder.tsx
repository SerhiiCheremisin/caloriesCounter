import React, { JSX, useEffect, useState } from 'react'
//shared
import { defaultFood } from '../../services/shared/defaultFoodDatabase'
import { Spinner } from '../../styles/sharedStyles'
import { foodsFilter, uniqueFoodSort } from '../../services/functions/sharedFunctions'
import { IDefaultFoodDatabase } from '../../services/types/sharedTypes'
import { useIntake } from '../../services/hooks/useIntake'
//hooks
import useGetCustomData from '../../services/hooks/useGetCustomData'
//components
import FoodForm from './FoodForm'
import FoodList from './FoodList'

export default function IntakeAdder() {

 const { custom_recipes } =  useGetCustomData()
 const { currentMeal, allFood, setFood, isMealBeenChosen } = useIntake()
 
 const setFoods = ():void => {
  const uniqueFoods = uniqueFoodSort([...defaultFood, ...custom_recipes])
  setFood(uniqueFoods)
}

 useEffect( () => {
    setFoods()
 }, [custom_recipes])
 
const filteredFoods: IDefaultFoodDatabase[] = foodsFilter(allFood, currentMeal ) 
const foodsRender = (): JSX.Element => {
  if (currentMeal.length !== 0 && isMealBeenChosen === false ) {
    return <FoodList foods={filteredFoods} />
  }
  return <></>
}

 if (allFood.length === 0) {
    return <Spinner/>
 }  
  return (
      <>
       <FoodForm/>
        {foodsRender()}
      </>
  )
}
