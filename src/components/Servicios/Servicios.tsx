import React from "react";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const Servicios = () => {
  const servicesObject = [
    {
      icon: '/images/service-icon-1.svg',
      service: 'Desarrollo de Aplicaciones Móviles',
      description: 'Usamos las mejores tecnologias para traer a la vida tu idea de aplicación, totalmente personalizada.'
    },
    {
      icon: '/images/service-icon-2.svg',
      service: 'Desarrollo de Aplicaciones Web y E-commerce',
      description: 'Quieres empezar a vender rapidamente a través de la web? Podemos crear tu plataforma personaliazada para poder empezar los antes posible'
    },
    {
      icon: '/images/service-icon-3.svg',
      service: 'Servicio de Consultoria',
      description: 'Podemos ayudarte con lo que necesitas para poder iniciar tu negocio, ademas de proporcionar asesoramiento en las tecnologias que deseas usar.'
    },
  ]
  return (
    <section className="bg-brand-color-blue text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What we offer</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {
            servicesObject.map((item, index) => (
              <ServiceCard icon={item.icon} service={item.service} description={item.description} key={index} />
            ))
          }
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded border  bg-white px-12 py-3 text-sm font-medium text-black transition hover:text-white hover:bg-brand-color-blue hover:border-white/100 hover:shadow-brand-color-blue/10 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};
