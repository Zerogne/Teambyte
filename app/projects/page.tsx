import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Info } from "lucide-react"
import Navbar from "@/components/navbar"

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management.",
    image: "/modern-ecommerce-website.png",
    previewUrl: "https://example.com",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics platform with real-time data visualization and reporting tools.",
    image: "/saas-dashboard-analytics.jpg",
    previewUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative showcase for digital artists with gallery and contact features.",
    image: "/creative-portfolio-website.png",
    previewUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Mobile App Landing",
    description: "App launch page with interactive elements and download links.",
    image: "/mobile-app-landing-page.jpg",
    previewUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Corporate Website",
    description: "Professional presence for enterprise clients with service pages.",
    image: "/corporate-business-website.png",
    previewUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Restaurant Platform",
    description: "Online ordering and reservation system with menu management.",
    image: "/restaurant-website-design.png",
    previewUrl: "https://example.com",
  },
  {
    id: 7,
    title: "Fitness App",
    description: "Workout tracking and nutrition planning platform.",
    image: "/fitness-app-interface.png",
    previewUrl: "https://example.com",
  },
  {
    id: 8,
    title: "Real Estate Portal",
    description: "Property listing and search platform with virtual tours.",
    image: "/real-estate-website-hero.png",
    previewUrl: "https://example.com",
  },
  {
    id: 9,
    title: "Education Platform",
    description: "Online learning management system with course creation tools.",
    image: "/education-platform-interface.png",
    previewUrl: "https://example.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">All Projects</h1>
            <p className="text-xl text-gray-400">Explore our complete portfolio of digital excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <Card
                key={project.id}
                className="group bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500"
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
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex gap-3">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 rounded-full bg-transparent"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </Link>

                    <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
