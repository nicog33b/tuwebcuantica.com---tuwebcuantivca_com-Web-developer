'use client'

import React from "react";
import ServiciosHome from "./components/Home/servicios/servicios";
import Working from "./components/Home/working/working";
import Jobs from "./components/Home/jobs/jobs";
import ContactForm from "./components/Home/contact/contact";
import SubscribeSection from "./components/Home/suscribe/suscribe";
import Portfolio from "./components/Home/portfolio/portfolio";
import { SlArrowUpCircle } from "react-icons/sl";


const Home = () => {
  return (
   <section id='home' className='relative bg-white'>
   
   <ServiciosHome></ServiciosHome>
   <Portfolio/>
   <ContactForm></ContactForm>
   <Working></Working>
   <a href="/" aria-label="Scroll down" className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
          <SlArrowUpCircle className='w-12 h-12 text-black' />

          </a>

   </section>
  );
}

export default Home;
