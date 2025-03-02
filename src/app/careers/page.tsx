'use client'
import Image from "next/image";
import Link from "next/link";

export default function Careers() {

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
    <section className="bg-white" >
      <div className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-5">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
              sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                href="#jobs"
                className="inline-block border rounded-sm bg-brand-color-blue px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-brand-color-blue hover:border-2 hover:border-brand-color-blue focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                onClick={(e) => handleSmoothScroll(e, '#jobs')}
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <img
          alt=""
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </div>



      {/*  */}




      <div className="grid h-[800px] bg-white px-4" id="jobs">
        <div className="flex justify-center items-center mt-10">
          <h1 className="text-brand-color-blue text-3xl font-extrabold text-center">Explore our new job offers:</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={'/images/no-jobs.svg'} alt={'no-jobs'} width={500} height={500} />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>
          <p className="mt-4 text-gray-500">We currently don't have any open jobs.</p>
        </div>
      </div>
    </section>


  )
}