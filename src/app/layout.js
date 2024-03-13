
import './globals.css'
import Head from 'next/head';

//UI
import Navbar from './components/UI/navbar';
import Banner from "./components/UI/banner";
import Footer from './components/UI/footer';

export const metadata = {
  title: 'TuWebCuantica | Desarrollo Web, Software y Marketing Digital',
  description: 'Creamos soluciones web a medida, desarrollamos software innovador e impulsamos tu negocio con estrategias de marketing digital efectivas.',
  keywords: 'agencia web, diseño web, desarrollo web, software a medida, marketing digital, SEO, SEM, redes sociales, marketing de contenidos, comercio electrónico, aplicaciones web, plataformas web, gestión de proyectos, análisis de datos, resultados tangibles, crecimiento online, servicios digitales, Uruguay, Latinoamérica, expertos en desarrollo web, estrategias de marketing efectivas.',
  author: 'Nicolás García, @tuweb_cuantica',
  image: 'https://i.ibb.co/TP427vY/tuweb-logo.png',
  url: 'https://www.tuwebcuantica.com',
  type: 'website',
  locale: 'es_UY',
  siteName: 'TuWebCuantica',
  robots: 'index, follow', //
  og: {
    title: 'TuWebCuantica | Desarrollo Web, Software y Marketing Digital',
    description: 'Impulsamos tu negocio con soluciones web a medida, software innovador y estrategias de marketing digital efectivas.',
    type: 'website',
    url: 'https://www.tuwebcuantica.com',
    siteName: 'TuWebCuantica',
    image: 'https://i.ibb.co/TP427vY/tuweb-logo.png',
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
