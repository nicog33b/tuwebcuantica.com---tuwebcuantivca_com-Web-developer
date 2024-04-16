
import './globals.css'
import Head from 'next/head';

//UI
import Navbar from './components/UI/navbar';
import Banner from "./components/UI/banner";
import Footer from './components/UI/footer';

export const metadata = {
  title: 'TuWebCuántica | Líder en Desarrollo Web y Marketing Digital en Uruguay',
  description: 'En TuWebCuántica, transformamos ideas en soluciones digitales innovadoras que capturan y fidelizan a tu audiencia. Especialistas en desarrollo web, software a medida y estrategias de marketing digital adaptadas a las dinámicas del mercado latinoamericano.',
  keywords: 'desarrollo web Uruguay, marketing digital Latinoamérica, software personalizado, SEO local, gestión de redes sociales, comercio electrónico en Uruguay, soluciones TI, optimización de motores de búsqueda, crecimiento empresarial online, expertos en IT en Uruguay, marketing de contenidos efectivo, analítica web avanzada',
  author: 'Nicolás García, @tuweb_cuántica',
  image: 'https://i.ibb.co/DY7YV0g/ultimate-Logo.png',
  url: 'https://www.tuwebcuantica.com',
  type: 'website',
  locale: 'es_UY',
  siteName: 'TuWebCuántica',
  robots: 'index, follow',
  og: {
    title: 'TuWebCuántica | Innovación y Tecnología Digital en Uruguay',
    description: 'Descubre cómo TuWebCuántica lidera la transformación digital en Uruguay con soluciones web personalizadas, desarrollo de software a medida y estrategias de marketing digital creadas para impulsar tu negocio.',
    type: 'website',
    url: 'https://www.tuwebcuantica.com',
    siteName: 'TuWebCuántica',
    image: 'https://i.ibb.co/DY7YV0g/ultimate-Logo.png',
    locale: 'es_UY',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-white'>

      <Navbar></Navbar>

        {children}

        <Footer></Footer>

        </body>

    </html>

  )
}
