import Image from "next/image";
import React from "react";


export const Header = () => {
  const items = [
    {
      link: '#',
      title: 'About us'
    },
    {
      link: '#',
      title: 'Services'
    },
    {
      link: '#',
      title: 'Our work'
    },
    {
      link: '#',
      title: 'Contact us'
    },
  ]
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image
                src="/images/adria.png"
                alt="menu-icon"
                width={150}
                height={150}
                className="mx-auto"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {
                  items.map((item, index) => (
                    <li key={index}>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75 hover:underline"
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))
                }
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
