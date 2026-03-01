"use client"
import { useContext, useState } from "react"
import { ThemeContext } from "@/context/themeContext"
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ContactPage = () => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const bg = isDarkMode ? "bg-gray-900" : "bg-white";
  const text = isDarkMode ? "text-white" : "text-slate-800";
  const muted = isDarkMode ? "text-gray-400" : "text-slate-500";
  const card = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-slate-50 border-neutral-100";
  const divider = isDarkMode ? "border-gray-700" : "border-slate-200";
  const input = isDarkMode
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-red-400"
    : "bg-white border-gray-300 text-slate-800 placeholder-gray-400 focus:ring-red-400";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: <AiOutlineMail size={20} />, label: "Email", value: "hello@dailyspot.com" },
    { icon: <AiOutlinePhone size={20} />, label: "Phone", value: "+1 (555) 012-3456" },
    { icon: <AiOutlineEnvironment size={20} />, label: "Address", value: "123 Press Lane, New York, NY 10001" },
  ];

  const socials = [
    { href: "https://twitter.com", label: "Twitter", Icon: AiOutlineTwitter },
    { href: "https://instagram.com", label: "Instagram", Icon: AiOutlineInstagram },
    { href: "https://github.com", label: "Github", Icon: AiOutlineGithub },
  ];

  const topics = ["General Inquiry", "News Tip", "Advertising", "Partnership", "Technical Support", "Other"];

  return (
    <main className={`${bg} ${text} min-h-screen transition-colors duration-200`}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-red-500 mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            We would Love to <span className="text-red-500">Hear</span> From You
          </h1>
          <p className={`max-w-xl mx-auto text-sm sm:text-base leading-relaxed ${muted}`}>
            Whether you have a news tip, a question, or just want to say hello — our team is here and ready to respond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — Contact Info */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              <h2 className={`text-lg sm:text-xl font-bold mb-5 ${text}`}>Contact Info</h2>
              <ul className="space-y-5">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${muted}`}>{info.label}</p>
                      <p className={`text-sm sm:text-base font-medium ${text}`}>{info.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Card */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              <h2 className={`text-lg sm:text-xl font-bold mb-4 ${text}`}>Follow Us</h2>
              <div className="flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-red-500 hover:text-white hover:border-red-500 ${
                      isDarkMode ? "border-gray-600 text-gray-400" : "border-slate-200 text-slate-500"
                    }`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Hours Card */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              <h2 className={`text-lg sm:text-xl font-bold mb-4 ${text}`}>Office Hours</h2>
              <ul className="space-y-2">
                {[
                  { day: "Mon – Fri", hours: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row) => (
                  <li key={row.day} className={`flex justify-between text-sm ${muted}`}>
                    <span className="font-medium">{row.day}</span>
                    <span>{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className={`lg:col-span-2 rounded-2xl border p-6 sm:p-8 ${card}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl mb-5">
                  ✓
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${text}`}>Message Sent!</h3>
                <p className={`text-sm sm:text-base max-w-sm ${muted}`}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 border border-red-400 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className={`text-xl sm:text-2xl font-bold mb-6 ${text}`}>Send Us a Message</h2>
                <div className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-md border text-sm outline-none focus:ring-2 transition-colors duration-200 ${input}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-md border text-sm outline-none focus:ring-2 transition-colors duration-200 ${input}`}
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Topic</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-md border text-sm outline-none focus:ring-2 transition-colors duration-200 ${input}`}
                    >
                      <option value="">Select a topic...</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-2.5 rounded-md border text-sm outline-none focus:ring-2 transition-colors duration-200 resize-none ${input}`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md text-sm font-bold tracking-wide transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={`border-t ${divider}`} />
    </main>
  )
}

export default ContactPage