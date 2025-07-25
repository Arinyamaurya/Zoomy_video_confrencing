"use client"
import {  cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

function MobileNav() {

  const pathname=usePathname();
  
  return (
    <section className="w-full max-w-[264px]">
    <Sheet>
  <SheetTrigger asChild>
    <Image
    src="/icons/hamburger.svg"
    alt="hamburger icon"
    width={36}
    height={36}
    className='cursor-pointer sm:hidden'
    />
  </SheetTrigger>
  <SheetContent side="left" className='border-none bg-[#050a30]'>
     <Link href="/" className="flex items-center gap-1">
        <Image
        src="/icons/logo.svg"
        alt="Zoomy logo"
        width={32}
        height={32}
        className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white ">Zoomy</p>
      </Link>
      <div className="flex h-[calc(100vh-72px)] flex-col overerflow-y-auto justify-between">
            <section className="flex h-full flex-col gap-6 text-white">
           {sidebarLinks.map((link)=>{
            const isActive = pathname=== link.route;

            return(
              <SheetClose asChild key={link.route}>
              <Link 
              href={link.route}
              key={link.label}
              className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60',{'bg-[#0e78f9]':isActive})}>
               <Image
               src={link.imgUrl}
               alt={link.label}
               width={20}
               height={20}
               />
               <p className="font-semibold">{link.label}</p>

              </Link>
              </SheetClose>
            )
          })}
            </section>
    
      </div>

  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav