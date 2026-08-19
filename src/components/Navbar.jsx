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

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Prevent the page underneath the menu from scrolling
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

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
      name: 'Your Stay',
      path: '/stay',
    },
  ]

  return (
    <>
      {/* =========================================================
          DESKTOP / MOBILE HEADER
      ========================================================= */}

      <header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled && !menuOpen
            ? 'border-b border-white/10 bg-[#11100d]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[104px] max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-[120] flex items-center gap-3 md:gap-4"
          >

            <img
              src="/images/logo.png"
              alt="Arusha Giraffe Lodge"
              className="h-14 w-14 object-contain md:h-[68px] md:w-[68px]"
            />

            <div className="leading-none">

              <div className="font-serif text-lg tracking-[0.18em] md:text-xl">
                ARUSHA
              </div>

              <div className="mt-1 text-[7px] tracking-[0.42em] text-white/60 md:text-[8px]">
                GIRAFFE LODGE
              </div>

            </div>

          </Link>


          {/* =====================================================
              DESKTOP NAV
          ===================================================== */}

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


          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[120] flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >

            {menuOpen ? (
              <X
                size={25}
                strokeWidth={1.25}
              />
            ) : (
              <Menu
                size={25}
                strokeWidth={1.25}
              />
            )}

          </button>

        </div>
      </header>


      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <div
        className={`fixed inset-0 z-[90] bg-[#11100d] transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >

        {/* subtle background glow */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-black/40 blur-3xl" />

        </div>


        {/* =====================================================
            MENU CONTENT
        ===================================================== */}

        <div className="relative flex h-full flex-col px-6 pt-[125px] pb-10 md:px-10">

          {/* small label */}

          <div
            className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
              menuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >

            <span className="text-[8px] uppercase tracking-[0.45em] text-white/35">
              Arusha Giraffe Lodge
            </span>

            <div className="h-px w-10 bg-white/15" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
              Menu
            </span>

          </div>


          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <nav className="flex flex-col">

            {navItems.map((item, index) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between border-b border-white/10 py-5 transition-all duration-700 ${
                  menuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: menuOpen
                    ? `${index * 70 + 100}ms`
                    : '0ms',
                }}
              >

                <div className="flex items-center gap-5">

                  <span className="text-[8px] tracking-[0.25em] text-white/25">
                    0{index + 1}
                  </span>

                  <span className="font-serif text-3xl leading-none text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                    {item.name}
                  </span>

                </div>

                <span className="text-xs text-white/20 transition group-hover:text-white/60">
                  ↗
                </span>

              </Link>

            ))}

          </nav>


          {/* =====================================================
              BOOKING
          ===================================================== */}

          <div
            className={`mt-auto transition-all duration-700 ${
              menuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
            style={{
              transitionDelay: menuOpen ? '500ms' : '0ms',
            }}
          >

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-between border border-white/20 px-6 py-5 transition duration-300 hover:border-white/50 hover:bg-white hover:text-[#11100d]"
            >

              <span className="text-[9px] uppercase tracking-[0.3em]">
                Book Your Stay
              </span>

              <span className="text-lg">
                ↗
              </span>

            </Link>


            <div className="mt-6 flex items-center justify-between">

              <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Arusha · Tanzania
              </p>

              <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Est. Lodge
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar