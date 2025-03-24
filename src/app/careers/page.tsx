'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  const t = useTranslations('CareersPage')

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
    <section className="bg-white pt-20" >
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-5">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {t('carrersTitle')}
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
            {t('careersBodyText')}
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                href="#jobs"
                className="inline-block border rounded-sm bg-brand-color-blue px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-brand-color-blue hover:border-2 hover:border-brand-color-blue focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                onClick={(e) => handleSmoothScroll(e, '#jobs')}
              >
                {t('careersButton')}
              </Link>
            </div>
          </div>
        </div>
        <Image src={'/images/careers-img.png'} alt={'careers-img'} width={700} height={500} className="h-56 w-full object-cover sm:h-full" />
      </div>

      {/*  */}

      <div className="grid h-[800px] bg-white px-4" id="jobs">
        <div className="flex justify-center items-center lg:mt-10">
          <h1 className="text-brand-color-blue text-3xl font-extrabold text-center">{t('listTitle')}</h1>
        </div>
        <div className="flex flex-col items-center lg:justify-center">
          <Image src={'/images/no-jobs.svg'} alt={'no-jobs'} width={500} height={500} />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('listNoJobsTitle')}</h1>
          <p className="mt-4 text-gray-500">{t('listNoJobsBodyText')}</p>
        </div>
      </div>
    </section>


  )
}