import React from "react";
import ServiceCard from "./serviceCard";
import SectionTitle from "../sectionTitle";

const ServiciosHome = () => {
  return (
    <div>
      <section id="services" className="colorSecondary mb-9">
        <div className="py-12 m-3 ">
          {/* SECTION TITLE */}
          <SectionTitle
            textColorClass="text-gray-800"
            titulo="Observa cómo transformamos tu brillante idea de aplicación en una realidad inspiradora en millones de dispositivos."
          ></SectionTitle>

          {/*CARDS */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 p-3 ">
            <ServiceCard
              imageSrc="/services/web services.png"
              title="Desarrollo Web a Medida"
              description="Diseñamos y desarrollamos aplicaciones web que se adaptan perfectamente a cualquier dispositivo, asegurando una experiencia premium para los usuarios, independientemente de las especificaciones técnicas de su dispositivo. Nuestro enfoque garantiza una navegación fluida y eficiente, mejorando la visibilidad y el rendimiento de tu presencia en línea."
            />
            <ServiceCard
              imageSrc="/services/software apps.png"
              title="Desarrollo de Software a Medida"
              description="En nuestro servicio de Desarrollo de Software, creamos soluciones personalizadas que se ajustan a tus necesidades específicas. Desde aplicaciones empresariales hasta sistemas complejos, nos comprometemos a ofrecer soluciones de software innovadoras y eficientes."
            />
            <ServiceCard
              imageSrc="/services/social medias.png"
              title="Estrategias de Marketing Digital y Gestión de Redes Sociales"
              description="En nuestro servicio de Marketing Digital, potenciamos tu presencia en línea mediante estrategias especializadas y gestión proactiva de redes sociales. Desde la creación de contenido impactante hasta la implementación de tácticas de engagement, trabajamos para impulsar tu marca y conectar con tu audiencia de manera efectiva"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosHome;
