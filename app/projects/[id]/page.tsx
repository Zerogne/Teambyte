import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Calendar, Users } from "lucide-react"
import Navbar from "@/components/navbar"

const projectDetails = {
  1: {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built for modern retail businesses.",
    fullDescription:
      "This project involved creating a full-featured e-commerce platform with advanced inventory management, secure payment processing, and a seamless user experience. The platform handles thousands of products and supports multiple payment gateways.",
    image: "/modern-ecommerce-website.png",
    previewUrl: "https://example.com",
    completedDate: "March 2024",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    process: [
      "Discovery & Research: Understanding client needs and market analysis",
      "Design Phase: Creating wireframes and high-fidelity mockups",
      "Development: Building the platform with modern technologies",
      "Testing: Comprehensive QA and user acceptance testing",
      "Launch: Deployment and post-launch support",
    ],
    developers: ["Alex Morgan", "Sarah Chen"],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id as keyof typeof projectDetails] || projectDetails[1]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/projects">
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-gray-400 mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{project.completedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>{project.developers.join(", ")}</span>
              </div>
            </div>

            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Project
              </Button>
            </a>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.fullDescription}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Development Process</h2>
              <ol className="space-y-4">
                {project.process.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-gray-400 text-lg pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Development Team</h2>
              <div className="flex flex-wrap gap-4">
                {project.developers.map((dev) => (
                  <div
                    key={dev}
                    className="px-6 py-3 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl text-white"
                  >
                    {dev}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
