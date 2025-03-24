import { useTranslations } from "next-intl";
import React from "react";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation"

export const Hero = () => {
  const t = useTranslations('HomePage');
  
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <BackgroundAnimation />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white animate-slide-up">
          {t('title')}
            <strong className="block font-extrabold text-white animate-slide-up">
            {t('title2')}
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#contact"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transform transition-transform duration-300 hover:scale-110 animate-slide-up-button"
            >
              {t('getStartedButton')}
            </a>

            <a
              href="#about-us"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto transform transition-transform duration-300 hover:scale-110 animate-slide-up-button"
            >
              {t('learnMoreButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};