import { configureStore } from '@reduxjs/toolkit';

//reducers
import userSlice from './slices/userSlice'
import hiddenMenuSlice from './slices/hiddenMenuSlice'
import userDatabaseSlice from './slices/userDatabaseSlice'


const store = configureStore({
    reducer: {
      user: userSlice,
      hiddenNavigation: hiddenMenuSlice,
      userDatabase: userDatabaseSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;