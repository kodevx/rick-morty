'use client'

import Image from "next/image";
import Link from "next/link";

const Episode = (props) => {

    const {
        id,
        name,
        air_date,
        episode,
        characters
    } = props;

    return (
        <div className="flex flex-col mb-10 p-15 h-145 w-230 shadow-2xl group group-hover:translate-x-1 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col tracking-wider pb-2">
                <div className="text-2xl pb-2 mb-4 border-b-2 border-green-500 group-hover:text-green-500">
                    {name}
                </div>
                <div>Air date: <span>{air_date}</span></div>
                <div>Episode: <span>{episode}</span></div>
            </div>
            <div className="flex flex-col p-5 shadow-xl tracking-wider">
                <div className="flex justify-center pb-2 border-b-2 border-green-400 mb-3">
                    {'Characters'}
                </div>
                <div className="grid grid-cols-6 gap-5 p-6 h-65 scroll scroll-smooth overflow-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-amber-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {characters.map(({ id, image, name }) => (
                        <Link key={id} href={`/character/${id}`} className="flex flex-col items-center group group-hover:translate-x-1 transition-all duration-200 hover:scale-105">
                            <Image 
                                src={image}
                                className={"rounded-4xl"}
                                width={90}
                                height={90}
                                alt={'name'}
                            />
                            <div className="tracking-wider">
                              {name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Episode;
