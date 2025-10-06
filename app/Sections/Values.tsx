"use client"
import React from 'react'
import MagicBento from '@/components/MagicBento'
import CurvedLoop from '@/components/CurvedLoop'
import GradualBlur from '@/components/GradualBlur'

export default function Values() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="h-full overflow-y-auto py-16 md:py-24 px-4 md:px-8">
        <div className="w-full min-h-screen bg-black/20 flex flex-col items-center justify-start">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 w-full h-16 md:h-20 flex items-center justify-center">
            <CurvedLoop 
              marqueeText="We ✦ Are ✦ Passionate ✦ About ✦ Creating ✦ Beautiful ✦ and ✦ Functional ✦ Websites"
              speed={4}
              curveAmount={140}
              direction="right"
              interactive={true}
              className="text-2xl md:text-4xl lg:text-6xl font-bold"
            />
          </div>
          
          {/* Magic Bento Container */}
          <div className="w-full max-w-6xl flex justify-center px-2 md:px-4">
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={400}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </div>
      </div>

      {/* <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
      /> */}
    </section>
  )
}