'use client'
import axios from 'axios';
import { useTranslations } from 'next-intl';
import React, { ChangeEvent, FormEvent, useState } from 'react'


export const ContactForm = () => {

  const t = useTranslations('FormComponent');


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: ""
  });
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
  };

  const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
    setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: t('nameError') }));
      return;
    }

    if (!email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: t('emailError') }));
      return;
    }

    if (!phoneNumber.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: t('phoneNumberError') }))
    }

    if (!message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: t('messageError'),
      }));
      return;
    }
    setLoading(true);

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/adrialabs18@gmail.com", {
        name: name,
        email: email,
        message: message,
        phoneNumber: phoneNumber
      })
      .then((response) => {
        if (response.status == 200) {
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setPhoneNumber("")
        }
        console.log(response);
      })
      .catch((error) => console.log(error));
  };


  return (


    <section className="bg-white" id='contact'>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              {t('title')}
            </h2>
            <p className="max-w-xl text-lg text-black mt-4">
              {t('body')}
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={handleSubmit} method="POST">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                  placeholder={t('placeHolderName')}
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                    placeholder={t('placeHolderEmail')}
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                    placeholder={t('placeHolderPhoneNumber')}
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />

                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>

                <textarea
                  className="w-full rounded-lg border border-brand-color-blue p-3 text-sm text-black"
                  placeholder={t('placeHolderMessage')}
                  rows={8}
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full border rounded-lg bg-brand-color-blue hover:border-brand-color-blue hover:bg-white px-5 py-3 font-medium hover:text-brand-color-blue transform transition-transform duration-300 hover:scale-110 text-white sm:w-auto"
                >
                  {loading ? t('buttonEnviando') : t('button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
