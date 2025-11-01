"use client"
import React from 'react'
import MagicBento from '@/components/MagicBento'
import CurvedLoop from '@/components/CurvedLoop'
import GradualBlur from '@/components/GradualBlur'

export default function Values() {
  return (
    <section className="relative overflow-hidden -mt-4 sm:mt-0">
      <div className="overflow-y-auto py-2 sm:py-4 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="w-full bg-black/20 flex flex-col items-center justify-start">
          {/* Header Section */}
          <div className="text-center mb-4 sm:mb-8 md:mb-12 w-full h-auto min-h-[120px] sm:min-h-[100px] md:h-20 flex items-center justify-center px-4">
            <div className="scale-150 sm:scale-125 md:scale-100">
              <CurvedLoop 
                marqueeText="We ✦ Are ✦ Passionate ✦ About ✦ Creating ✦ Beautiful ✦ and ✦ Functional ✦ Websites"
                speed={4}
                curveAmount={140}
                direction="right"
                interactive={true}
                className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
              />
            </div>
          </div>
          
          {/* Magic Bento Container */}
          <div className="hidden md:flex w-full max-w-7xl justify-center px-4 sm:px-6 md:px-4 mb-8 sm:mb-12 md:mb-16">
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