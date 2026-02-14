import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* logo */}
        <div className="text-xl font-bold"><Link href="/">Daily Spot</Link></div>
        
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-8">
            <NavigationMenuItem>
                <NavigationMenuLink href="/news" className="hover:text-red-500">News</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700">
                  <Link href="/services" className="hover:text-red-500">Services</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 rounded-md px-3 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink href="/services/web">Web Development</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/app">App Development</NavigationMenuLink>
                    </li>
                      <NavigationMenuLink href="/services/ai">AI/ML</NavigationMenuLink>
                    <li></li>
                    <li>
                      <NavigationMenuLink href="/services/seo">SEO</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="hover:text-red-500">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="hover:text-red-500">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* dark mode and login button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="m-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile hamburger menu */}
        <Button className="lg:hidden"><IoMdMenu size={24}/></Button>
      </nav>
    </header>
  )
}

export default Navbar