import { JSX } from "react"

//Redux and local states
export interface IUserSlice {
       isUserLogged : boolean,
       userName: string,
}

export interface IHiddenMenuStatus {
       isMenuHidden : boolean,
}

interface IMeal {
          allFood: IDefaultFoodDatabase[], 
          isMealHasChosen: boolean
}

export type combinedIntakeStateType = ISingleMeal & IMeal

// need to make a better typing
export interface IUserDatabase {
      id: number,
      customRecipes: [],
      intakeHistory: []
}

export interface ICustomDatabase extends IUserDatabase {
     username: string
}

export interface ISingleFood {
       dish: string,
       proteins: string,
       carbs: string,
       fats: string
}

export interface ISingleMeal {
       meal: string,
       weight: string,
}

//other
export interface IRoutes {
       path: string
       element: JSX.Element
       name:string,
       angle: number
}

export interface IUserDefaultData {
       userName: string,
       userPassword: string
}

export interface ISessionStorageUnit {
       userName: string,
}

export interface IUserDataFromStorage {
       username:string,
       password: string
       id: number
}

export interface IImageLinkProps {
  src: string,
  alt?: string,
  to?: string,
  width?: string,
  height?: string
}

export type userLogType = "new" | "old"


export interface IDefaultFoodDatabase {
       name_en: string,
       name_ua: string,
       proteins: number,
       fats: number,
       carbs: number,
       kcal: number,
       id: string | number
}
