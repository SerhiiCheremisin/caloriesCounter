import { ISessionStorageUnit } from "../types/sharedTypes";
import { setUserLogged, setUserName } from "../../redux/slices/userSlice";
import { AppDispatch } from "../../redux/store";
import { setNavigationStatus } from "../../redux/slices/hiddenMenuSlice";
import { sessionVar } from "../shared/sharedData";


export const appSessionChecker = async (): Promise<null | ISessionStorageUnit> => {
       try {
       const request = sessionStorage.getItem(sessionVar);
        if (!request) return null;
       const parsed = JSON.parse(request);
           return parsed;
        } 
        catch (error) {
         console.error("You got an error:", error);
         return null;
        }     
}

export const setUserToSessionVal = (name:string):void => {
       sessionStorage.setItem(sessionVar, JSON.stringify({ userName: name }))  
}

export const logOuter = (dispatch: AppDispatch):void => {
       sessionStorage.removeItem(sessionVar)
       dispatch(setUserLogged(false))
       dispatch(setUserName(""))
       dispatch(setNavigationStatus(false))
}