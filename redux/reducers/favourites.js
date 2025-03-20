import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteCharacters: []
}

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites: (state, action) => {
            console.log("addToFavourites invoked");
            state.favouriteCharacters.push(action.payload);
        },
        removeFromFavourites: (state, action) => {
            state.favouriteCharacters = state.favouriteCharacters.filter(id => id !== action.payload);
        }
    }
});

export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
