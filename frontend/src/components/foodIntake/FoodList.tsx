import React, { useEffect, useState } from 'react'
import DishAdder from './DishAdder'
//Styles
import { HiddenFoodMenu } from '../../styles/foodIntake'
import { AppButton } from '../../styles/sharedStyles'
//Services
import { IDefaultFoodDatabase } from '../../services/types/sharedTypes'
import { foodsFilter } from '../../services/functions/sharedFunctions'
import { useIntake } from '../../services/hooks/useIntake'

export default function FoodList( { foods }: { foods: IDefaultFoodDatabase[] } ) {

  const [isDishNeededToBeAdd, setIsDishNeededToBeAdded] = useState(false)
  const { currentMeal, setMealName, currentWeight, setWeight, allFood, setFood, setIsMealChosen } = useIntake()
  const filteredFoods: IDefaultFoodDatabase[] = foodsFilter(allFood, currentMeal) 

  const hideFoodList = (meal:string):void => {
        setMealName(meal)
        setIsMealChosen(true) 
  }

    if(isDishNeededToBeAdd) { return( <DishAdder isWindowActive = { setIsDishNeededToBeAdded }/> ) }
    return (
    <HiddenFoodMenu>
     <ul>
     { foods.map( (foods ) => {
        return (
        <li onClick={(e) => hideFoodList(foods.name_en) } key={foods.id}>
        {foods.name_en}
        </li>
        )
      }) }  
      { filteredFoods.length === 0 ?
      <AppButton onClick={() => setIsDishNeededToBeAdded(true)}>Add your dish</AppButton> 
      : 
       <AppButton onClick={() => setIsDishNeededToBeAdded(true)}>Chose the dish</AppButton> 
      }
     </ul>   
    </HiddenFoodMenu>
  )
}
