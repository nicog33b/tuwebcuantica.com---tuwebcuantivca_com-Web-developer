import React from "react";
import PortfolioCard from './cardPortfolio';
import SectionTitle from "../sectionTitle";
import Swal from "sweetalert2";

const Portfolio = () => {
  const showBenefitsAlert = (type) => {
    let title, beneficios;
  
    if (type === 'inmobiliaria') {
      title = 'Crear una página web inmobiliaria';
      beneficios= `
        <ul>
          <li>Manejo eficiente del inventario inmobiliario. </li>
          <li>Control detallado de gastos y ganancias. </li>
          <li>Optimización para atraer más clientes potenciales. </li>
          <li>Interfaz personalizada y fácil de usar. </li>
          <br>
          <li><b><a href='/directContact' className='font-bold'>Consulte para saber más</a></b> ➡️</li>
        </ul>
      `;
    } else if (type === 'stock') {
      title = 'Sistema de gestión de stock';
      beneficios= `
        <ul>
          <li>Control detallado del inventario de productos. </li>
          <li>Seguimiento eficiente de gastos y ganancias. </li>
          <li>Optimización para una gestión más efectiva. </li>
          <li>Interfaz intuitiva y fácil de usar. </li>
          <br>
          <li ><b><a href='/directContact' className='font-bold'>Consulte para saber más</a></b> ➡️</li>
        </ul>
      `;
    }
  
    Swal.fire({
      title,
      html: beneficios,
      icon: 'info',
      confirmButtonColor: '#040d3e',
      showAnimation: true,
      titleColor: '#040d3e',
      iconColor: '#ffeb3b',
      customClass: {
        popup: 'rounded-xl',
        title: 'font-bold text-xl',
        htmlContainer: 'text-left',
        confirmButton: 'bg-[#040d3e] text-[#ffeb3b] hover:text-[#faf8c8] font-semibold py-3 px-6 rounded-md transition-all',
      },
    });
  };
  

  return (
    <>
      <section id='galeria' className="pt-12 pb-2 lg:pt-[100px] lg:pb-[40px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <SectionTitle
                textColorClass="text-gray-800"
                titulo="Creamos Aplicaciones, Personalizadas y Optimizadas para convertir visitantes en CLIENTES y más."
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="/portfolio/solesdesign6.png"
              title="Solesdesign - Prendas únicas."
              button="Ir"
              buttonHref="https://www.solesdesign.store"
            />
            <PortfolioCard
              ImageHref="/portfolio/inmobiliaria3.png"
              title="Inmobiliaria"
              button="Web inmobiliaria"
              projectType="inmobiliaria"
              showBenefitsAlert={showBenefitsAlert}
            />
            <PortfolioCard
              ImageHref="/portfolio/controlstock2.png"
              title="Districam Bebidas Stock "
              button="Más información"
              projectType="stock"
              showBenefitsAlert={showBenefitsAlert}
            />
          </div>

          <div className="text-center mt-10">
            <a
              href="/directContact"
              className="inline-block bg-[#040d3e] text-[#ffeb3b] hover:text-[#faf8c8] font-semibold py-3 px-6 rounded-md transition-all"
            >
              ¡Comienza tu proyecto hoy!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
