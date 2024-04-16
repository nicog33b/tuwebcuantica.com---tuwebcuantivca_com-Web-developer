'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Iconos para abrir y cerrar el menú

const Aside = ({ open, closeMenu }) => {
  return (
    <aside
    className={`fixed inset-0 z-40 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white h-full w-8/12 shadow-xl lg:hidden`}
    >
      <button
        onClick={closeMenu}
        className="absolute top-0 right-0 p-4"
      >
        <FiX className="text-3xl text-black" />
      </button>
      <nav className="flex flex-col items-start p-5">
  <Link href="/" className="py-2 text-xl font-serif hover:text-gray-300" onClick={closeMenu}>
    Inicio
  </Link>
  <Link href="/#service" className="py-2 text-xl font-serif hover:text-gray-300" onClick={closeMenu}>
    Servicios
  </Link>
  <Link href="/#galeria" className="py-2 text-xl font-serif hover:text-gray-300" onClick={closeMenu}>
    Galeria
  </Link>
  <Link href="/#contacto" className="py-2 text-xl font-serif hover:text-gray-300" onClick={closeMenu}>
    Contacto
  </Link>
  <Link href="/#technology" className="py-2 text-xl font-serif hover:text-gray-300" onClick={closeMenu}>
    Tecnologías
  </Link>
  <Link href="/directContact" className="py-2 px-1 text-xl font-bold bg-[#040d3e] text-[#ffeb3b] hover:text-[#faf8c8] rounded-xl" onClick={closeMenu}>
    ESTIMAR PROYECTO
  </Link>
</nav>

    </aside>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='top'>
      <div className="bg-white w-full flex justify-between items-center px-[9%] flex-wrap">
        <Link href="/">
          <Image src="/ultimateLogo.png" alt="logo" width={150} height={60} className="cursor-pointer" />
        </Link>
        <div className="hidden lg:flex space-x-4">
          <Link href="/" className="text-xl font-serif hover:text-gray-300">Inicio</Link>
          <Link href="/#service" className="text-xl font-serif hover:text-gray-300">Servicios</Link>
          <Link href="/#galeria" className="text-xl font-serif hover:text-gray-300">Galeria</Link>
          <Link href="/#contacto" className="text-xl font-serif hover:text-gray-300">Contacto</Link>
          <Link href="/#technology" className="text-xl font-serif hover:text-gray-300">Tecnologías</Link>
          <Link href="/directContact" className="px-1 text-xl font-bold bg-[#040d3e] text-[#ffeb3b] hover:text-[#faf8c8] rounded-xl">ESTIMAR PROYECTO</Link>
        </div>
        <FiMenu className="lg:hidden block text-3xl text-black cursor-pointer" onClick={() => setOpen(true)} />
        <Aside open={open} closeMenu={() => setOpen(false)} />
      </div>
    </section>
  );
};

export default Navbar;
