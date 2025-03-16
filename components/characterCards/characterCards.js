'use client';

import Image from "next/image";
import Link from "next/link";

const CharacterCards = (props) => {

    const { 
        id,
        name,
        gender,
        image,
        origin,
        species,
        location
    } = props;

    return (
        <Link href={`/character/${id}`}>
            <div className="text-grobold cursor-pointer h-72 w-200 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 p-11 flex flex-row shadow-xl">
                    <div className="self-center">
                        <Image 
                            src={image}
                            className={"rounded-4xl"}
                            width={250}
                            height={200}
                            alt={'name'}
                        />
                    </div>
                    <div className="flex-grow self-center ml-10">
                        <div>
                            Name: <span className="group-hover:text-amber-500 transition-all duration-300 tracking-wider">{name}</span>
                        </div>
                        <div>
                            Species: <span className="group-hover:text-green-600 transition-all duration-300 tracking-wider">{species}</span>
                        </div>
                        <div>
                            Gender: <span className="group-hover:text-green-600 transition-all duration-300 tracking-wider">{gender}</span>
                        </div>
                        <div>
                            Origin: <span className="group-hover:text-green-600 transition-all duration-300 tracking-wider">{origin.name}</span>
                        </div>
                        <div>
                            Location: <span className="group-hover:text-green-600 transition-all duration-300 tracking-wider">{location.name}</span>
                        </div>
                    </div>
            </div>
        </Link>
    )
}

export default CharacterCards;
