"use client"
import React from 'react'
import Beams from '@/components/Beams'
import BlurText from '@/components/BlurText'
import TextType from '@/components/TextType'
import ShinyText from '@/components/ShinyText'
import TextTrail from '@/components/TextTrail'
import GradualBlur from '@/components/GradualBlur'
export default function Hero() {
    return(
        <div id="home" className="w-full min-h-screen h-screen bg-black/20 flex flex-col justify-center items-center relative overflow-hidden px-4">
            <section className="beams w-full h-full absolute z-0 pointer-events-none">
                <Beams 
                beamWidth={3}
                beamHeight={30}
                beamNumber={20}
                lightColor="#B5B5B8"
                speed={2}
                noiseIntensity={3}
                scale={0.2}
                rotation={30}         
                />
            </section>
             <div className="text-center relative z-20 px-4">
                 {/* blue text */}
                 <aside className='flex flex-col items-center justify-center'>
                     <BlurText
                     text="Team Byte"
                     delay={100}
                     animateBy="letters"
                     direction="top"
                     className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 md:mb-8 font-bold relative z-20"
                     />
                     <TextType 
                     text={["Text typing effect", "for your websites", "Happy coding!"]}
                     typingSpeed={75}
                     pauseDuration={1500}
                     showCursor={true}
                     cursorCharacter="|"
                     className='text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-italic text-gray-400 relative z-20 px-2'
                     />
                 </aside>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-50 px-4 w-full max-w-md mx-auto">
                    <button 
                        onClick={() => window.location.href = '/projects'}
                        className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-2.5 text-base sm:text-lg font-normal cursor-pointer shadow-inner transition-all duration-300 w-full sm:w-auto sm:min-w-[160px] h-12 flex items-center justify-center hover:from-gray-50 hover:to-gray-200 cursor-pointer relative z-50"
                    >
                        Get Started
                    </button>
                    <button 
                        onClick={() => window.open('https://calendly.com/saranochir-s/30min?hide_gdpr_banner=1&month=2025-10', '_blank')}
                        className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-2.5 text-base sm:text-lg font-normal cursor-pointer transition-all duration-300 w-full sm:w-auto sm:min-w-[160px] h-12 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer relative z-50"
                    >
                        <ShinyText 
                            text="Learn More" 
                            disabled={false} 
                            speed={2} 
                            className="text-gray-400 font-normal hover:text-white"
                        />
                    </button>
                </div>
            </div>
            
            {/* <GradualBlur
                target="parent"
                position="bottom"
                height="8rem"
                strength={3}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            /> */}
        </div>
    )
}