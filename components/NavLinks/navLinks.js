'use client';
import Link from "next/link";

const NavLinks = (props) => {

    return (
        <div className="text-amber-500 text-xl tracking-wider">
            <Link href="/episodes" className="pr-10 hover:text-amber-600 transition-all duration-200 active:text-amber-700">
                Episodes
            </Link>
            <Link href="/locations" className="hover:text-amber-600 transition-all duration-200 active:text-amber-700">
                Locations
            </Link>
        </div>
    )
}

export default NavLinks;
