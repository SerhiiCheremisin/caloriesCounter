import { IUserDataFromStorage, ICustomDatabase, IEatenMeal } from "../types/sharedTypes";
import { userRoute, databaseRoute } from "../shared/sharedData";
import axios from 'axios';

// Users 
export const addNewUser = async (
       userName: string,
       userPassword: string
     ): Promise<any> => {
       try {
         const response = await axios.post(userRoute, {
           username: userName,
           password: userPassword,
         });
         return response.data;
       } catch (error) {
         console.error('Failed to add user:', error);
         throw error
       }
};

export const checkUserToExist = async (userName: string):Promise<boolean> => {
       try {
         const data: IUserDataFromStorage[] = await getAllUsers()
         return data.some((el: IUserDataFromStorage) => String(el.username).toLowerCase() === String(userName).toLowerCase()
    )
       } catch (error) {
         console.error('Failed to load user:', error)
         return false
       } 
}

export const getOneUser = async (userName:string):Promise<IUserDataFromStorage> => {
       try {
          const request : IUserDataFromStorage[] = await getAllUsers()
          const returnValue : IUserDataFromStorage[] =  request.filter( (element:IUserDataFromStorage ) => 
                element.username === userName )
          if (returnValue.length === 1) {
              return returnValue[0]
          }
          throw "We have some database error"
       } catch (error) {
         console.error('Failed to load user:', error)
         throw error
       } 
}

export const getAllUsers = async (): Promise<IUserDataFromStorage[]> => {
       try {
         const request = await axios.get(userRoute)
         return request.data
       } catch (error) {
          console.error('Failed to call the list of users:', error)
          throw error
       }   
}

// Recipes & Intakes

export const addNewCustomDatabase = async (userName: string):Promise<any> => {
       try {
         const response = await axios.post(databaseRoute, {username: userName});
         return response.data;
       } catch (error) {
         console.error('Failed working with the database:', error)
         throw error
       }
}

export const findAllUserFromCustomDatabase = async ():Promise<any> => {
       try {
         const request = await axios.get(databaseRoute)
         return request.data
       } catch (error) {
        console.error('Failed get the data from the database:', error)
        throw error
       }
}

export const findOneUserFromCustomDatabase = async (userName: string): Promise<ICustomDatabase> => {
       try {
        const databaseRequest:ICustomDatabase[] = await findAllUserFromCustomDatabase()
        const returnValue = databaseRequest.filter( (element: ICustomDatabase) => element.username === userName)
        if (returnValue.length === 1) {
         return returnValue[0]
        }
        throw "We have some database error"
       } catch (error) {
        console.error('Failed get the data from the database:', error)
        throw error
       }
}

export const sendOneNewEatenMeal = async (username:string, meal:IEatenMeal):Promise<IEatenMeal> => {
       try {
          const request = await findOneUserFromCustomDatabase(username)
          const getId = await getOneUser(username)
          const newDataToSend = { ...request, intake_history: [...request.intake_history, meal] }
          const updateData = await axios.put(`${databaseRoute}/${getId.id}`, newDataToSend)
          return updateData.data   
       }
       catch (error) {
       console.error('Failed send data to the database:', error)
       throw error
       }
}