
'use client';

import { useParams } from 'next/navigation';                
import useCharacter from '@/customHooks/Character/useCharacter';

import GET_CHARACTER_DETAILS_QUERY from '@/queries/getCartoonCharacter.graphql';

const Character = (props) => {

    const { id } = useParams();

    const {
        isLoading,
        characterDetails
    } = useCharacter({
        id,
        queries: {
            getCharacterDetailsQuery: GET_CHARACTER_DETAILS_QUERY
        }
    });

    console.log("Character: ",characterDetails);

    return (
        <div>
            <Image 
                src={}
                height={}
                width={}
                alt={''}
            />
        </div>
    )
}

export default Character;
