import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navItems = [
    {
      name: 'The Lodge',
      path: '/lodge',
    },
    {
      name: 'Rooms',
      path: '/rooms',
    },
    {
      name: 'Dining',
      path: '/dining',
    },
    {
      name: 'Experiences',
      path: '/experiences',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
  ]

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[#11100d]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >

      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">

        {/* LOGO */}

        <Link
          to="/"
          className="relative z-50"
        >

          <div className="font-serif text-xl tracking-[0.18em]">
            ARUSHA
          </div>

          <div className="mt-0.5 text-[8px] tracking-[0.42em] text-white/60">
            GIRAFFE LODGE
          </div>

        </Link>


        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] uppercase tracking-[0.2em] transition ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {item.name}
            </Link>

          ))}

          <Link
            to="/contact"
            className="ml-3 border border-white/40 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#11100d]"
          >
            Book Your Stay
          </Link>

        </nav>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#11100d]">

          <nav className="flex flex-col items-center gap-8">

            {navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className="font-serif text-3xl"
              >
                {item.name}
              </Link>

            ))}

            <Link
              to="/contact"
              className="mt-4 border border-white/40 px-8 py-4 text-[10px] uppercase tracking-[0.25em]"
            >
              Book Your Stay
            </Link>

          </nav>

        </div>

      )}

    </header>
  )
}

export default Navbar