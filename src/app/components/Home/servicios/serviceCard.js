// ServiceCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <section className='cardService'>
      <Link href='/directContact'>
    <div  className='border-2 border-solid border-color-grey text-center py-12 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in-duration-200 hover:bg-[#f8f5f5] mr-3 ml-3'>
      <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
        <Image className='h-full w-full' src={imageSrc} alt={title} width='600' height='600' />
      </div>
      <h3 className='text-xl font-bold py-4 text-black select-none'>{title}</h3>
      <p className='leading-relaxed text-black select-none'>{description}</p>
    </div>
    </Link>
    </section>


  );
};

export default ServiceCard;