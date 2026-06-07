import Image from 'next/image'

const eventItems = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Food Festivals',
    subheading: 'Fresh skewers grilled fast for high-traffic outdoor crowds.',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Street Markets',
    subheading: 'Compact pop-up service with bold aroma and quick flow.',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Private Events',
    subheading: 'BBQ skewers and lemonade for parties and celebrations.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Catering',
    subheading: 'Simple, crowd-friendly service for offices and gatherings.',
  },
]

const Features = () => {
  return (
    <section id='events'>
      <div className='container'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Events & Catering
          </p>
          <h2 className='font-semibold lg:max-w-60% mx-auto mt-3'>
            Built for festivals, street markets, and private events.
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 mt-24'>
          {eventItems.map((items, i) => (
            <div
              key={i}
              className='p-8 relative rounded-3xl bg-linear-to-b from-primary/10 to-white shadow-md hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'>
              <div className='rounded-full flex justify-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-35%] left-[0%]'>
                <Image
                  src={items.imgSrc}
                  alt={items.heading}
                  width={510}
                  height={10}
                />
              </div>
              <p className='text-2xl text-black font-semibold text-center mt-16'>
                {items.heading}
              </p>
              <p className='text-base font-normal text-black/50 text-center mt-2 leading-6'>
                {items.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
