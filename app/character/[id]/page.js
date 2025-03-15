
'use client';

import { useParams } from 'next/navigation'; 
import Image from 'next/image';               
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

    const { 
        episode,
        gender,
        image,
        location,
        name,
        origin,
        species,
        status,
        type
    } = characterDetails

    console.log("Character: ",characterDetails);

    return (
        <div>
            <Image 
                src={image}
                height={100}
                width={100}
                alt={`${name}-image`}
            />
            <div>
                <div>
                    <div>Basic Details</div>
                </div>
            </div>
        </div>
    )
}

export default Character;
