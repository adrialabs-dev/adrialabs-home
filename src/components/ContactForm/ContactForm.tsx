import React from 'react'
import { useTranslations, useLocale } from "next-intl";

export const ContactForm = () => {
  const t = useTranslations('ContactPage');
  const locale = useLocale();
  
  return (
    <section className="bg-white" id='contact'>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              {t('title')}
            </h2>
            <p className="max-w-xl text-lg text-black mt-4">
              {t('copy')}
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">{t('FormFields.name')}</label>
                <input
                  className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">{t('FormFields.email')}</label>
                  <input
                    className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">{t('FormFields.phone')}</label>
                  <input
                    className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">{t('FormFields.message')}</label>

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
                  {t('FormFields.button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
