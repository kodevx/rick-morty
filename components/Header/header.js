import Image from "next/image";
import Link from "next/link";
import RickyMortyImage from '@/assets/Image/icon-192x192.png';

import NavLinks from '@/components/NavLinks';

const Header = (props) => {

    return (
        <div className="font-grobold flex justify-between items-center border-b-2 border-b-emerald-400 border-solid">
            <div className="text-3xl text-green-600">
                <Link href={'/'}>
                    Rick And Morty
                </Link>
            </div>
            <Image 
                src={RickyMortyImage}
                width={90}
                height={90}
                alt={'header-image'}
            />
            <NavLinks />
        </div>
    )
}

export default Header;