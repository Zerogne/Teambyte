"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BackgroundBeams from "@/components/effects/background-beams"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    image: "/modern-ecommerce-website.png",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics platform with real-time data visualization",
    image: "/saas-dashboard-analytics.jpg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative showcase for digital artists",
    image: "/creative-portfolio-website.png",
  },
  {
    id: 4,
    title: "Mobile App Landing",
    description: "App launch page with interactive elements",
    image: "/mobile-app-landing-page.jpg",
  },
  {
    id: 5,
    title: "Corporate Website",
    description: "Professional presence for enterprise clients",
    image: "/corporate-business-website.png",
  },
  {
    id: 6,
    title: "Restaurant Platform",
    description: "Online ordering and reservation system",
    image: "/restaurant-website-design.png",
  },
]

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <BackgroundBeams opacity={0.3} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-xl text-gray-400">Crafted with precision, delivered with excellence</p>
        </div>

        <div ref={scrollRef} className="relative h-[600px] perspective-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 border border-white/20 text-lg px-8 py-6 rounded-full"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
