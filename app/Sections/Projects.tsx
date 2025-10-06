"use client"
import React from 'react'
import Image from 'next/image'
import SplitText from '@/components/SplitText'  
import BlurText from '@/components/BlurText'
import CardSwap, {Card} from '@/components/CardSwap'
import LogoLoop from '@/components/LogoLoop'
import ShinyText from '@/components/ShinyText'
import Sunrise from '@/public/projects/sunrise.png'
import Win from '@/public/projects/win.png'
import Newera from '@/public/projects/newera.png'
import Hanedu from '@/public/projects/han.png'
const logos = [
    { 
        node: (
            <img 
                src="https://scontent.fuln4-2.fna.fbcdn.net/v/t39.30808-6/336449135_541573588108369_4625709498080177844_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5GgQR4Ih3SEQ7kNvwG27BCb&_nc_oc=AdmSGKFpGgLoPbiBfcmQpuGNsMrRauA-JJ3OpIt94-2y383gvNRvqsIMs_G6lNUu41s&_nc_zt=23&_nc_ht=scontent.fuln4-2.fna&_nc_gid=3aGivjU4BdR9C0vAR-peaA&oh=00_Aff4uuUbFSWpvBdcoEr9jA7HUZx13JDM2ldQAN9dPww9qg&oe=68E93B4F" 
                alt="Amjilt" 
                className="w-14 h-14 object-contain"
            />
        ), 
        href: "" 
    },
    { 
        node: (
            <img 
                src="https://winacademy.mn/images/win_logo_deault_red_bg.jpg" 
                alt="Win Academy" 
                className="rounded-full w-14 h-14 object-cover"
            />
        ), 
        href: "https://company2.com" 
    },
    { 
        node: (
            <img 
                src="https://scontent.fuln4-3.fna.fbcdn.net/v/t39.30808-6/538269110_122138777612823754_8313131565109142136_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fZHLmRLuIcwQ7kNvwHrzo2B&_nc_oc=AdnfkA18ZizXMOstOuwkDRThREpl4VsXllvtdbX3Y8hge_nkneUD0VCl-SUNolIPZzM&_nc_zt=23&_nc_ht=scontent.fuln4-3.fna&_nc_gid=8zVdihIZyMKwtdY-RDSfZg&oh=00_AffNBOwa1gWHYMrSdrMKjYW4ocWoNxzc7QrquOoPE8KNmg&oe=68E942C7" 
                alt="Han Education" 
                className="rounded-full w-16 h-16 object-cover"
            />
        ), 
        href: "https://company3.com" 
    },
]
export default function Projects(){
    return(
        <div className="w-full min-h-screen bg-black/20 flex flex-col items-center justify-center py-16 px-4">
            <div className="text-center max-w-4xl mb-12">
                <SplitText
                    text="Stuffs We have done"
                    className="text-5xl font-bold text-center mb-6"
                    delay={100}
                    duration={0.2}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <BlurText
                    text="Explore our portfolio of innovative projects and creative solutions"
                    delay={50}
                    animateBy="words"
                    direction="bottom"
                    className="text-md text-gray-300 leading-relaxed"
                />
            </div>
            
            {/* Gap between headline and logo sections */}
            <div className="w-full h-16"></div>
            
            <div className="sections-container w-full h-auto flex items-center justify-center overflow-hidden">
                {/* Text left side */}
                <section className='text-white text-center w-1/2'>
                    <p className='text-md text-gray-300 leading-relaxed mb-8 font-bold text-xl'> 
                    Proudly collaborating with companies that inspire us.
                    </p>
                    <LogoLoop
                        logos={logos}
                        speed={120}
                        direction="left"
                        width="100%"
                        logoHeight={48}
                        gap={48}
                        className="brightness-50 contrast-150 grayscale hover:brightness-75 transition-all duration-300"
                    />
                    
                    {/* Buttons below logo loop */}
                    <div className="flex gap-3 justify-center items-center mt-8 relative z-30">
                        <button 
                            onClick={() => window.location.href = '/projects'}
                            className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border border-gray-300 rounded-full px-6 py-2 text-lg font-normal cursor-pointer shadow-inner transition-all duration-300 min-w-[160px] h-12 flex items-center justify-center hover:from-gray-50 hover:to-gray-200 cursor-pointer"
                        >
                            View All
                        </button>
                        <button 
                            onClick={() => window.open('https://calendly.com/saranochir-s/30min?hide_gdpr_banner=1&month=2025-10', '_blank')}
                            className="bg-white/5 backdrop-blur-sm text-gray-400 border border-gray-400/50 rounded-full px-6 py-2 text-lg font-normal cursor-pointer transition-all duration-300 min-w-[160px] h-12 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-gray-300 cursor-pointer"
                        >
                            <ShinyText 
                                text="Book Meeting" 
                                disabled={false} 
                                speed={2} 
                                className="text-gray-400 font-normal hover:text-white"
                            />
                        </button>
                    </div>
                </section>
                {/* Card right side */}
                <section className='w-[600px] h-[600px] relative w-1/2 items-center justify-center'>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    {/* Sunirse Mongolia */}
                    <Card>
                    <h3 className='text-white p-2'>Sunrise Mongolia </h3>
                    <figure>
                        <Image src={Sunrise} alt="Sunrise Mongolia" className='w-full h-full object-cover' />
                    </figure>
                    </Card>
                    {/* Win Academy */}
                    <Card>
                    <h3 className='text-white p-2'>Win-Academy</h3>
                    <figure>
                        <Image src={Win} alt="Sunrise Mongolia" className='w-full h-full object-cover' />
                    </figure>
                    </Card>
                    {/* New Era Platform */}
                    <Card>
                    <h3 className='text-white p-2'>New-Era </h3>
                    <figure>
                        <Image src={Newera} alt="Sunrise Mongolia" className='w-full h-full object-cover' />
                    </figure>
                    </Card>
                    <Card>
                        <h3 className='text-white p-2'>Han-Education</h3>
                        <figure>
                            <Image src={Hanedu} alt="Han-Education" className='w-full h-full object-cover' />
                        </figure>
                    </Card>
                </CardSwap>
                </section>
            </div>

        </div>
    )
}