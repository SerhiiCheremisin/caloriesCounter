import { RootState } from "../../redux/store"
import { useCommonDispatch } from "./useCommonDispatch"
import { useCommonSelector } from "./useCommonSelector"
import { setMealWeight, setMeal, setAllFood, setMealBeenChosen } from "../../redux/slices/foodIntakes"
import { IDefaultFoodDatabase } from "../types/sharedTypes"
import { useSelector } from "react-redux"

export const useIntake =  () => {
const dispatch = useCommonDispatch()

const currentMeal = useCommonSelector( (state:RootState) => state.foodIntake.meal)
const currentWeight = useCommonSelector( (state:RootState) => state.foodIntake.weight)
const allFood = useCommonSelector( (state:RootState) => state.foodIntake.allFood)
const isMealBeenChosen = useSelector( (state:RootState) => state.foodIntake.isMealHasChosen)

const setMealName = (value: string):void => {
    dispatch(setMeal(value))
}
const setWeight = (value: string):void => {
    dispatch(setMealWeight(value))
  }
const setFood = (value: IDefaultFoodDatabase[]):void => {
    dispatch(setAllFood(value))
} 
const setIsMealChosen = (value:boolean) => {
  dispatch(setMealBeenChosen(value))
}


  return { currentMeal, setMealName, currentWeight, setWeight, allFood, setFood, isMealBeenChosen, setIsMealChosen }
}