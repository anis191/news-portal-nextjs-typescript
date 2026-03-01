"use client"
import { useContext } from "react"
import { ThemeContext } from "@/context/themeContext"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const team = [
  {
    name: "Aria Nour",
    role: "Editor in Chief",
    bio: "15 years of journalism across 4 continents. Passionate about truth-driven storytelling.",
    avatar: "AN",
    color: "bg-red-500",
  },
  {
    name: "James Okafor",
    role: "Head of Technology",
    bio: "Former software engineer turned tech journalist. Loves breaking down complex ideas.",
    avatar: "JO",
    color: "bg-gray-700",
  },
  {
    name: "Sofia Lenz",
    role: "Science & Environment",
    bio: "PhD in Environmental Science. Covering climate stories that matter.",
    avatar: "SL",
    color: "bg-red-400",
  },
  {
    name: "Marcus Tran",
    role: "Finance & Economy",
    bio: "Wall Street background with a knack for making markets digestible for everyone.",
    avatar: "MT",
    color: "bg-gray-600",
  },
]

const stats = [
  { value: "2M+", label: "Monthly Readers" },
  { value: "50+", label: "Expert Writers" },
  { value: "12", label: "Years of Trust" },
  { value: "80+", label: "Countries Reached" },
]

const values = [
  {
    icon: "🎯",
    title: "Accuracy First",
    desc: "Every story is verified through multiple sources before publication. We never rush the truth.",
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    desc: "News doesn't stop at borders. Our team covers stories from every corner of the world.",
  },
  {
    icon: "⚡",
    title: "Always Current",
    desc: "Breaking news delivered in real time, with context that helps you understand what it means.",
  },
  {
    icon: "🔓",
    title: "Open Access",
    desc: "Quality journalism should be accessible to all. No paywalls, no barriers.",
  },
]

const AboutPage = () => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  const bg = isDarkMode ? "bg-gray-900" : "bg-white";
  const text = isDarkMode ? "text-white" : "text-slate-800";
  const muted = isDarkMode ? "text-gray-400" : "text-slate-500";
  const card = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-slate-50 border-neutral-100";
  const divider = isDarkMode ? "border-gray-700" : "border-slate-200";

  return (
    <main className={`${bg} ${text} min-h-screen transition-colors duration-200`}>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Accent line top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500 mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            News You Can <span className="text-red-500">Trust</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${muted}`}>
            Daily Spot is an independent digital newsroom dedicated to delivering accurate, timely, and meaningful journalism — without the noise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`border-y ${divider}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-extrabold text-red-500">{stat.value}</p>
                <p className={`text-sm sm:text-base mt-1 ${muted}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500 mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug">
              Journalism that holds power accountable
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${muted}`}>
              Founded in 2012, Daily Spot was built on a simple belief: people deserve honest, well-reported news that respects their intelligence. We cover politics, technology, science, finance, and culture — without corporate bias or sensationalism.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${muted}`}>
              Our editorial independence means we answer only to our readers. No advertisers dictate our coverage. No agendas shape our headlines.
            </p>
          </div>

          {/* Visual Card */}
          <div className={`rounded-2xl border p-8 ${card}`}>
            <blockquote className={`text-lg sm:text-xl font-medium italic leading-relaxed ${text}`}>
              The goal of journalism is to inform and empower. At Daily Spot, we take that responsibility seriously — every single day.
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                AN
              </div>
              <div>
                <p className={`font-semibold text-sm ${text}`}>Aria Nour</p>
                <p className={`text-xs ${muted}`}>Editor in Chief</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`border-t ${divider}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500 mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`rounded-2xl border p-6 transition-colors duration-200 hover:border-red-400 ${card}`}
              >
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className={`font-bold text-base sm:text-lg mb-2 ${text}`}>{v.title}</h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`border-t ${divider}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500 mb-3">
              The People Behind It
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className={`rounded-2xl border p-6 text-center transition-colors duration-200 hover:border-red-400 ${card}`}
              >
                <div className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {member.avatar}
                </div>
                <h3 className={`font-bold text-base sm:text-lg ${text}`}>{member.name}</h3>
                <p className="text-red-500 text-xs sm:text-sm font-medium mb-2">{member.role}</p>
                <p className={`text-xs sm:text-sm leading-relaxed ${muted}`}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`border-t ${divider}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the Know</h2>
          <p className={`text-sm sm:text-base mb-8 max-w-xl mx-auto ${muted}`}>
            Get the most important stories delivered to your inbox — no spam, just quality journalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-2.5 rounded-md border text-sm outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                  : "bg-white border-gray-300 text-slate-800 placeholder-gray-400"
              }`}
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}

export default AboutPage