import { IUserDefaultData } from "../types/sharedTypes";

export const dynamicKeyFormHandler = (
       key: keyof IUserDefaultData,
       value: string,
       state: IUserDefaultData,
       setter: React.Dispatch<React.SetStateAction<IUserDefaultData>>): void => {
       setter({
         ...state,
         [key]: value
       })
}
