import React from 'react'

export const ContactForm = () => {
  return (
  

<section className="bg-white" id='contact'>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg text-black">
          Ponte en contacto con nosotros para más información o si es que quieres cotizar algún proyecto, estaremos encatados de poder atenderte y brindate toda la asesoria posible para que lleves adelante tu proyecto.
        </p>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
              placeholder="Message"
              rows={8}
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full border rounded-lg bg-brand-color-blue hover:border-brand-color-blue hover:bg-white px-5 py-3 font-medium hover:text-brand-color-blue transform transition-transform duration-300 hover:scale-110 text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}
