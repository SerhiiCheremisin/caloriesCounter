import { RootState } from "../../redux/store"
import { useCommonDispatch } from "./useCommonDispatch"
import { useCommonSelector } from "./useCommonSelector"
import { setNavigationStatus } from "../../redux/slices/hiddenMenuSlice"


export const useHiddenMenuHandler =  () => {
const dispatch = useCommonDispatch()
const getNavMenu = useCommonSelector( (state:RootState) => state.hiddenNavigation.isMenuHidden)
const setNavMenu = (value: boolean) => {
    dispatch(setNavigationStatus(value))
  }

  return { getNavMenu, setNavMenu }
}