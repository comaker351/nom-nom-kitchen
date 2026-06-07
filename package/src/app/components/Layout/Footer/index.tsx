import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'

const footerLinks = [
  { label: 'Home', href: '/#home-section' },
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Events & Catering', href: '/#events' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

const Footer = () => {
  return (
    <footer className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <Logo />
            <p className='text-sm font-medium text-grey my-5 max-w-70%'>
              New York BBQ skewers, fresh lemonade, pop-up food events, and
              catering.
            </p>
          </div>
          <div className='col-span-2'>
            <p className='text-black text-xl font-semibold mb-9'>Explore</p>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.label} className='mb-3'>
                  <Link
                    href={item.href}
                    className='text-black/60 hover:text-black text-base font-normal mb-6'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <Link href='tel:+19299697710'>
                <div className='flex'>
                  <Icon
                    icon='solar:phone-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    (929) 969-7710
                  </p>
                </div>
              </Link>
              <Link href='mailto:nomnomkitchen66@gmail.com'>
                <div className='flex'>
                  <Icon
                    icon='solar:mailbox-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base break-words'>
                    nomnomkitchen66@gmail.com
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t border-grey/15 py-5'>
          <p className='text-sm text-black/70'>
            © 2026 Nom Nom Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
