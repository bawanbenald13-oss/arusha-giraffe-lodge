import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C6A568]/30 bg-[#EEE9DE]/90 text-[#302C25] backdrop-blur-2xl">

      {/* =========================================================
          SUBTLE GLASS ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#FFFDF8]/70 blur-[120px]" />

        <div className="absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[#C6A568]/[0.07] blur-[130px]" />

        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#C6A568]/[0.04]" />

      </div>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">


        {/* =======================================================
            BRAND HEADER
        ======================================================= */}

        <div className="mb-20 flex flex-col justify-between gap-10 border-b border-[#302C25]/10 pb-14 lg:flex-row lg:items-end">

          <div>

            <div className="flex items-center gap-4">

              <span className="h-px w-8 bg-[#C6A568]" />

              <span className="text-[8px] uppercase tracking-[0.42em] text-[#8B8171]">
                Arusha · Tanzania
              </span>

            </div>


            <h2 className="mt-7 font-serif text-4xl tracking-[0.16em] text-[#302C25] md:text-5xl lg:text-6xl">
              ARUSHA
            </h2>

            <p className="mt-3 text-[8px] tracking-[0.48em] text-[#B08D50]">
              GIRAFFE LODGE
            </p>

          </div>


          <p className="max-w-md text-sm leading-7 text-[#6F685D] lg:text-right">
            A warm and welcoming retreat in Arusha, Tanzania —
            your gateway to the landscapes, wildlife and
            adventures of East Africa.
          </p>

        </div>


        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">


          {/* =====================================================
              BRAND MESSAGE
          ===================================================== */}

          <div className="lg:col-span-2">

            <p className="max-w-md font-serif text-2xl leading-relaxed text-[#302C25] md:text-3xl">
              Stay close to the heart of
              <span className="text-[#B08D50]"> Tanzania.</span>
            </p>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#756E63]">
              From peaceful mornings to unforgettable days
              exploring northern Tanzania, Arusha Giraffe Lodge
              offers a comfortable base for discovering the region.
            </p>

          </div>


          {/* =====================================================
              EXPLORE
          ===================================================== */}

          <div>

            <p className="mb-7 text-[8px] uppercase tracking-[0.38em] text-[#B08D50]">
              Explore
            </p>

            <div className="flex flex-col gap-4">

              {[
                ['The Lodge', '/lodge'],
                ['Rooms', '/rooms'],
                ['Dining', '/dining'],
                ['Experiences', '/experiences'],
                ['Your Stay', '/stay'],
              ].map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="
                    group flex w-fit items-center
                    text-sm text-[#5F5A51]
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-[#302C25]
                  "
                >
                  <span className="mr-3 h-px w-0 bg-[#C6A568] transition-all duration-300 group-hover:w-4" />

                  {name}
                </Link>
              ))}

            </div>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div>

            <p className="mb-7 text-[8px] uppercase tracking-[0.38em] text-[#B08D50]">
              Contact
            </p>

            <div className="space-y-5 text-sm leading-6 text-[#696258]">

              <p>
                Sakina, Arusha
                <br />
                Tanzania
              </p>

              <a
                href="tel:+255746380392"
                className="
                  block w-fit
                  transition-colors duration-300
                  hover:text-[#B08D50]
                "
              >
                +255 746 380 392
              </a>

              <a
                href="mailto:info@arusha-giraffelodge.com"
                className="
                  block w-fit
                  transition-colors duration-300
                  hover:text-[#B08D50]
                "
              >
                info@arusha-giraffelodge.com
              </a>

            </div>

          </div>

        </div>


        {/* =======================================================
            ENQUIRY GLASS PANEL
        ======================================================= */}

        <div
          className="
            mt-20
            border border-[#C6A568]/30
            bg-white/30
            backdrop-blur-xl
          "
        >

          <div className="flex flex-col justify-between gap-8 px-6 py-7 sm:px-8 md:flex-row md:items-center md:px-10">

            <div>

              <p className="text-[8px] uppercase tracking-[0.35em] text-[#B08D50]">
                Plan Your Stay
              </p>

              <p className="mt-2 font-serif text-xl text-[#302C25]">
                Begin your Arusha experience.
              </p>

            </div>


            <Link
              to="/contact"
              className="
                group
                flex w-fit items-center
                border border-[#B08D50]
                px-7 py-4
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-[#302C25]
                transition-all duration-400
                hover:bg-[#C6A568]
                hover:text-white
              "
            >
              <span>
                Make an Enquiry
              </span>

              <span
                className="
                  ml-5
                  h-px w-5
                  bg-[#B08D50]
                  transition-all duration-400
                  group-hover:w-8
                  group-hover:bg-white
                "
              />
            </Link>

          </div>

        </div>


        {/* =======================================================
            BOTTOM
        ======================================================= */}

        <div
          className="
            mt-10
            flex flex-col
            justify-between
            gap-5
            border-t border-[#302C25]/10
            pt-7
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[#8B8171]
            md:flex-row
          "
        >

          <p>
            © {new Date().getFullYear()} Arusha Giraffe Lodge
          </p>

          <p className="text-[#B08D50]">
            Arusha · Tanzania
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer