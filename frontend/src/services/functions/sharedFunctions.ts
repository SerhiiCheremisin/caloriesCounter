import { IDefaultFoodDatabase, IUserDefaultData } from "../types/sharedTypes";

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

export const nowDateGenerator = ():string => {
       const now = new Date();
       const customFormatted = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1)
         .toString()
         .padStart(2, '0')}.${now.getFullYear()}`;
      return customFormatted   
}

export const foodsFilter = ( array:IDefaultFoodDatabase[], searchedElement: string ):IDefaultFoodDatabase[] => {
      return [...array].filter( (food:IDefaultFoodDatabase) => food.name_en.toLowerCase().includes(searchedElement.toLowerCase())) 
}

export const uniqueFoodSort = (array:IDefaultFoodDatabase[]):IDefaultFoodDatabase[]  => {
       const uniqueFoods = array.filter(
         (item, index, self) =>
           index === self.findIndex(
             (food) => food.name_en.toLowerCase() === item.name_en.toLowerCase()
           )
       )
       return uniqueFoods
}