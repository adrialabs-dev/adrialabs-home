import { AboutUs } from "app/components/AboutUs/AboutUs";
import { ContactForm } from "app/components/ContactForm/ContactForm";
import { Hero } from "app/components/Hero/Hero";
import { Servicios } from "app/components/Servicios/Servicios";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Servicios />
      <ContactForm />
      {/* <OpenSource /> */}
    </>
    );
}
