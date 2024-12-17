'use client'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

export default function page() {
  return (
    <Parallax pages={3}>
        <ParallaxLayer offset={0}>
            <h1 className='h-screen w-screen bg-red-500'>Section 1</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={.9} speed={1} className='z-50'>
            <h1 className='h-[200vh] w-screen bg-blue-500'>Section 2</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} >
            <h1 className='h-screen w-screen bg-yellow'>Section 3</h1>
        </ParallaxLayer>
    </Parallax>
  )
}
