const contactItems = [
  { label: 'Phone', value: '(929) 969-7710' },
  { label: 'Email', value: 'nomnomkitchen66@gmail.com' },
  { label: 'Instagram', value: 'Coming soon' },
  { label: 'Xiaohongshu', value: 'Coming soon' },
  { label: 'WhatsApp', value: 'Coming soon' },
]

const ContactForm = () => {
  return (
    <section id='contact' className='scroll-mt-20'>
      <div className='container'>
        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-center'>
          Contact
        </p>
        <h2 className='mb-9 font-bold tracking-tight text-center'>
          Book Nom Nom Kitchen for your next event.
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-5'>
          {contactItems.map((item) => (
            <div
              key={item.label}
              className='rounded-3xl border border-primary/15 bg-white p-6 shadow-md'>
              <p className='text-primary text-sm tracking-widest uppercase'>
                {item.label}
              </p>
              <p className='text-black text-lg font-semibold mt-3 break-words'>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
