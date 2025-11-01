"use client"
import React from "react"
import { Facebook, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-xp-bgSoft text-white isolate">
      <div className="w-4/5 mx-auto px-6 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Section - Contact */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex flex-col gap-4">
              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  Tel: <span className="text-white">88014891</span>
                </p>
                <p>
                  Mail:{" "}
                  <a
                    href="k2naysaa@gmail.com"
                    className="hover:underline"
                  >
                    k2naysaa@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61578833769304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/xperience.proydrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="mailto:xperience.proydrs@gmail.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Navigation (Vertical) */}
          <nav className="w-full md:w-auto">
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <a href="#home" className="text-gray-300 hover:text-white transition cursor-pointer">
                Home
              </a>
              <a href="#team" className="text-gray-300 hover:text-white transition cursor-pointer">
                Our Team
              </a>
            </div>
          </nav>

          {/* Right Section - Address (Left Aligned) */}
          <div className="text-sm text-gray-300 text-start self-start">
            <p className="font-medium text-white">Team Byte</p>
            <p className="mt-1">Ulaanbaatar, Mongolia</p>
            <p className="mt-1">Building better web experiences.</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Team Byte. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61578833769304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/xperience.proydrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:xperience.proydrs@gmail.com"
              className="text-gray-400 hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}