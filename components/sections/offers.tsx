"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Code, Palette, Rocket, Zap, Globe, Shield, Sparkles } from "lucide-react"
import { MagicBento, BentoItem } from "@/components/effects/magic-bento"

const offers = [
  {
    name: "Minimum",
    price: "$2,999",
    description: "Perfect for startups and small businesses",
    features: ["Single page website", "Responsive design", "Basic SEO optimization", "1 month support"],
  },
  {
    name: "Essentials",
    price: "$5,999",
    description: "Ideal for growing businesses",
    features: ["Multi-page website", "Custom design system", "Advanced SEO", "CMS integration", "3 months support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$12,999",
    description: "For established enterprises",
    features: [
      "Full web application",
      "Custom animations",
      "E-commerce integration",
      "API development",
      "Performance optimization",
      "6 months support",
    ],
  },
  {
    name: "Custom",
    price: "Contact Us",
    description: "Tailored solutions for unique needs",
    features: [
      "Unlimited pages",
      "Advanced integrations",
      "Dedicated team",
      "Priority support",
      "Custom features",
      "12 months support",
    ],
  },
]

export default function Offers() {
  return (
    <section id="offers" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Offers</h2>
          <p className="text-xl text-gray-400">Choose the perfect plan for your business</p>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">What We Deliver</h3>
          <MagicBento>
            <BentoItem colSpan={2} rowSpan={2}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Code className="w-12 h-12 text-white mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-3">Clean Code Architecture</h4>
                  <p className="text-gray-400">
                    We build scalable, maintainable applications using industry best practices and modern frameworks.
                    Every line of code is crafted with precision and performance in mind.
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">React</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">TypeScript</span>
                </div>
              </div>
            </BentoItem>

            <BentoItem>
              <Palette className="w-10 h-10 text-white mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">Stunning Design</h4>
              <p className="text-gray-400 text-sm">Pixel-perfect interfaces that captivate users</p>
            </BentoItem>

            <BentoItem>
              <Zap className="w-10 h-10 text-white mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">Lightning Fast</h4>
              <p className="text-gray-400 text-sm">Optimized for speed and performance</p>
            </BentoItem>

            <BentoItem colSpan={1} rowSpan={2}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Shield className="w-10 h-10 text-white mb-3" />
                  <h4 className="text-xl font-bold text-white mb-2">Enterprise Security</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Bank-level security protocols to protect your data and users
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-4 h-4" />
                    <span>SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-4 h-4" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-4 h-4" />
                    <span>Regular Audits</span>
                  </div>
                </div>
              </div>
            </BentoItem>

            <BentoItem colSpan={1} rowSpan={2}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Rocket className="w-10 h-10 text-white mb-3" />
                  <h4 className="text-xl font-bold text-white mb-2">Rapid Deployment</h4>
                  <p className="text-gray-400 text-sm mb-4">From concept to production in record time</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-3xl font-bold text-white">2-4</div>
                  <div className="text-sm text-gray-400">Weeks Average</div>
                </div>
              </div>
            </BentoItem>

            <BentoItem colSpan={2}>
              <div className="flex items-center justify-between h-full">
                <div>
                  <Globe className="w-10 h-10 text-white mb-3" />
                  <h4 className="text-xl font-bold text-white mb-2">Global Scale</h4>
                  <p className="text-gray-400 text-sm">Built to handle millions of users worldwide</p>
                </div>
                <Sparkles className="w-16 h-16 text-white/20" />
              </div>
            </BentoItem>
          </MagicBento>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <Card
              key={offer.name}
              className={`relative p-8 bg-gradient-to-br from-gray-900 to-black border ${
                offer.popular ? "border-white/40 shadow-2xl shadow-white/10" : "border-white/10"
              } rounded-2xl hover:border-white/30 transition-all duration-300`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{offer.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{offer.description}</p>
                <div className="text-4xl font-bold text-white">{offer.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  offer.popular
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
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
      `}</style>
    </section>
  )
}
