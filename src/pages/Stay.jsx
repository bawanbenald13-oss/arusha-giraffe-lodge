import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const rooms = [
  {
    number: '01',
    title: 'Double Deluxe Room',
    subtitle: 'Comfort for two',
    description:
      'A warm and comfortable space designed for restful nights and easy mornings in Arusha.',
    folder: '/images/rooms/double-deluxe',
    images: [
      { file: 'hero.jpg', label: 'The room' },
      { file: 'room-02.jpg', label: 'A closer look' },
      { file: 'room-03.jpg', label: 'The space' },
      { file: 'bathroom.jpg', label: 'Bathroom' },
      { file: 'detail.jpg', label: 'The details' },
      { file: 'view.jpg', label: 'The view' },
      { file: 'signature.jpg', label: 'A signature detail' },
    ],
  },

  {
    number: '02',
    title: 'Double Deluxe Room with Extra Bed',
    subtitle: 'More room to settle in',
    description:
      'A spacious option for guests travelling together, with an additional bed and the same relaxed atmosphere.',
    folder: '/images/rooms/double-deluxe-extra',
    images: [
      { file: 'hero.jpg', label: 'The room' },
      { file: 'room-02.jpg', label: 'A closer look' },
      { file: 'room-03.jpg', label: 'The space' },
      { file: 'bathroom.jpg', label: 'Bathroom' },
      { file: 'detail.jpg', label: 'The details' },
      { file: 'view.jpg', label: 'The view' },
      { file: 'signature.jpg', label: 'A signature detail' },
    ],
  },

  {
    number: '03',
    title: 'Twin Deluxe Room',
    subtitle: 'Made for travelling together',
    description:
      'Two comfortable beds and a calm setting make this an easy place to return to after a day exploring Tanzania.',
    folder: '/images/rooms/twin-deluxe',
    images: [
      { file: 'hero.jpg', label: 'The room' },
      { file: 'room-02.jpg', label: 'A closer look' },
      { file: 'room-03.jpg', label: 'The space' },
      { file: 'bathroom.jpg', label: 'Bathroom' },
      { file: 'detail.jpg', label: 'The details' },
      { file: 'view.jpg', label: 'The view' },
      { file: 'signature.jpg', label: 'A signature detail' },
    ],
  },
]

function Stay() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
          NAVBAR OVERLAYS THIS SECTION
      ========================================================= */}

      <section className="relative flex min-h-screen items-end overflow-hidden">

        {/* HERO IMAGE — FULL BLEED TO VERY TOP */}
        <img
          src="/images/rooms/double-deluxe/hero.jpg"
          alt="Double Deluxe Room"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* BOTTOM FADE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-black/10 to-black/25" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:px-14">

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
          >

            {/* PAGE NUMBER */}
            <div className="mb-8 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                05
              </span>

              <div className="h-px w-14 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                The Stay
              </span>

            </div>


            {/* TITLE */}
            <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">

              Take a closer

              <br />

              <span className="font-light italic text-white/75">
                look.
              </span>

            </h1>


            {/* DESCRIPTION */}
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-lg text-sm leading-7 text-white/65">
                Discover the rooms, details and quiet spaces that make
                a stay at Arusha Giraffe Lodge feel like your own.
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/50">

                <ArrowDown size={14} />

                Explore the stay

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-40 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

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
              className="max-w-6xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[6.5rem]"
            >

              Spaces made

              <br />

              <span className="italic text-white/35">
                for slowing down.
              </span>

            </motion.h2>


            <div>

              <p className="text-sm leading-8 text-white/50">
                After a day spent discovering Arusha and the landscapes
                of northern Tanzania, come back to somewhere comfortable.
              </p>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Explore each room through the details that make it yours —
                from the spaces you sleep in to the views beyond them.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ROOMS
      ========================================================= */}

      <section className="px-6 pb-32 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-7">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                The rooms
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                A closer look
              </h2>

            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/30 md:block">
              03 rooms
            </p>

          </div>


          <div className="space-y-32">

            {rooms.map((room, roomIndex) => (

              <motion.article
                key={room.title}
                initial={{
                  opacity: 0,
                  y: 50,
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
              >

                {/* ROOM HEADER */}

                <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

                  <div>

                    <div className="flex items-center gap-5">

                      <span className="font-serif text-2xl text-white">
                        {room.number}
                      </span>

                      <div className="h-px w-12 bg-white/20" />

                      <span className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                        Room
                      </span>

                    </div>

                    <h3 className="mt-7 max-w-3xl font-serif text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
                      {room.title}
                    </h3>

                    <p className="mt-5 font-serif text-xl italic text-white/40">
                      {room.subtitle}
                    </p>

                  </div>


                  <div className="max-w-md lg:ml-auto">

                    <p className="text-sm leading-8 text-white/50">
                      {room.description}
                    </p>

                    <Link
                      to="/rooms"
                      className="mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[9px] uppercase tracking-[0.25em] !text-white transition hover:border-white"
                    >

                      <span className="!text-white">
                        Explore this room
                      </span>

                      <ArrowUpRight
                        size={13}
                        className="text-white"
                      />

                    </Link>

                  </div>

                </div>


                {/* ROOM IMAGE COLLECTION */}

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {room.images.map((image, imageIndex) => (

                    <motion.figure
                      key={image.file}
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
                        amount: 0.12,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: imageIndex * 0.04,
                      }}
                      className={`group relative overflow-hidden ${
                        imageIndex === 0
                          ? 'min-h-[620px] md:col-span-2 md:min-h-[760px]'
                          : imageIndex === 3
                            ? 'min-h-[500px] md:min-h-[600px]'
                            : 'min-h-[480px] md:min-h-[580px]'
                      }`}
                    >

                      <img
                        src={`${room.folder}/${image.file}`}
                        alt={`${room.title} — ${image.label}`}
                        loading={
                          roomIndex === 0 && imageIndex < 2
                            ? 'eager'
                            : 'lazy'
                        }
                        className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5 opacity-70 transition duration-500 group-hover:opacity-100" />

                      <figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-10">

                        <p className="text-[8px] uppercase tracking-[0.35em] text-white/50">
                          {room.title}
                        </p>

                        <h4 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                          {image.label}
                        </h4>

                      </figcaption>

                    </motion.figure>

                  ))}

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          MOUNT MERU
      ========================================================= */}

      <section className="relative min-h-[75vh] overflow-hidden">

        <img
          src="/images/experiences/mount-meru.jpg"
          alt="Mount Meru"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-[#11100d]/10" />

        <div className="relative z-10 flex min-h-[75vh] items-center justify-center px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >

            <p className="mb-7 text-[9px] uppercase tracking-[0.45em] text-white/60">
              Arusha · Tanzania
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-7xl lg:text-8xl">

              Wake up to

              <br />

              <span className="italic text-white/65">
                Tanzania.
              </span>

            </h2>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          EXPERIENCE OF THE STAY
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                The experience
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">

                More than

                <br />

                <span className="italic text-white/35">
                  a room.
                </span>

              </h2>

            </div>


            <div>

              <p className="text-base leading-8 text-white/55">
                A stay is made up of more than where you sleep. It is
                the quiet morning before heading out, the return after
                a day in the wild and the small details you remember
                long after you leave.
              </p>

              <p className="mt-8 text-base leading-8 text-white/40">
                At Arusha Giraffe Lodge, your room becomes a comfortable
                base from which to experience the landscapes, wildlife
                and character of northern Tanzania.
              </p>


              <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

                <div>

                  <p className="font-serif text-3xl">
                    01
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Rest
                  </p>

                </div>

                <div>

                  <p className="font-serif text-3xl">
                    02
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Explore
                  </p>

                </div>

                <div>

                  <p className="font-serif text-3xl">
                    03
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Return
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 pb-32 md:px-10 md:pb-44 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden bg-[#171612] px-8 py-24 md:px-16 md:py-32">

            <div className="max-w-5xl">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                Your stay
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">

                Find your

                <br />

                <span className="italic text-white/40">
                  place in Arusha.
                </span>

              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/45">
                Choose your room and make Arusha Giraffe Lodge
                part of your Tanzanian journey.
              </p>

              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
              >

                <span className="!text-white">
                  Book Your Stay
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-white"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Stay