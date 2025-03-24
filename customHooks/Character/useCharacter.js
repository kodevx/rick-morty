'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';

const useCharacter = props => {

    const { 
        id,
        queries
    } = props;
    
    const { getCharacterDetailsQuery } = queries;

    const [characterDetails, setCharacterDetails] = useState(null);

    const { loading: isLoading, error, isCalled } = useQuery(getCharacterDetailsQuery, {
        variables: { id },
        onCompleted: (data) => {
            if(
                data && 
                data.character && 
                Object.keys(data.character)
            ){
                setCharacterDetails(data.character);
            }
        }
    });

    return {
        isLoading,
        isCalled,
        characterDetails
    }
}

export default useCharacter;