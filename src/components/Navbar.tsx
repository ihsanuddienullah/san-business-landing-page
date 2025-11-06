import { NAVBAR_MENU } from '@/utils/constants'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('#home')

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-blue-600 opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 rounded-full bg-red-600 -ml-2 opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAVBAR_MENU.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setActiveMenu(item.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
              hover:after:w-full after:bg-blue-600 after:transition-all
              ${activeMenu === item.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Button */}
        <button
          className="hidden md:block bg-blue-600 text-white text-sm font-medium transition-all hover:shadow-lg
            hover:shadow-blue-100 px-6 py-2.5 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Get in touch
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {NAVBAR_MENU.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={() => {
                  setActiveMenu(item.href)
                  setMobileMenuOpen(false)
                }}
                className={`block text-sm font-medium py-2
                ${activeMenu === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item.name}
              </a>
            ))}

            {/* Button */}
            <button
              className="w-full bg-blue-600 text-white text-sm font-medium transition-all hover:shadow-lg
                hover:shadow-blue-100 px-6 py-2.5 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
