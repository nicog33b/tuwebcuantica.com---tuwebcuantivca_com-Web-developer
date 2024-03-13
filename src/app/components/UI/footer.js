import Link from 'next/link';

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
 
const Footer = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP; 
  return (
    <footer className="bg-white">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">

            <a className="block md:mx-auto mb-5 max-w-max">
              <svg
                className="h-8"
                id="logo-78"
                width="175"
                height="40"
                viewBox="0 0 175 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
             >
              
              </svg>
              <svg
                className="h-8"
                id="logo-78"
                width="175"
                height="40"
                viewBox="0 0 175 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              
              </svg>
            </a>
   
            <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6 sm:text-center ">
            <div className="w-full md:w-auto p-3 md:px-6 text-center">
              <a href="/" className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                Inicio
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6 text-center">
              <a href="/#service" className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                Servicios
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6 text-center">
              <a href="/#galeria" className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                Galeria
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6 text-center">
              <a href="/#contacto" className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                Contacto
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6 text-center">
              <a href="/#technology" className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                Tecnologías
              </a>
            </div>
          </div>

          {/*Social medias, redes sociales*/}

          <div className="flex justify-center space-x-5 mt-3 mt- 5¡'0 ">


          <Link href="https://www.facebook.com/tuwebcuantica.uy" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
  <FaFacebook className="text-blue-500 h-6 w-6" />
</Link>
<Link href="https://www.instagram.com/tuweb_cuantica/" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F' }}>
  <FaInstagram className="text-purple-600 h-6 w-6" />
</Link>


<Link href={`https://wa.me/${whatsappNumber}?text=Hola,%20%20Quisiera%20obtener%20más%20información.`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
  <FaWhatsapp className="text-green-500 h-6 w-6" />
</Link>



          </div>
         
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2023 tuwebcuantica.com All rights reserved.
        </p>
      </div>  
    </footer>
  );
};

export default Footer;
