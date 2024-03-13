'use client'
import React from "react";
import Slider from "react-slick";
import {
    FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "../sectionTitle";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,  // Muestra 3 elementos a la vez
    slidesToScroll: 2,
    centerMode: true,  // Centra el slide activo
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,  // Ajusta el número de slides para dispositivos pequeños
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const technologies = [
    { icon: <FaHtml5 className='h-9 w-9' />, text: 'HTML' },
    { icon: <FaCss3 className='h-9 w-9'/>, text: 'CSS' },
    { icon: <FaJs className='h-9 w-9'/>, text: 'JavaScript' },
    { icon: <SiTailwindcss className='h-9 w-9' />, text: 'Tailwind CSS' },
    { icon: <FaBootstrap className='h-9 w-9' />, text: 'Bootstrap' },
    { icon: <FaReact className='h-9 w-9'/>, text: 'React' },
    { icon: <TbBrandNextjs className='h-9 w-9'/>, text: 'Next.js' },
    { icon: <FaNodeJs className='h-9 w-9'/>, text: 'Node.js' },
    { icon: <SiMongodb className='h-9 w-9'/>, text: 'MongoDB' },
    { icon: <GrMysql className='h-9 w-9'/>, text: 'MySQL' },
    { icon: <FaJava className='h-9 w-9'/>, text: 'Java' },
  ];

  return (
    <section id="technology" className="mt-12 mb-6   ">
    <div className='bg-gradient-to-br from-[#030a35] via-blue-[#1e2760] to-[#fff0f0] text-center mt-3 mb-12 border-t-2 border-b-2 border-black shadow-sm rounded-sm pb-12 rounded-br-3xl rounded-bl-3xl'>
     <SectionTitle titulo='Nuestras tecnologías' textColorClass='text-white'></SectionTitle>

    <Slider {...settings} className="mx-auto mt-9 mb-9 ]">
      {technologies.map((tech, index) => (
        <div key={index} className="text-center font-serif p-6 bg-white hover:bg-slate-100 shadow-md rounded-md text-black mb-6 border-2 border-black ">
          {tech.icon}
          <h3 className="text-2xl font-semibold mt-2 text-black">{tech.text}</h3>
        </div>
      ))}
    </Slider>
    </div>
    </section>
  );
}
