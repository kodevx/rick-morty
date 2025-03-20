import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import favouritesReducer from './reducers/favourites';

export const store = configureStore({
    reducer: {
        favourites: favouritesReducer
    }
})

export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
