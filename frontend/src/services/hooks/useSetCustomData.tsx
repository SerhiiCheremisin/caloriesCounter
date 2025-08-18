import { setUserId, setUserRecipes, setUserIntakeHistory, setUserCaloriesLimit  } from '../../redux/slices/userDatabaseSlice'
import { useCommonDispatch } from './useCommonDispatch'
import { IEatenMeal } from '../types/sharedTypes'

export default function useSetCustomData() {

const dispatch = useCommonDispatch()
const setId = (id: number) => dispatch(setUserId(id))
const setRecipes = (recipes: any[]) => dispatch(setUserRecipes(recipes))
const setHistory = (history: IEatenMeal[]) => dispatch(setUserIntakeHistory(history))
const setLimit = (limit:number) => dispatch(setUserCaloriesLimit(limit))
const setAllCustomData = (id: number, recipes: any[], history: IEatenMeal[], limit:number ) => {
       setId(id)
       setRecipes(recipes)
       setHistory(history)
       setLimit(limit)
}
  return {
    setId,
    setRecipes,
    setHistory,
    setLimit,
    setAllCustomData
  }
}
