'use client';
import Image from "next/image";
import RickyMortyImage from '@/assets/Image/icon-192x192.png';

const CharacterCards = (props) => {

    const { 

    } = props;

    return (
        <div className="text-grobold h-72 w-200 ease-in-out group group-hover:translate-x-1 transition-all duration-300 hover:scale-105 p-11 flex flex-row shadow-xl">
            <div className="self-center">
                <Image 
                    src={RickyMortyImage}
                    width={250}
                    height={200}
                    alt={'name'}
                />
            </div>
            <div className="flex-grow self-center ml-10">
                <div>{"Name: Morty Smith"}</div>
                <div>{"Species: Morty Smith"}</div>
                <div>{"Gender: Morty Smith"}</div>
                <div>{"Origin: Morty Smith"}</div>
                <div>{"Location: Morty Smith"}</div>
            </div>
        </div>
    )
}

export default CharacterCards;
