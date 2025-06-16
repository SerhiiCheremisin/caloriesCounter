import React, { JSX, useState } from 'react'
import { AppForm, AppButton } from '../styles/sharedStyles'
import { dynamicKeyFormHandler } from '../services/functions/sharedFunctions'
import { useCommonDispatch } from  '../services/hooks/useCommonDispatch'
import { setUserLogged, setUserName } from '../redux/slices/userSlice'
import { userDataDefaultState } from '../services/shared/sharedData'
import { ICustomDatabase, IUserDataFromStorage } from '../services/types/sharedTypes'
import { setUserToSessionVal } from '../services/functions/sessionStorageFunctions'
import { addNewUser, checkUserToExist, getOneUser, addNewCustomDatabase, findOneUserFromCustomDatabase } from '../services/functions/databaseHandler'
import { setUserId, setUserRecipes, setUserIntakeHistory } from '../redux/slices/userDatabaseSlice'

export default function LogInPage():JSX.Element {
  const [userData, setUserData] = useState( userDataDefaultState )
  const dispatch = useCommonDispatch()

  const passThroughLogin = ():void => {
        const data : Promise<ICustomDatabase> = findOneUserFromCustomDatabase(userData.userName)
        data.then( (feedback:ICustomDatabase ) => {
        dispatch(setUserId(feedback.id))
        dispatch(setUserRecipes(feedback.customRecipes))
        dispatch(setUserIntakeHistory(feedback.intakeHistory))
        setUserToSessionVal(userData.userName)
        dispatch(setUserName(userData.userName))
        dispatch(setUserLogged(true))
        setUserData(userDataDefaultState)
        })
  }

  const formHandler = async (e:React.FormEvent<HTMLFormElement> ):Promise<void> => {
    e.preventDefault()
     const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement
     const userTypeFromButton = submitter?.getAttribute('data-usertype')
     const isUserExist = await checkUserToExist(userData.userName)
    
     if (userTypeFromButton === "new") {
        if (isUserExist === true) {
          alert("Such user is already exist")
          return
        }
       const userIsAdded = addNewUser(userData.userName, userData.userPassword)
       const databaseIsFilled = addNewCustomDatabase(userData.userName)
       Promise.all([userIsAdded, databaseIsFilled])
       .then( () => {
           passThroughLogin()
      })
       return
        }
      if (isUserExist === false) {
        alert("Such user is not exist")
        return
      }
      const user : IUserDataFromStorage  = await getOneUser(userData.userName)  
      if (user.password === userData.userPassword) { 
          passThroughLogin()
          return
      }
      alert("Your password is incorrect")
      return      
  }

  return (
    <AppForm data-testid='login-form' onSubmit={(e) => formHandler(e)}>
     <label htmlFor="userName">Type your name</label>
     <input id='userName' type="text" required={true} onChange={(e:React.ChangeEvent<HTMLInputElement>) => dynamicKeyFormHandler("userName", e.target.value, userData, setUserData) } />
     <label htmlFor="userPassword">Type your password</label>
     <input id='userPassword' type="password" required={true} onChange={(e:React.ChangeEvent<HTMLInputElement>) => dynamicKeyFormHandler("userPassword", e.target.value, userData, setUserData) } />
     <div style={{display: "flex", width: "80%", justifyContent : "space-around" }}>
      <AppButton  data-usertype="old" type='submit'> Login </AppButton>
      <AppButton  data-usertype="new" type='submit'> Create a new user </AppButton>
     </div> 
    </AppForm>
  )
}
