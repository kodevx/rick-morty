'use client'

import GET_LOCATION_BY_ID_QUERY from '@/queries/getLocationById.graphql';
import { useParams } from 'next/navigation';
import useLocationId from '@/customHooks/Location/useLocationId';

const Location = props => {

    const { id } = useParams();

    const { 
        location,
        isLoading
    } = useLocationId({
        id,
        queries: {
            getLocationByIdQuery: GET_LOCATION_BY_ID_QUERY
        }
    });

    if(isLoading && !location) {
        return (
            'loading ...'
        )
    }

    console.log("location: ",location);

    const isDimensionUnknown = 
        location && location.dimension 
            ? location.dimension 
            : null;

    return (
        <div className='mb-10'>
            <div className='grid grid-cols-3 gap-10 font-grobold z-10'>
                <div className='flex flex-col px-9 py-8 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 shadow-xl rounded-lg'>
                    <div className='flex justify-center tracking-wider text-xl group-hover:text-amber-500 mb-5 pb-2 border-b-2 border-b-emerald-400'>
                        Location
                    </div>
                    <div className='pb-1'>Name : <span className='group-hover:text-green-600 tracking-wider'>{location?.name}</span></div>
                    <div className='pb-1'>Dimension : <span className={isDimensionUnknown ? 'group-hover:text-red-600 tracking-wider' : 'group-hover:text-green-600 tracking-wider'}>{location?.dimension}</span></div>
                    <div className='pb-1'>Type : <span className='group-hover:text-green-600 tracking-wider'>{location?.type}</span></div>
                </div>
                <div className='flex flex-col col-span-full px-9 py-8 ease-in-out shadow-xl rounded-lg'>
                    <div className='flex justify-center tracking-wider text-xl hover:text-amber-500 mb-5 pb-2 border-b-2 border-b-emerald-400'>
                        Residents
                    </div>
                    <div className={`grid grid-cols-3 gap-8 ${location && location.residents && location.residents.length < 3 ? 'h-auto' : 'h-125'} p-8 overflow-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-amber-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-400 [&::-webkit-scrollbar-thumb]:rounded-full`}>
                        {location && 
                         location.residents && 
                         location.residents.length > 0 && 
                         location.residents.map(resident => (
                            <div key={location.id} className='flex flex-col px-9 py-8 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 shadow-xl rounded-lg'>
                                <div className='pb-1'>Name : <span className='group-hover:text-green-600 tracking-wider'>{resident.name}</span></div>
                                <div className='pb-1'>Gender : <span className='group-hover:text-green-600 tracking-wider'>{resident.gender}</span></div>
                                <div className='pb-1'>Species : <span className='group-hover:text-green-600 tracking-wider'>{resident.species}</span></div>
                                <div className='pb-1'>Status : <span className='group-hover:text-green-600 tracking-wider'>{resident.status}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;
