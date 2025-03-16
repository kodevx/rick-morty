
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
    } = characterDetails || {};

    console.log("Character: ",characterDetails);

    let isDimensionUnknown = !!(location && location.dimension === 'unknown');

    return (
        <div className='mb-10'>
            <div className={'flex justify-center mb-10'}>
                <Image 
                    src={image}
                    height={320}
                    width={320}
                    className={'p-2 border-3 border-amber-600 rounded-[200px]'}
                    alt={`${name}-image`}
                />
            </div>
            <div className='grid grid-cols-3 gap-10 font-grobold z-10'>
                <div className='flex flex-col px-9 py-8 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 shadow-xl rounded-lg'>
                    <div className='flex justify-center tracking-wider text-xl group-hover:text-amber-500 mb-5 pb-2 border-b-2 border-b-emerald-400'>
                        Character Info
                    </div>
                    <div className='pb-1'>Name : <span className='group-hover:text-green-600 tracking-wider'>{name}</span></div>
                    <div className='pb-1'>Gender : <span className='group-hover:text-green-600 tracking-wider'>{gender}</span></div>
                    <div className='pb-1'>Species : <span className='group-hover:text-green-600 tracking-wider'>{species}</span></div>
                    <div className='pb-1'>Status : <span className='group-hover:text-green-600 tracking-wider'>{status}</span></div>
                </div>
                <div className='flex flex-col px-9 py-8 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 shadow-xl rounded-lg'>
                    <div className='flex justify-center tracking-wider text-xl group-hover:text-amber-500 mb-5 pb-2 border-b-2 border-b-emerald-400'>
                        Location
                    </div>
                    <div className='pb-1'>Name : <span className='group-hover:text-green-600 tracking-wider'>{location?.name}</span></div>
                    <div className='pb-1'>Dimension : <span className={isDimensionUnknown ? 'group-hover:text-red-600 tracking-wider' : 'group-hover:text-green-600 tracking-wider'}>{location?.dimension}</span></div>
                    <div className='pb-1'>Type : <span className='group-hover:text-green-600 tracking-wider'>{location?.type}</span></div>
                </div>
                <div className='flex flex-col px-9 py-8 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 shadow-xl rounded-lg'>
                    <div className='flex justify-center tracking-wider text-xl group-hover:text-amber-500 mb-5 pb-2 border-b-2 border-b-emerald-400'>
                        Origin
                    </div>
                    <div className='pb-1'>Name : <span className='group-hover:text-green-600 tracking-wider'>{origin?.name}</span></div>
                    <div className='pb-1'>Dimension : <span className='group-hover:text-green-600 tracking-wider'>{origin && origin.dimension ? origin.dimension : 'unknown'}</span></div>
                    <div className='pb-1'>Type : <span className='group-hover:text-green-600 tracking-wider'>{origin && origin.type ? origin.type : 'unknown'}</span></div>
                    <div className='pb-1'>Status : <span className='group-hover:text-green-600 tracking-wider'>{status}</span></div>
                </div>
                <div className='flex flex-col col-span-full px-9 py-8 ease-in-out shadow-xl rounded-lg'>
                    <div className='flex justify-center tracking-wider text-xl hover:text-amber-500 mb-5 pb-2 border-b-2 border-b-emerald-400'>
                        Episodes
                    </div>
                    <div className={`grid grid-cols-3 gap-8 ${episode && episode.length < 3 ? 'h-auto' : 'h-125'} p-8 overflow-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-amber-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-400 [&::-webkit-scrollbar-thumb]:rounded-full`}>
                        {episode && 
                         episode.length > 0 && 
                         episode.map(episode => (
                            <div key={episode.id} className='flex flex-col px-9 py-8 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 shadow-xl rounded-lg'>
                                <div className='pb-1'>Name : <span className='group-hover:text-green-600 tracking-wider'>{episode?.name}</span></div>
                                <div className='pb-1'>Episode : <span className='group-hover:text-green-600 tracking-wider'>{episode?.episode}</span></div>
                                <div className='pb-1'>Air Date : <span className='group-hover:text-green-600 tracking-wider'>{episode?.air_date}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character;
