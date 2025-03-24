'use client'
import React from "react";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { useTranslations } from "next-intl";

export const Servicios = () => {
  const t = useTranslations('HomePage');
  const servicesObject = [
    {
      icon: '/images/service-icon-1.svg',
      service: t('services1title'),
      description: t('services1body')
    },
    {
      icon: '/images/service-icon-2.svg',
      service: t('services2title'),
      description: t('services2body')
    },
    {
      icon: '/images/service-icon-3.svg',
      service: t('services3title'),
      description: t('services3body')
    },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="bg-brand-color-blue text-white" id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t('servicesTitle')}</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {
            servicesObject.map((item, index) => (
              <ServiceCard icon={item.icon} service={item.service} description={item.description} key={index} />
            ))
          }
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="inline-block rounded border  bg-white px-12 py-3 text-sm font-medium text-black transition hover:text-white hover:bg-brand-color-blue hover:border-white/100 hover:shadow-brand-color-blue/10 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            {t('servicesButton')}
          </button>
        </div>
      </div>
    </section>
  );
};
