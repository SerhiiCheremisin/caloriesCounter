import { IUserDefaultData, ISingleFood, ISingleMeal, IDefaultFoodDatabase } from "../types/sharedTypes"

export const userDataDefaultState:IUserDefaultData = {
       userName: "",
       userPassword: ""
}

export const defaultFoodState:ISingleMeal = {
       meal: '',
       weight: ''
}

export const defaultEmptyFood:IDefaultFoodDatabase = {
       name_en: "",
       name_ua: "",
       proteins: 0,
       fats: 0,
       carbs: 0,
       kcal: 0,
       id: 0
}

// URL is not secure sensitive, so i won't be hiding it
export const userRoute:string = "http://localhost:5000/api/users"
export const databaseRoute:string = "http://localhost:5000/api/database"

export const sessionVar:string = "caloriesAppUser"