"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BentoItemProps {
  children: ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
}

export function BentoItem({ children, className = "", colSpan = 1, rowSpan = 1 }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 hover:border-white/30 transition-all duration-300 ${className}`}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

interface MagicBentoProps {
  children: ReactNode
  className?: string
}

export function MagicBento({ children, className = "" }: MagicBentoProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] ${className}`}>
      {children}
    </div>
  )
}
