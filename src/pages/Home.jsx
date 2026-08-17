import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* HERO */}

      <section className="relative flex min-h-screen items-end overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90"
            alt="African landscape"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

        </div>


        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 md:px-10 md:pb-24 lg:px-14 lg:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="max-w-5xl"
          >

            <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-white/70 md:text-xs">
              Sakina · Arusha · Tanzania
            </p>

            <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">

              Stay close

              <br />

              <span className="italic font-light">
                to Africa.
              </span>

            </h1>


            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">

              <Link
                to="/rooms"
                className="inline-flex w-fit items-center gap-4 bg-[#11100d] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-black"
              >
                Explore the Lodge
                <ArrowDown size={14} />
              </Link>


              <p className="max-w-md text-sm leading-relaxed text-white/70">
                A warm African stay in Arusha, designed as a comfortable
                starting point for your Tanzanian journey.
              </p>

            </div>

          </motion.div>

        </div>


        <div className="absolute bottom-6 right-6 z-10 hidden text-right md:block lg:right-14">

          <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
            Rooms from
          </p>

          <p className="mt-1 font-serif text-xl">
            $30
            <span className="text-sm text-white/50">
              {' '}
              / night
            </span>
          </p>

        </div>

      </section>


      {/* INTRO */}

      <section className="px-6 py-28 md:px-10 md:py-40 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-16 flex items-center gap-6">

            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
              01
            </span>

            <div className="h-px w-16 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
              Welcome
            </span>

          </div>


          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[7rem]"
            >
              Your gateway

              <br />

              <span className="italic text-white/40">
                to Tanzania.
              </span>
            </motion.h2>


            <div className="max-w-md">

              <p className="text-sm leading-7 text-white/60 md:text-base">
                Set in Arusha, Arusha Giraffe Lodge offers a relaxed
                place to stay before or after exploring the landscapes
                and wildlife of northern Tanzania.
              </p>


              <Link
                to="/lodge"
                className="mt-8 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.25em] transition hover:border-white"
              >
                Discover the lodge
                <ArrowUpRight size={14} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURED ROOMS */}

      <section className="bg-[#151410] px-6 py-28 md:px-10 md:py-40 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/35">
                Stay with us
              </p>

              <h2 className="font-serif text-5xl md:text-7xl">
                Rooms & stays
              </h2>

            </div>


            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
            >
              View all rooms
              <ArrowUpRight size={14} />
            </Link>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* DOUBLE */}

            <Link
              to="/rooms"
              className="group relative h-[500px] overflow-hidden"
            >

              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85"
                alt="Deluxe Double"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7">

                <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
                  From $45 / night
                </p>

                <h3 className="mt-2 font-serif text-3xl">
                  Deluxe Double
                </h3>

              </div>

            </Link>


            {/* TWIN */}

            <Link
              to="/rooms"
              className="group relative h-[500px] overflow-hidden"
            >

              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
                alt="Deluxe Twin"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7">

                <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
                  From $50 / night
                </p>

                <h3 className="mt-2 font-serif text-3xl">
                  Deluxe Twin
                </h3>

              </div>

            </Link>


            {/* SINGLE */}

            <Link
              to="/rooms"
              className="group relative h-[500px] overflow-hidden"
            >

              <img
                src="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=85"
                alt="Deluxe Single"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7">

                <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
                  From $30 / night
                </p>

                <h3 className="mt-2 font-serif text-3xl">
                  Deluxe Single
                </h3>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* BOOKING CTA */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="border-t border-white/10 pt-16">

            <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-white/35">
              Plan your stay
            </p>

            <h2 className="max-w-5xl font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
              Your Tanzanian
              <br />
              <span className="italic text-white/40">
                journey starts here.
              </span>
            </h2>


            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-4 bg-white px-8 py-5 text-[10px] uppercase tracking-[0.25em] text-[#11100d] transition hover:bg-[#e8e3d8]"
            >
              Book your stay
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home