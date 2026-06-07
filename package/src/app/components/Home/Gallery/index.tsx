import Image from 'next/image'

const menuItems = [
  {
    name: 'Lamb Skewer',
    description: 'Charcoal-grilled lamb with cumin, chili, and sesame.',
    image: '/images/Gallery/foodone.webp',
  },
  {
    name: 'Beef Skewer',
    description: 'Juicy beef cubes with smoky street-market spice.',
    image: '/images/Gallery/foodtwo.webp',
  },
  {
    name: 'Pork Skewer',
    description: 'Tender pork grilled hot with a savory BBQ finish.',
    image: '/images/Gallery/foodthree.webp',
  },
  {
    name: 'Chicken Skewer',
    description: 'Fresh chicken skewers with bold open-flame flavor.',
    image: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Fresh Lemonade',
    description: 'Cold citrus lemonade made for smoky skewers.',
    image: '/images/Gallery/foodone.webp',
  },
  {
    name: 'Combo: Any 3 Skewers + 1 Drink',
    description: 'A festival favorite for quick lunches and late-night bites.',
    image: '/images/hero/banner-image.webp',
  },
]

const galleryImages = [
  '/images/Gallery/foodone.webp',
  '/images/Gallery/foodtwo.webp',
  '/images/Gallery/foodthree.webp',
  '/images/Gallery/foodfour.webp',
]

const Gallery = () => {
  return (
    <>
      <section id='menu' className='scroll-mt-20'>
        <div className='container'>
          <div className='text-center'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
              Menu
            </p>
            <h2>BBQ Skewers & Fresh Lemonade</h2>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
            {menuItems.map((item) => (
              <article
                key={item.name}
                className='overflow-hidden rounded-3xl bg-white shadow-md border border-primary/10 hover:-translate-y-1 hover:shadow-xl transition duration-300'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={420}
                  className='h-56 w-full object-cover'
                />
                <div className='p-7'>
                  <h3 className='text-2xl font-semibold text-black'>
                    {item.name}
                  </h3>
                  <p className='text-black/50 mt-3 leading-6'>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='gallery' className='scroll-mt-20 bg-primary/10'>
        <div className='container'>
          <div className='text-center'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
              Gallery
            </p>
            <h2>BBQ, lemonade, and pop-up moments.</h2>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
            {galleryImages.map((image, index) => (
              <div key={image} className='overflow-hidden rounded-3xl'>
                <Image
                  src={image}
                  alt={`Nom Nom Kitchen gallery ${index + 1}`}
                  width={500}
                  height={500}
                  className='h-72 w-full object-cover hover:scale-105 transition duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
