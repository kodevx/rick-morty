import React from 'react';
import Button from '@/components/Button';
import useFavourite from '@/customHooks/Favourite/useFavourite';

const Favourite = props => {

    const {
        isFavourite,
        handleFavourite
    } = useFavourite({
        ...props
    });

    return (
        <Button
            isDisabled={false}
            handleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleFavourite(props.id);
            }}
            styles={'text-sm h-10 w-10 self-center hover:border-2 hover:border-red-600 cursor-pointer disabled:bg-gray-300 disabled:text-white active:shadow-none text-white bg-white shadow-lg shadow-red-200 transition-all duration-300 rounded-2xl'}
        >
            {isFavourite ? (
                <div className={'heart'} />
            ) : (
                <div className={'heartGrey'} />
            )}            
        </Button>
    )
}

export default Favourite;