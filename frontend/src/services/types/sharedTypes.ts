import { JSX } from "react"

//Redux and local states
export interface IUserSlice {
       isUserLogged : boolean,
       userName: string,
}

export interface IHiddenMenuStatus {
       isMenuHidden : boolean,
}

// need to make a better typing
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

export interface IImageLinkProps {
  src: string,
  alt?: string,
  to?: string,
  width?: string,
  height?: string
}

export type userLogType = "new" | "old"

