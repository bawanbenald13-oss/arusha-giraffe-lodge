import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
      ========================================================= */}

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
                className="inline-flex w-fit items-center gap-4 bg-black px-7 py-4 text-[10px] uppercase tracking-[0.2em] !text-white transition hover:bg-[#050505]"
              >

                <span className="!text-white">
                  Explore the Lodge
                </span>

                <ArrowDown
                  size={14}
                  className="text-white"
                />

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

          <p className="mt-1 font-serif text-xl text-white">
            $30
            <span className="text-sm text-white/50">
              {' '}
              / night
            </span>
          </p>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

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
                className="mt-8 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.25em] !text-white transition hover:border-white"
              >

                <span className="!text-white">
                  Discover the lodge
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-white"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
    FEATURED ROOMS
========================================================= */}

<section className="bg-[#151410] px-6 py-28 md:px-10 md:py-40 lg:px-14">

  <div className="mx-auto max-w-[1500px]">

    {/* HEADER */}

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
        className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] !text-white/60 transition hover:!text-white"
      >

        <span>
          View all rooms
        </span>

        <ArrowUpRight
          size={14}
          className="text-white"
        />

      </Link>

    </div>


    {/* ROOMS */}

    <div className="mt-16 grid gap-6 md:grid-cols-3">


      {/* =====================================================
          DOUBLE DELUXE ROOM
      ===================================================== */}

      <Link
        to="/rooms"
        className="group relative h-[560px] overflow-hidden"
      >

        <img
          src="/images/rooms/double-deluxe/hero.jpg"
          alt="Double Deluxe Room"
          className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
        />

        {/* DARK GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* HOVER OVERLAY */}

        <div className="absolute inset-0 bg-black/0 transition duration-700 group-hover:bg-black/15" />


        {/* CONTENT */}

        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50">
                Accommodation
              </p>

              <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                Double Deluxe
                <br />
                Room
              </h3>

            </div>

            <div className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 transition duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#11100d]">

              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

            </div>

          </div>

        </div>

      </Link>


      {/* =====================================================
          DOUBLE DELUXE + EXTRA BED
      ===================================================== */}

      <Link
        to="/rooms"
        className="group relative h-[560px] overflow-hidden"
      >

        <img
          src="/images/rooms/double-deluxe-extra/hero.jpg"
          alt="Double Deluxe Room with Extra Bed"
          className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-black/0 transition duration-700 group-hover:bg-black/15" />


        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50">
                Accommodation
              </p>

              <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                Double Deluxe
                <br />
                <span className="italic font-light">
                  with Extra Bed
                </span>
              </h3>

            </div>

            <div className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 transition duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#11100d]">

              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

            </div>

          </div>

        </div>

      </Link>


      {/* =====================================================
          TWIN DELUXE
      ===================================================== */}

      <Link
        to="/rooms"
        className="group relative h-[560px] overflow-hidden"
      >

        <img
          src="/images/rooms/twin-deluxe/hero.jpg"
          alt="Twin Deluxe Room"
          className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-black/0 transition duration-700 group-hover:bg-black/15" />


        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50">
                Accommodation
              </p>

              <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                Twin Deluxe
                <br />
                <span className="italic font-light">
                  Room
                </span>
              </h3>

            </div>

            <div className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 transition duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#11100d]">

              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

            </div>

          </div>

        </div>

      </Link>

    </div>

  </div>

</section>

      {/* =========================================================
          BOOKING CTA
      ========================================================= */}

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


            {/* BOOK YOUR STAY */}

            <Link
              to="/contact"
              className="group mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[10px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
            >

              <span className="!text-white">
                Book Your Stay
              </span>

              <ArrowUpRight
                size={15}
                className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home