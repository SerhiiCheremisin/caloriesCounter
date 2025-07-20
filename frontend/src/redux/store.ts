import { configureStore } from '@reduxjs/toolkit';

//reducers
import userSlice from './slices/userSlice'
import hiddenMenuSlice from './slices/hiddenMenuSlice'
import userDatabaseSlice from './slices/userDatabaseSlice'
import foodIntake from './slices/foodIntakes'

const store = configureStore({
    reducer: {
      user: userSlice,
      hiddenNavigation: hiddenMenuSlice,
      userDatabase: userDatabaseSlice,
      foodIntake: foodIntake
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;