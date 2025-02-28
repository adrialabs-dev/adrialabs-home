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
        </div>
      </div>
    </section>
  );
};
