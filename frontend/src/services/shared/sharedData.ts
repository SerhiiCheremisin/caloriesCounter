import { IUserDefaultData } from "../types/sharedTypes"

export const userDataDefaultState:IUserDefaultData = {
       userName: "",
       userPassword: ""
}

// URL is not secure sensitive, so i won't be hiding it
export const userRoute:string = "http://localhost:5000/api/users"
export const databaseRoute:string = "http://localhost:5000/api/database"

export const sessionVar:string = "caloriesAppUser"