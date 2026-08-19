import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const rooms = [
  {
    number: '01',
    name: 'Double Deluxe Room',
    description:
      'A peaceful retreat designed for slow mornings, restful evenings and everything in between. Thoughtfully appointed for couples seeking comfort and privacy in Arusha.',
    details: 'Double Bed · Private Bathroom',
    hero: '/images/rooms/double-deluxe/hero.jpg',
    detail: '/images/rooms/double-deluxe/detail.jpg',
    bathroom: '/images/rooms/double-deluxe/bathroom.jpg',
  },
  {
    number: '02',
    name: 'Double Deluxe Room · Extra Bed',
    description:
      'A spacious and comfortable retreat with the flexibility of an additional bed, making it ideal for couples, families or travellers staying together.',
    details: 'Double Bed · Extra Bed · Private Bathroom',
    hero: '/images/rooms/double-deluxe-extra/hero.jpg',
    detail: '/images/rooms/double-deluxe-extra/detail.jpg',
    bathroom: '/images/rooms/double-deluxe-extra/bathroom.jpg',
  },
  {
    number: '03',
    name: 'Twin Deluxe Room',
    description:
      'A refined room designed for travellers sharing the journey, with twin beds and a calm atmosphere made for returning to after a day in northern Tanzania.',
    details: 'Twin Beds · Private Bathroom',
    hero: '/images/rooms/twin-deluxe/hero.jpg',
    detail: '/images/rooms/twin-deluxe/detail.jpg',
    bathroom: '/images/rooms/twin-deluxe/bathroom.jpg',
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
          src={rooms[0].hero}
          alt="Double Deluxe Room at Arusha Giraffe Lodge"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-transparent" />

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
                02
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


          <div className="space-y-32">

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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="group"
              >

                {/* =================================================
                    ROOM HEADER
                ================================================= */}

                <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
                      Accommodation
                    </p>

                    <h3 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.95] tracking-[-0.02em] md:text-6xl lg:text-7xl">
                      {room.name}
                    </h3>

                  </div>

                  <span className="hidden text-[9px] uppercase tracking-[0.35em] text-white/30 md:block">
                    {room.number}
                  </span>

                </div>


                {/* =================================================
                    HERO ROOM IMAGE
                ================================================= */}

                <div className="relative overflow-hidden">

                  <img
                    src={room.hero}
                    alt={room.name}
                    className="h-[55vh] min-h-[420px] w-full object-cover transition duration-[1600ms] ease-out group-hover:scale-[1.025] md:h-[72vh]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10">

                    <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                      0{index + 1} / 03
                    </span>

                  </div>

                </div>


                {/* =================================================
                    ROOM INFORMATION
                ================================================= */}

                <div className="grid gap-12 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
                      The room
                    </p>

                    <div className="mt-6 h-px w-14 bg-white/20" />

                    <p className="mt-7 text-[9px] uppercase tracking-[0.25em] text-white/35">
                      {room.details}
                    </p>

                  </div>

                  <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                    <p className="max-w-xl text-sm leading-8 text-white/45 md:text-base">
                      {room.description}
                    </p>

                    <Link
                      to="/contact"
                      className="group/button inline-flex shrink-0 items-center gap-5 bg-black px-7 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
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


                {/* =================================================
                    VISUAL STORY
                ================================================= */}

                <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">

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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="relative overflow-hidden md:mt-24"
                  >

                    <img
                      src={room.detail}
                      alt={`${room.name} interior`}
                      className="h-[420px] w-full object-cover transition duration-[1400ms] ease-out hover:scale-105 md:h-[560px]"
                    />

                  </motion.div>


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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                    }}
                    className="relative overflow-hidden"
                  >

                    <img
                      src={room.bathroom}
                      alt={`${room.name} bathroom`}
                      className="h-[500px] w-full object-cover transition duration-[1400ms] ease-out hover:scale-105 md:h-[680px]"
                    />

                    <div className="absolute bottom-7 left-7">

                      <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                        Private details
                      </span>

                    </div>

                  </motion.div>

                </div>


                {/* =================================================
                    ROOM CLOSING
                ================================================= */}

                <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    {room.name}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    0{index + 1}
                  </p>

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
          src="/images/rooms/double-deluxe/detail.jpg"
          alt="Inside Arusha Giraffe Lodge"
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