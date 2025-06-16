import { createSlice } from "@reduxjs/toolkit";
import { IUserDatabase } from "../../services/types/sharedTypes";

const initialState: IUserDatabase = {
      id: 0,
      customRecipes: [],
      intakeHistory: []
}

const userDatabaseSlice = createSlice({
    name: 'userDatabaseSlice',
    initialState: initialState,
    reducers : {
        setUserId (state, action) {
           state.id = action.payload
        },
        setUserRecipes (state, action) {
           state.customRecipes = action.payload
        },
        setUserIntakeHistory (state, action) {
           state.intakeHistory = action.payload
        }
    }
})

export const { setUserId, setUserRecipes, setUserIntakeHistory } = userDatabaseSlice.actions;

export default userDatabaseSlice.reducer;