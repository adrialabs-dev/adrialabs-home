import React from "react";

export const OpenSource = () => {
  return (
    <section className="relative bg-[url('/images/banner-com-2.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div> */}

          <div className="lg:py-24">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-center">
              Visita nuestros proyectos de Código Abierto
            </h2>

            <p className="mt-4 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Mira Nuestros Proyectos
            </a>
          </div>
          {/*
  Heads up! 👋

theme: {
  extend: {
    animation: {
      border: 'background ease infinite',
    },
    keyframes: {
      background: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
  },
}
*/}

          {/* <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-white">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500 dark:text-gray-400"
              >
                10th Oct 2022
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                  How to center an element using JavaScript and jQuery
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                  Snippet
                </span>

                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                  JavaScript
                </span>
              </div>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  );
};
