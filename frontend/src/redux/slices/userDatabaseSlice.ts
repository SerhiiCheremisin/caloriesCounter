import { createSlice } from "@reduxjs/toolkit";
import { IUserDatabase } from "../../services/types/sharedTypes";

const initialState: IUserDatabase = {
      id: 0,
      calories_limit: 0,
      custom_recipes: [],
      intake_history: []
}

const userDatabaseSlice = createSlice({
    name: 'userDatabaseSlice',
    initialState: initialState,
    reducers : {
        setUserId (state, action) {
           state.id = action.payload
        },
        setUserRecipes (state, action) {
           state.custom_recipes = action.payload
        },
        setUserIntakeHistory (state, action) {
           state.intake_history = action.payload
        },
        setUserCaloriesLimit (state, action) {
           state.calories_limit = action.payload
        }
    }
})

export const { setUserId, setUserRecipes, setUserIntakeHistory, setUserCaloriesLimit } = userDatabaseSlice.actions;

export default userDatabaseSlice.reducer;