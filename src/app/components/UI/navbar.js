'use client'
//fundamentals
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//icons
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='top'>
    <div  className="bg-white w-full flex justify-between items-center px-[9%] flex-wrap">
      <Link href="/">
        <Image
          src="/tuweb_logo.png"
          alt="logo"
          width={150}
          height={60}
          className="cursor-pointer"
        />
      </Link>
      <FiMenu
        className="lg:hidden block h-12 w-12 cursor-pointer text-black"
        onClick={() => setOpen(!open)}
      />
      <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
        <ul className="text-base text-white lg:flex lg:justify-between">

        <Link href="/"  className='text-black'>
          <li className="lg:px-5 py-2 hover:text-gray-300  font-serif cursor-pointer text-xl">
          Inicio
          </li>
          </Link>


          <Link href="/#service" className='text-black'>
          <li className="lg:px-5 py-2 hover:text-white cursor-pointer font-serif text-xl">
            Servicios
          </li>
          </Link>

    

          <Link href="/#galeria"  className='text-black'>
          <li className="lg:px-5 py-2 hover:text-white cursor-pointer font-serif text-xl  ">
          Galeria
          </li>
          </Link>


          <Link href="/#contacto"  className='text-black'>
          <li className="lg:px-5 py-2 hover:text-white cursor-pointer font-serif text-xl  ">
            Contacto
          </li>
          </Link>

          <Link href="/#technology"  className='text-black'>
          <li className="lg:px-5 py-2 hover:text-white cursor-pointer font-serif text-xl  ">
            Tecnologías
          </li>
          </Link>


          <Link href="/directContact" className='hover:text-[#faf8c8] font-serif text-[#ffeb3b] '>
          <li className="py-1 px-1 lg:px-2 lg:py-2  rounded-xl font-bold text-xl bg-[#040d3e] cursor-pointer lg:w-full mb-2 sm:w-[15rem] hover:font-bold">
          ESTIMAR PROYECTO
          </li>
          </Link>



        </ul>
      </nav>
    </div>
    </section>
  );
};

export default Navbar;
