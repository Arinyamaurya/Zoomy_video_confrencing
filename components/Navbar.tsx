import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn , UserButton} from '@clerk/nextjs'

function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed z-50 w-full bg-[#050a30] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
        src="/icons/logo.svg"
        alt="Zoomy logo"
        width={32}
        height={32}
        className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">Zoomy</p>
      </Link>

      <div className="flex justify-between items-center gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <MobileNav/>
      </div>


    </nav>
  )
}

export default Navbar 