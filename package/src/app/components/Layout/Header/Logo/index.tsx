import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold'>
        NN
      </span>
      <p className='text-black text-2xl font-semibold'>Nom Nom Kitchen</p>
    </Link>
  )
}

export default Logo
