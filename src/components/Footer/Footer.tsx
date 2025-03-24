'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const Footer = () => {

  const socialLinks = [
    {
      name: 'Instagram',
      link: '/',
      icon: '/images/icons8-instagram.svg'
    },
    {
      name: 'LinkedIn',
      link: '/',
      icon: '/images/icons8-linkedin.svg'
    },
    // {
    //   name: 'Github',
    //   link: '/',
    //   icon: '/images/icons8-github.svg'
    // },
  ]

  const footerLinks = [
    {
      link: '#about-us',
      title: 'About us'
    },
    {
      link: '#services',
      title: 'Services'
    },
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
    <footer className="bg-white border border-t-2 border-brand-color-blue flex flex-col lg:p-10 pt-5 justify-center items-center lg:items-start">

      <div className="flex flex-col lg:flex-row w-full">
        <div className="text-teal-600 lg:w-1/3">
          <Link href={'/'}>
            <Image
              src="/images/adria.png"
              alt="menu-icon"
              width={250}
              height={250}
              className="mx-auto"
            />
          </Link>
          <div className="flex flex-col gap-5 items-center lg:items-start lg:pl-5">
            {
              footerLinks.map((item, index) => (
                <div key={index}>
                  <Link
                    href={'#about-us'}
                    className="text-2xl hover:font-bold lg:text-xl text-gray-900 relative hover-effect"
                    onClick={(e) => handleSmoothScroll(e, item.link)}
                  >
                    {item.title}
                  </Link>
                </div>
              ))
            }
            <div>
              <Link
                href={'/careers'}
                className="text-2xl hover:font-bold lg:text-xl text-gray-900 relative hover-effect"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-5 lg:pt-0 lg:w-2/3">
          <div className="bg-brand-color-blue rounded-xl opacity-50 pt-5 pb-5 pr-20 pl-20">
            <p className="max-w-xs text-black text-center font-bold text-lg">
              Contact Us
            </p>
            <div className="flex flex-col justify-center items-center mt-4">
              {/* <small className="text-black font-bold text-lg">Email</small>
              <p className="max-w-xs text-black font-bold text-lg text-center pb-3">
                hello@adrialabs.com
              </p> */}
              <small className="text-black font-bold text-lg">Phone</small>
              <p className="max-w-xs text-black font-bold text-lg text-center">
                +51 906 191 636
              </p>
            </div>
          </div>

          <ul className="mt-8 flex gap-6 justify-center items-center lg:justify-start lg:items-center">
            {
              socialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image src={item.icon} alt='icon' width={40} height={40} />
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>


      </div>

      <div className="flex items-center justify-center w-full pt-5">
        <p className="text-xs text-gray-500">
          &copy; 2025. AdriaLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
