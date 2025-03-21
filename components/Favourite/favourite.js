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
            styles={'cursor-pointer'}
        >
            <div>
                {isFavourite ? (
                    <div className={'heart'} />
                ) : (
                    <div className={'heartGrey'} />
                )}     
            </div>       
        </Button>
    )
}

export default Favourite;