"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-400">Ready to start your next project? Get in touch.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 rounded-xl h-14"
              required
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 rounded-xl h-14"
              required
            />
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 rounded-xl min-h-[150px] resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6 rounded-full font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-gray-700 transition-all">
              Send Message
            </span>
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
