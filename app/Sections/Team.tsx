"use client"
import SplitText from "@/components/SplitText"
import DotGrid from "@/components/DotGrid"
import { Facebook, Instagram, Github, Globe } from "lucide-react"

type TeamMember = {
    name: string
    title: string
    avatar?: string
    links?: {
        facebook?: string
        instagram?: string
        github?: string
        portfolio?: string
    }
}

function normalizeUrl(url?: string) {
    if (!url) return undefined
    const trimmed = url.trim()
    if (/^https?:\/\//i.test(trimmed)) return trimmed
    if (trimmed.startsWith('www.')) return `https://${trimmed}`
    if (trimmed.startsWith('#')) return trimmed
    return `https://${trimmed}`
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Bayarbayasgalan.U",
        title: "PM · Lead Developer",
        avatar: "https://images8.alphacoders.com/483/483462.png",
        links: {
            facebook: "https://www.facebook.com/profile.php?id=61581622687198",
            instagram: "https://www.instagram.com/xuji877/",
            github: "https://www.github.com/zerogne",
        },
    },
    {
        name: "Ashidbat.A",
        title: "Frontend Developer",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb34N79_25Qvdze3AEKBpgrVV7zWyNLwr_Q&s",
        links: {
            facebook: "https://www.facebook.com/share/17K1Grb4SV/",
            instagram: "https://www.instagram.com/ashidbat?igsh=c3Q0N3c3ZnJ2NjVx"
        },
    },
    { name: "Saranmisheel.S", 
        title: "Designer",
        avatar: "https://i.pinimg.com/736x/32/e5/48/32e548dda7f52ac3b5452a48aa57a5b2.jpg",
        links: { facebook: "https://www.facebook.com/share/17ZEwokgr5/?mibextid=wwXIfr" , instagram: "https://www.instagram.com/saraqakk?igsh=MW91N2s0Y2dzdW5jNA%3D%3D&utm_source=qr" } },
    { name: "Sanchirbold.L",
         title: "",
         avatar: "https://xp-hazel-eta.vercel.app/saran-ochir-profile.jpg",
         links: { facebook:"https://www.facebook.com/lkh.sanchir", instagram:"https://www.instagram.com/lkhsanchir/" } },
    {
        name: "Sukhbat.E",
        title: "Researcher",
        avatar: "https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg",
        links: {
            facebook: "https://www.facebook.com/Kaesamabn",
            instagram: "https://www.instagram.com/kaebnaa/",
        },
    },
]

export default function Team(){
    return(
        <div id="team" className="w-full h-full rounded-8xl bg-transparent mt-12 flex flex-col px-12">
            <div className="headline w-full h-auto flex flex-col items-center justify-center mt-24">
                <SplitText
                    text="Meet Our Team"
                    className="text-4xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>

            <section className="w-full relative mt-16 pb-10">
                <div className="flex flex-nowrap gap-x-6 w-full px-8 mx-auto">
                    {TEAM_MEMBERS.map((member) => (
                        <div key={member.name} className="relative h-96 flex-1 min-w-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_-8px_24px_-10px_rgba(255,255,255,0.20),0_16px_32px_-12px_rgba(0,0,0,0.45)] hover:shadow-[0_-10px_28px_-12px_rgba(255,255,255,0.45),0_24px_40px_-12px_rgba(0,0,0,0.6)] transition-shadow">
                            <DotGrid
                                className="opacity-40 pointer-events-none"
                                dotSize={8}
                                gap={18}
                                baseColor="#ffffff20"
                                activeColor="#ffffff"
                                proximity={120}
                                shockRadius={220}
                                shockStrength={6}
                                resistance={1000}
                                returnDuration={1.2}
                            />
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/20 to-black/40" />
                            
                            {/* Name and Title at Top */}
                            <div className="absolute top-4 left-4 right-4 flex items-center gap-3 z-[100]">
                                {member.avatar && (
                                    <img
                                        src={member.avatar}
                                        alt={`${member.name} avatar`}
                                        className="h-10 w-10 rounded-full border border-white/20 object-cover"
                                    />
                                )}
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs uppercase tracking-wide text-white/70">{member.title}</p>
                                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                </div>
                            </div>

                            {/* Social Buttons at Bottom */}
                            {member.links && (
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-start gap-2 z-[100]">
                                    {member.links.facebook && (
                                        <a href={normalizeUrl(member.links.facebook)} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                            <Facebook className="size-4" />
                                        </a>
                                    )}
                                    {member.links.instagram && (
                                        <a href={normalizeUrl(member.links.instagram)} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                            <Instagram className="size-4" />
                                        </a>
                                    )}
                                    {member.links.github && (
                                        <a href={normalizeUrl(member.links.github)} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                            <Github className="size-4" />
                                        </a>
                                    )}
                                    {member.links.portfolio && (
                                        <a href={normalizeUrl(member.links.portfolio)} target="_blank" rel="noopener noreferrer" aria-label="Website" className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                            <Globe className="size-4" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
