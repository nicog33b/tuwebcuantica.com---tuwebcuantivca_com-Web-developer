import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <section className='overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <Link href='/directContact'>
        <div className='border-2 border-gray-300 hover:border-gray-400 text-center p-5 cursor-pointer hover:bg-gray-100'>
          <div className='inline-block w-full h-56 relative mb-4'>
            <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h3>
          <p className='text-gray-700'>{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default ServiceCard;
