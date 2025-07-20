import { createSlice } from "@reduxjs/toolkit";
import { combinedIntakeStateType } from "../../services/types/sharedTypes";


const initialState: combinedIntakeStateType = {
    meal: '',
    weight: '',
    allFood: [],
    isMealHasChosen: false
}

const foodIntakes = createSlice({
    name: 'foodIntake',
    initialState: initialState,
    reducers : {
        setMeal (state, action) {
           state.meal = action.payload; 
        },
        setMealWeight (state, actions) {
          state.weight = actions.payload
        },
        setAllFood (state, actions) {
            state.allFood = actions.payload
        },
        setMealBeenChosen (state, actions) {
            state.isMealHasChosen = actions.payload
        }
    }
})

export const { setMeal, setMealWeight, setAllFood, setMealBeenChosen } = foodIntakes.actions;

export default foodIntakes.reducer;