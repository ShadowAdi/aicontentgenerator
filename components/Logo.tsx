import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/logo.svg"
import Link from 'next/link'
import { MuseoModerno } from 'next/font/google'
import { cn } from '@/lib/utils'
const museo=MuseoModerno({
  weight:"700",
  subsets:["latin"],
})

const Logo = () => {
  return (
      <Link className='flex items-center gap-1' href={"/"}>
      
      <Image src={LogoImage}  width={64} height={64} alt='Logo'/>
      <h2    className={cn(
      museo.className,
          "text-xl"
        )}> ContentGenerator</h2>

    </Link>
  )
}

export default Logo