'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { Icon } from '@iconify/react/dist/iconify.js'

const headerLinks = [
  { label: 'Home', href: '/#home-section' },
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Events & Catering', href: '/#events' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 20)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? 'hidden' : ''
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 py-4 w-full transition-all duration-300 ${
        sticky ? 'shadow-lg bg-white' : 'shadow-none'
      }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <Logo />
          <nav className='hidden lg:flex grow items-center gap-4 xl:gap-6 justify-center'>
            {headerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='text-lg flex font-medium duration-300 text-black/50 hover:text-primary'>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className='flex items-center gap-2 lg:gap-3'>
            <Link
              href='tel:+19299697710'
              className='text-lg font-medium hover:text-primary hidden xl:block'>
              <Icon
                icon='solar:phone-bold'
                className='text-primary text-3xl lg:text-2xl inline-block me-2'
              />
              (929) 969-7710
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between gap-2 p-4'>
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className='hover:cursor-pointer'
              aria-label='Close menu Modal'>
              <Icon
                icon='material-symbols:close-rounded'
                width={24}
                height={24}
                className='text-black hover:text-primary text-24 inline-block me-2'
              />
            </button>
          </div>
          <Link
            href='tel:+19299697710'
            className='text-lg font-medium hover:text-primary block md:hidden mt-6 p-4'>
            <Icon
              icon='solar:phone-bold'
              className='text-primary text-3xl lg:text-2xl inline-block me-2'
            />
            (929) 969-7710
          </Link>
          <nav className='flex flex-col items-start p-4'>
            {headerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setNavbarOpen(false)}
                className='flex items-center justify-between w-full py-2 text-muted focus:outline-hidden'>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
