import { JSX } from "react"

//Redux and local states
export interface IUserSlice {
       isUserLogged : boolean,
       userName: string,
}

export interface IHiddenMenuStatus {
       isMenuHidden : boolean,
}

export interface IUserDatabase {
      id: number,
      customRecipes: [],
      intakeHistory: []
}

export interface ICustomDatabase extends IUserDatabase {
     username: string
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

export type userLogType = "new" | "old"

