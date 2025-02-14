import { Hero } from "app/components/Hero/Hero";
import { OpenSource } from "app/components/OpenSource/OpenSource";
import { Servicios } from "app/components/Servicios/Servicios";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <OpenSource />
    </>
    );
}
