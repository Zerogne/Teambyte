"use client"

interface BackgroundBeamsProps {
  opacity?: number
}

export default function BackgroundBeams({ opacity = 0.5 }: BackgroundBeamsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,${opacity * 0.03}) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(255,255,255,${opacity * 0.03}) 50%, transparent 100%)
          `,
          backgroundSize: "100px 100px",
          animation: "beamMove 20s linear infinite",
        }}
      />

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
          style={{
            left: `${20 + i * 20}%`,
            opacity: opacity * 0.1,
            animation: `beamPulse ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {[...Array(5)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${20 + i * 20}%`,
            opacity: opacity * 0.1,
            animation: `beamPulse ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes beamMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes beamPulse {
          0%, 100% {
            opacity: ${opacity * 0.05};
          }
          50% {
            opacity: ${opacity * 0.2};
          }
        }
      `}</style>
    </div>
  )
}
