import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const rooms = [
  {
    name: 'Deluxe Double',
    description:
      'A peaceful retreat designed for slow mornings, restful evenings and everything in between.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=90',
    details: 'Double Bed · Garden Views',
  },
  {
    name: 'Deluxe Twin',
    description:
      'A refined and comfortable space for travellers looking to experience Arusha together.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=90',
    details: 'Twin Beds · Garden Views',
  },
  {
    name: 'Deluxe Single',
    description:
      'An intimate room offering everything you need for a comfortable stay in northern Tanzania.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=90',
    details: 'Single Bed · Garden Views',
  },
]

function Rooms() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[88vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2400&q=90"
          alt="Luxury lodge room"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAYS */}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-transparent" />


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-[1500px] items-end px-6 pb-20 pt-48 md:px-10 md:pb-24 md:pt-52 lg:px-14 lg:pb-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="w-full"
          >

            <div className="mb-8 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                03
              </span>

              <div className="h-px w-14 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Rooms & Suites
              </span>

            </div>


            <h1 className="max-w-5xl font-serif text-5xl leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[7.8rem] xl:text-[8.5rem]">

              Stay

              <br />

              <span className="italic font-light text-white/75">
                beautifully.
              </span>

            </h1>


            <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

              <p className="max-w-xl text-sm leading-7 text-white/65 md:text-base">
                Thoughtfully designed spaces where comfort, calm and
                the character of Tanzania come together.
              </p>

              <div className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/45 md:flex">

                <ArrowDown size={14} />

                Explore our rooms

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
              }}
              className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[6rem]"
            >

              Your room should feel

              <br />

              <span className="italic text-white/35">
                like a retreat.
              </span>

            </motion.h2>

            <p className="max-w-md text-sm leading-8 text-white/45">
              After a day exploring Arusha and the surrounding landscapes,
              return to a space designed for rest, privacy and comfort.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          ROOMS
      ========================================================= */}

      <section className="px-6 pb-32 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                Accommodation
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Choose your stay
              </h2>

            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/30 md:block">
              03 rooms
            </p>

          </div>


          <div className="space-y-8">

            {rooms.map((room, index) => (

              <motion.article
                key={room.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="group grid overflow-hidden bg-[#171612] lg:grid-cols-[1.15fr_0.85fr]"
              >

                {/* IMAGE */}

                <div className="relative min-h-[430px] overflow-hidden md:min-h-[600px]">

                  <img
                    src={room.image}
                    alt={room.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute left-7 top-7 md:left-10 md:top-10">

                    <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                      0{index + 1}
                    </span>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">

                  <div>

                    <p className="text-[8px] uppercase tracking-[0.4em] text-white/30">
                      Accommodation
                    </p>

                    <h3 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                      {room.name}
                    </h3>

                    <div className="mt-7 h-px w-14 bg-white/20" />

                    <p className="mt-7 max-w-md text-sm leading-8 text-white/45">
                      {room.description}
                    </p>

                    <p className="mt-7 text-[9px] uppercase tracking-[0.25em] text-white/30">
                      {room.details}
                    </p>

                  </div>


                  {/* BOOK BUTTON */}

                  <div className="mt-14">

                    <Link
                      to="/contact"
                      className="group/button inline-flex items-center gap-5 bg-black px-7 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
                    >

                      <span className="!text-white">
                        Book Your Stay
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-white transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                      />

                    </Link>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          EXPERIENCE BREAK
      ========================================================= */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90"
          alt="Tanzania safari landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-[#11100d]/10" />

        <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 text-center">

          <motion.div
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
              duration: 1,
            }}
          >

            <p className="mb-7 text-[9px] uppercase tracking-[0.45em] text-white/60">
              Beyond your room
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-7xl lg:text-8xl">

              Wake up

              <br />

              <span className="italic text-white/65">
                to Tanzania.
              </span>

            </h2>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px] text-center">

          <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
            Your stay awaits
          </p>

          <h2 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">

            Find your

            <br />

            <span className="italic text-white/40">
              perfect room.
            </span>

          </h2>

          <Link
            to="/contact"
            className="group mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.3em] !text-white transition duration-300 hover:bg-[#050505]"
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

      </section>

    </main>
  )
}

export default Rooms