import Image from 'next/image'
import React from 'react'


interface ServiceCardProps {
  icon: string
  service: string
  description: string
}

export const ServiceCard = ({ icon, service, description }: ServiceCardProps) => {
  return (
    <div
      className="block rounded-xl border border-gray-800 p-8 shadow-2xl transition hover:border-brand-color-blue/100 hover:shadow-brand-color-blue/10 bg-white"
    >
      <Image src={icon} alt={'icon'} width={40} height={40} />
      
      <h2 className="mt-4 text-xl font-bold text-black">
        {service}
      </h2>
      <p className="mt-1 text-sm text-black">
        {description}
      </p>
    </div>
  )
}
