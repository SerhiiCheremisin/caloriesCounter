import { createSlice } from "@reduxjs/toolkit";
import { IHiddenMenuStatus } from "../../services/types/sharedTypes";

const initialState: IHiddenMenuStatus = {
    isMenuHidden: false
}

const hiddenMenuSlice = createSlice({
    name: 'hiddenMenuSlice',
    initialState: initialState,
    reducers : {
        setNavigationStatus (state, action) {
           state.isMenuHidden = action.payload; 
        }
    }
})

export const { setNavigationStatus } = hiddenMenuSlice.actions;

export default hiddenMenuSlice.reducer;