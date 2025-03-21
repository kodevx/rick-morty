import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from './reducers/favourites';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore, 
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
    key: 'root',
    storage,
}

// Add Other Reducers in future cases
const rootReducers = combineReducers({  
    favourites: favouritesReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducers);

export const store = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store);

export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
