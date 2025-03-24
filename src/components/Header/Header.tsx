'use client';
import { setUserLocale } from "app/services/locale";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const t = useTranslations('NavMenu');
  const locale = useLocale();

  const items = [
    {
      link: '#about-us',
      title: t('about')
    },
    {
      link: '#services',
      title: t('services')
    },
    {
      link: '#contact',
      title: t('contact')
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setShowMenu(false);
  };

  return (
    <header className="bg-white fixed w-full top-0 pt-6 pb-6 lg:pt-0 lg:pb-0 lg:top-0 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href={`/`}>
              <span className="sr-only">Home</span>
              <Image
                src="/images/adria.png"
                alt="logo"
                width={150}
                height={150}
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-2xl hover:font-bold lg:text-base text-gray-900 relative hover-effect"
                      href={item.link}
                      onClick={(e) => handleSmoothScroll(e, item.link)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    className="text-2xl hover:font-bold lg:text-base text-gray-900 relative hover-effect"
                    href={'/careers'}
                  >
                    {t('careers')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Selector de idioma */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="flex gap-2">
                  <Link
                    href={`/`}
                    // locale="en"
                    className={`text-gray-900 hover:text-gray-600 ${locale === 'en' ? 'font-bold' : ''}`}
                    onClick={() => setUserLocale('en')}
                  >
                    EN
                  </Link>
                  <span className="text-gray-900">|</span>
                  <Link
                    href={`/`}
                    // locale="es"
                    className={`text-gray-900 hover:text-gray-600 ${locale === 'es' ? 'font-bold' : ''}`}
                    onClick={() => setUserLocale('es')}
                  >
                    ES
                  </Link>
                </div>
              </div>

              {/* Botón de menú hamburguesa (solo en móvil) */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <Image src='/images/menu-icon.svg' alt={'icon'} width={40} height={40} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`fixed inset-y-0 right-0 top-0 w-64 bg-white rounded-2xl text-center pt-12 h-96 shadow-lg transform transition-transform duration-300 ease-in-out ${showMenu ? '-translate-x-1/3' : 'translate-x-full'
            } ${showMenu ? 'translate-y-3' : 'translate-y-full'} md:hidden z-50`}
        >
          <Link className="block text-teal-600" href="/" onClick={() => setShowMenu(false)}>
            <span className="sr-only">Home</span>
            <Image
              src="/images/adria.png"
              alt="logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </Link>
          <div className="flex flex-col gap-5 p-5 hover-effect font-bold">
            {items.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className="text-2xl text-gray-900 hover:font-bold"
                  onClick={(e) => handleSmoothScroll(e, item.link)}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <div>
              <Link
                href={'/careers'}
                className="text-2xl text-gray-900 hover:font-bold"
                onClick={() => setShowMenu(false)}
              >
                {t('careers')}
              </Link>
            </div>
            {/* Selector de idioma en el menú móvil */}
            <div className="flex justify-center gap-2 mt-4">
              <Link
                href="/"
                locale="en"
                className={`text-gray-900 hover:text-gray-600 ${locale === 'en' ? 'font-bold' : ''}`}
                onClick={() => {
                  setShowMenu(false)
                  setUserLocale('en')
                }}
              >
                EN
              </Link>
              <span className="text-gray-900">|</span>
              <Link
                href="/"
                locale="es"
                className={`text-gray-900 hover:text-gray-600 ${locale === 'es' ? 'font-bold' : ''}`}
                onClick={() => {
                  setShowMenu(false)
                  setUserLocale('es')
                }}
              >
                ES
              </Link>
            </div>
          </div>
        </div>

        {/* Fondo oscuro cuando el menú está abierto */}
        {showMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setShowMenu(false)}
          />
        )}
      </div>
    </header>
  );
};