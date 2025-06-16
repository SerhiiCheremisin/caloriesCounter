import { RootState } from '../../redux/store'
import { IUserSlice } from '../types/sharedTypes'
import { useCommonSelector } from './useCommonSelector'

export default function useAuthState():IUserSlice {

  const isLogged:boolean = useCommonSelector( (state:RootState) => state.user.isUserLogged)
  const userName: string = useCommonSelector( (state:RootState) => state.user.userName) 
    
    return {
      isUserLogged : isLogged,
      userName: userName,
    }
}
