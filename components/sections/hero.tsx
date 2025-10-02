"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Beams from "@/components/Beams"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Elevating brands through exceptional digital experiences."
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Beams 
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={2.0}
          scale={0.3}
          rotation={30}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          <span className="inline-block blur-[0.5px] hover:blur-0 transition-all duration-300">Premium Websites.</span>
          <br />
          <span className="inline-block blur-[0.5px] hover:blur-0 transition-all duration-300 delay-100">
            Built Fast.
          </span>
          <br />
          <span className="inline-block blur-[0.5px] hover:blur-0 transition-all duration-300 delay-200">
            Built Right.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-mono min-h-[2em]">
          {text}
          {showCursor && <span className="text-white">|</span>}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-gray-700 transition-all">
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
