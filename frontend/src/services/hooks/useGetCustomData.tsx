import React from 'react'
import { useCommonSelector } from './useCommonSelector'
import { IUserDatabase } from '../types/sharedTypes'
import { RootState } from '../../redux/store'


export default function useGetCustomData():IUserDatabase {  
  const id = useCommonSelector( (state:RootState) => state.userDatabase.id)
  const customRecipes = useCommonSelector( (state:RootState) => state.userDatabase.customRecipes)
  const intakeHistory = useCommonSelector( (state:RootState) => state.userDatabase.intakeHistory)
  return {
    id,
    customRecipes,
    intakeHistory
  }
}
