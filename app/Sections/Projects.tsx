"use client"
import React from 'react'
import GlassSurface from '@/components/GlassSurface'
import GradualBlur from '@/components/GradualBlur'
import SplitText from '@/components/SplitText'
import BlurText from '@/components/BlurText'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
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
{/* 
            <div className="w-full max-w-4xl h-auto overflow-hidden">
                <ScrollStack>
                    <ScrollStackItem>
                        <div className="bg-white/5 backdrop-blur-sm border border-gray-400/50 rounded-xl p-8 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-4">E-Commerce Platform</h2>
                            <p className="text-gray-300 leading-relaxed">A modern, responsive e-commerce platform built with Next.js and Tailwind CSS. Features include user authentication, payment integration, and admin dashboard.</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Stripe</span>
                            </div>
                        </div>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <div className="bg-white/5 backdrop-blur-sm border border-gray-400/50 rounded-xl p-8 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Portfolio Website</h2>
                            <p className="text-gray-300 leading-relaxed">A stunning portfolio website showcasing creative work with smooth animations and interactive elements. Built with modern web technologies.</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Framer Motion</span>
                                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">GSAP</span>
                            </div>
                        </div>
                    </ScrollStackItem>
                    <ScrollStackItem>
                        <div className="bg-white/5 backdrop-blur-sm border border-gray-400/50 rounded-xl p-8 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-4">SaaS Dashboard</h2>
                            <p className="text-gray-300 leading-relaxed">A comprehensive SaaS dashboard with analytics, user management, and real-time data visualization. Designed for scalability and performance.</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Prisma</span>
                                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">PostgreSQL</span>
                            </div>
                        </div>
                    </ScrollStackItem>
                </ScrollStack>
            </div> */}
        </div>
    )
}