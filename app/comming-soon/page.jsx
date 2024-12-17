'use client'

import Image from 'next/image'
import CoomingSoong from '@/assets/CommingSoon.svg'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter()
  return (
    <div className=" max-w-[1200px] mx-auto">
    <Navbar />
    <div className=' bg-light_dark h-screen flex flex-col justify-center items-center relative overflow-hidden'>
        <div className='bg-btnHoverDark h-[30vw] max-h-[300px] mb-10 w-[50vw] max-w-[900px] rounded-lg'>
        <Image className='image absolute left-0 top-1/3' src={CoomingSoong}/>
        <Image className='image absolute left-0  top-1/3 rotate-[13deg]'  src={CoomingSoong}/>
        </div>
        <p>The page is on its way to release</p>
        <button onClick={()=> router.back()} className='gradient-btn mt-5'>GO BACK</button>
    </div>
    </div>
  )
}
