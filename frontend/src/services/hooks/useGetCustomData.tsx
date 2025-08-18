import React from 'react'
import { useCommonSelector } from './useCommonSelector'
import { IUserDatabase } from '../types/sharedTypes'
import { RootState } from '../../redux/store'


export default function useGetCustomData():IUserDatabase {  
  const id = useCommonSelector( (state:RootState) => state.userDatabase.id)
  const calories_limit = useCommonSelector( (state:RootState) => state.userDatabase.calories_limit)
  const custom_recipes = useCommonSelector( (state:RootState) => state.userDatabase.custom_recipes)
  const intake_history = useCommonSelector( (state:RootState) => state.userDatabase.intake_history)
  return {
    id,
    calories_limit,
    custom_recipes,
    intake_history,
  }
}
