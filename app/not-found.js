'use client'
import Link from 'next/link';
import Image from 'next/image';
import NotFoundImage from '@/assets/Image/image_404_2.png';

export default function NotFound() {
  return (
    <div className='flex justify-center items-center flec-col'>
      <Image 
        src={NotFoundImage}
        width={100}
        height={100}
        alt={'404_not_found'}
        className={''}
      />
      <Link href="/">Return Home</Link>
    </div>
  )
}
