'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/burger.webp'
            alt='BBQ food accent'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/cook.webp'
              alt='Nom Nom Kitchen food vendor'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Us
            </p>
            <h2 className='lg:text-start text-center'>
              New York pop-up flavor, grilled fresh.
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              Nom Nom Kitchen is a New York local food vendor serving BBQ
              skewers, fresh lemonade, pop-up food events, and catering for
              gatherings of all sizes.
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
              We bring a focused street food menu, quick service, and fresh
              open-flame grilling to festivals, street markets, private parties,
              and corporate events.
            </p>
            <a
              href='/#events'
              className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Events & Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
