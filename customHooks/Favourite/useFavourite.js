'use client';

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addToFavourites, removeFromFavourites } from "@/redux/reducers/favourites";

const useFavourite = ({ id }) => {

    const { favouriteCharacters } = useAppSelector(state => state.favourites);
    const dispatch = useAppDispatch();

    const isFavourite = !!(
        favouriteCharacters.includes(id)
    );

    const handleFavourite = useCallback(
        (id) => {
            console.log("id: ",id)
            if(isFavourite) {
                dispatch(removeFromFavourites(id));
            } else {
                dispatch(addToFavourites(id));
            }
        },
        [
            dispatch,
            isFavourite
        ]
    );

    console.log("favouriteCharacters: ",favouriteCharacters);

    return {
        isFavourite,
        handleFavourite
    }
}

export default useFavourite;
