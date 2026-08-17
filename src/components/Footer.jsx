import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0c0a]">

      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-14">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <div className="font-serif text-3xl tracking-[0.15em]">
              ARUSHA
            </div>

            <div className="mt-1 text-[8px] tracking-[0.45em] text-white/40">
              GIRAFFE LODGE
            </div>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
              A warm and welcoming stay in Arusha, Tanzania —
              a comfortable gateway to the landscapes, wildlife
              and adventures of East Africa.
            </p>

          </div>


          {/* EXPLORE */}

          <div>

            <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-white/35">
              Explore
            </p>

            <div className="flex flex-col gap-4">

              <Link
                to="/lodge"
                className="text-sm text-white/60 transition hover:text-white"
              >
                The Lodge
              </Link>

              <Link
                to="/rooms"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Rooms
              </Link>

              <Link
                to="/dining"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Dining
              </Link>

              <Link
                to="/experiences"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Experiences
              </Link>

              <Link
                to="/gallery"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Gallery
              </Link>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-white/35">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/55">

              <p>
                Sakina, Arusha
                <br />
                Tanzania
              </p>

              <a
                href="tel:+255000000000"
                className="block transition hover:text-white"
              >
                +255 XXX XXX XXX
              </a>

              <a
                href="mailto:info@arushagiraffelodge.com"
                className="block transition hover:text-white"
              >
                info@arushagiraffelodge.com
              </a>

            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-[9px] uppercase tracking-[0.2em] text-white/25 md:flex-row">

          <p>
            © {new Date().getFullYear()} Arusha Giraffe Lodge
          </p>

          <Link
            to="/contact"
            className="flex items-center gap-2 transition hover:text-white"
          >
            Make an enquiry
            <ArrowUpRight size={12} />
          </Link>

        </div>

      </div>

    </footer>
  )
}

export default Footer