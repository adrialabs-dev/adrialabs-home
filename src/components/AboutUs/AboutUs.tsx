import React from 'react'

export const AboutUs = () => {
  return (
    <section className="bg-white text-black" id='about-us'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Acerca de Nosotros
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/team-image.jpg"
              className="rounded"
              alt="team-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
