'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const Header = () => {
  const items = [
    {
      link: '#about-us',
      title: 'About us'
    },
    {
      link: '#services',
      title: 'Services'
    },
    // {
    //   link: '#out-work',
    //   title: 'Our work'
    // },
    {
      link: '#contact',
      title: 'Contact us'
    },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
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
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/images/adria.png"
                alt="menu-icon"
                width={150}
                height={150}
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {
                  items.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 hover:underline"
                        href={item.link}
                        onClick={(e) => handleSmoothScroll(e, item.link)} 
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))
                }
                <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 hover:underline"
                        href={'/careers'}
                      >
                        Careers
                      </Link>
                    </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
