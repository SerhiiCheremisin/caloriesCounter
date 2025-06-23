import { setUserId, setUserRecipes, setUserIntakeHistory  } from '../../redux/slices/userDatabaseSlice'
import { useCommonDispatch } from './useCommonDispatch'

export default function useGetCustomData() {

const dispatch = useCommonDispatch()
const setId = (id: number) => dispatch(setUserId(id))
const setRecipes = (recipes: any[]) => dispatch(setUserRecipes(recipes))
const setHistory = (history: any[]) => dispatch(setUserIntakeHistory(history))

  return {
    setId,
    setRecipes,
    setHistory
  }
}
