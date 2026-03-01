import { Button } from "@/components/ui/button";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 border-t border-slate-200 py-10 overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-800">
              Daily <span className="text-red-500">Spot</span>
            </h2>
            <p className="mt-1.5 text-slate-500 text-sm">
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            {[
              { href: "https://twitter.com", label: "Twitter", Icon: AiOutlineTwitter },
              { href: "https://instagram.com", label: "Instagram", Icon: AiOutlineInstagram },
              { href: "https://github.com", label: "Github", Icon: AiOutlineGithub },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-200 pt-6 md:flex md:justify-between md:items-center text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-slate-600 font-medium">Daily Spot</span>. All rights reserved.
          </p>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-red-400 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 text-sm px-5"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;