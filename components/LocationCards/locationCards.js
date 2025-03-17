'use client';

import Link from "next/link";

const LocationCards = (props) => {

    const { 
        id,
        name,
        type,
        dimension,
        residents
    } = props;

    return (
        <Link href={`/location/${id}`}>
            <div className="text-grobold cursor-pointer h-72 w-200 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 p-11 flex flex-row shadow-xl">
                <div className="flex-grow self-center ml-10">
                    <div>
                        Name: <span className="group-hover:text-amber-500 transition-all duration-300 tracking-wider">{name}</span>
                    </div>
                    <div>
                        Type: <span className="group-hover:text-green-600 transition-all duration-300 tracking-wider">{type}</span>
                    </div>
                    <div>
                        Dimension: <span className="group-hover:text-green-600 transition-all duration-300 tracking-wider">{dimension}</span>
                    </div>
                    <div>
                        Residents:
                        {residents && residents .length ? (
                            <span className="text-ellipsis group-hover:text-green-600 transition-all duration-300 tracking-wider">
                                {residents.slice(0,20).map((resident, index) => 
                                    `${resident.name}`+
                                    `${residents.length > 20 ? index + 1 === 20 ? '' : ', ' : residents.length === index + 1 ? '' : ', '}`
                                )}
                                {residents.length > 20 ? '...' : '.'}
                            </span>
                        ) : 'none'}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LocationCards;
