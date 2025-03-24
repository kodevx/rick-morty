'use client'
import Link from 'next/link';
import Image from 'next/image';
import NotFoundImage from '@/assets/Image/image_404_2.png';

export default function NotFound() {
  return (
    <div className='flex justify-center font-grobold'>
      <div className='flex flex-col justify-center items-center'>
        <Image 
          src={NotFoundImage}
          width={500}
          height={500}
          alt={'404_not_found'}
        />
        <Link href="/">
          <button className='mt-10 p-5 rounded-3xl text-lg text-white bg-green-500 hover:text-green-500 hover:bg-white shadow-2xl transition-all duration-300'>
            Hatch to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
