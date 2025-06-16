import { createSlice } from "@reduxjs/toolkit";
import { IUserSlice } from "../../services/types/sharedTypes";

const initialState: IUserSlice = {
    isUserLogged : false,
    userName: '',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers : {
        setUserLogged (state, action) {
            state.isUserLogged = action.payload;
        },
        setUserName (state, action) {
            state.userName = action.payload;
        },
    }
})

export const { setUserLogged, setUserName } = userSlice.actions;

export default userSlice.reducer;