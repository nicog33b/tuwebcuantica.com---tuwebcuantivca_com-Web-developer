import React from "react";
import ServiceCard from "./serviceCard";
import SectionTitle from "../sectionTitle";

const ServiciosHome = () => {
  return (
    <div className="bg-gray-50">
      <section id="services" className="py-12 mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <SectionTitle
          textColorClass="text-gray-900"
          titulo="Innovando en la Intersección de Tecnología y Creatividad"
        />
  
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 py-12">
          <ServiceCard
            imageSrc="/services/web services.png"
            title="Web Crafting a Escala"
            description="Plataformas web ultramodernas diseñadas para el éxito empresarial. Optimizadas para SEO y perfectamente responsivas."
          />
          <ServiceCard
            imageSrc="/services/software apps.png"
            title="Arquitectura de Software Premium"
            description="Soluciones software a medida, construidas con las últimas stacks tecnológicas para asegurar máxima eficiencia operativa."
          />
          <ServiceCard
            imageSrc="/services/social medias.png"
            title="Estrategias de Impacto Digital"
            description="Estrategias de marketing digital que elevan y transforman la presencia digital. Enfoque en resultados medibles y engagement significativo."
          />
        </div>
      </section>
    </div>
  );
}
export default ServiciosHome;
