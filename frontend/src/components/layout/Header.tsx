"use client"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/images/logo.svg'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    return (
      <header className='relative z-10'>
        <nav className='flex justify-between items-center py-5 px-6 md:px-16 text-white font-semibold'>
          <Link href="/">
            <Image src={Logo} alt="Logo Dylan Production"></Image>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes size={46} /> : <FaBars size={46} />}
            </button>
          </div>
          <div className={`flex-col md:flex-row md:flex gap-20 items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <Link href="#pres" className='border-2 border-white rounded-3xl py-2 px-16 transition-all hover:bg-white hover:text-dGreen'>Présentation</Link>
            <Link href="#projects" className='border-2 border-white rounded-3xl py-2 px-16 transition-all hover:bg-white hover:text-dGreen'>Identités</Link>
            <Link href="#motions" className='border-2 border-white rounded-3xl py-2 px-16 transition-all hover:bg-white hover:text-dGreen'>Motion</Link>
          </div>
        </nav>
      </header>
  )
}