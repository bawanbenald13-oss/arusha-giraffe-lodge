import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const experiences = [
  {
    number: '01',
    title: 'Safari',
    subtitle: 'Into the wild',
    description:
      'Northern Tanzania is home to some of Africa’s most extraordinary wildlife and landscapes. Let your stay in Arusha be the beginning of the journey.',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90',
  },
  {
    number: '02',
    title: 'Mount Meru',
    subtitle: 'Higher perspectives',
    description:
      'Discover the dramatic landscapes surrounding Arusha and experience the mountain scenery that makes this part of Tanzania so distinctive.',
    image: '/images/experiences/mount-meru.jpg',
  },
  {
    number: '03',
    title: 'Arusha',
    subtitle: 'The city around you',
    description:
      'Take time to discover Arusha itself — its people, markets, food, culture and everyday rhythm.',
    image:
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=2000&q=90',
  },
  {
    number: '04',
    title: 'Tanzania',
    subtitle: 'More to discover',
    description:
      'From your base in Arusha, an entire country of landscapes, wildlife and culture opens up ahead of you.',
    image:
      'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=2000&q=90',
  },
]

function Experiences() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[90vh] items-end overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=90"
          alt="African wildlife"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-black/10 to-black/30" />

        {/* Added top spacing so the fixed navbar doesn't overlap 04 — Experiences */}

        <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1500px] items-end px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-44 lg:px-14 lg:pt-48">

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

            <div className="mb-8 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                04
              </span>

              <div className="h-px w-14 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Experiences
              </span>

            </div>

            <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">

              Go beyond

              <br />

              <span className="italic font-light text-white/75">
                the lodge.
              </span>

            </h1>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-lg text-sm leading-7 text-white/65">
                Arusha is more than a place to stay. It is the doorway
                to some of Tanzania's most unforgettable experiences.
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/50">

                <ArrowDown size={14} />

                Explore Tanzania

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

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

              Wake up

              <br />

              <span className="italic text-white/35">
                curious.
              </span>

            </motion.h2>


            <div>

              <p className="text-sm leading-8 text-white/55">
                Every stay can become the beginning of something
                bigger. Wildlife, mountains, culture and landscapes
                are all within reach from Arusha.
              </p>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Whether you have one free afternoon or several days
                to explore, Tanzania gives you plenty of reasons to
                step outside.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          EXPERIENCE LIST
      ========================================================= */}

      <section className="px-6 pb-32 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-7">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                Discover
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Experiences around you
              </h2>

            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/30 md:block">
              04 experiences
            </p>

          </div>


          <div className="space-y-24">

            {experiences.map((experience, index) => (

              <motion.article
                key={experience.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                }}
              >

                <div className="grid overflow-hidden bg-[#171612] lg:grid-cols-2">

                  {/* IMAGE */}

                  <div
                    className={`group relative min-h-[550px] overflow-hidden lg:min-h-[650px] ${
                      index % 2 !== 0 ? 'lg:order-2' : ''
                    }`}
                  >

                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute left-8 top-8 md:left-10 md:top-10">

                      <span className="font-serif text-2xl text-white">
                        {experience.number}
                      </span>

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div
                    className={`flex items-center p-10 md:p-14 lg:p-20 ${
                      index % 2 !== 0 ? 'lg:order-1' : ''
                    }`}
                  >

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                        Experience
                      </p>

                      <h3 className="mt-6 font-serif text-5xl leading-none md:text-7xl">
                        {experience.title}
                      </h3>

                      <p className="mt-5 font-serif text-xl italic text-white/40">
                        {experience.subtitle}
                      </p>

                      <div className="my-10 h-px w-16 bg-white/20" />

                      <p className="max-w-lg text-sm leading-8 text-white/50">
                        {experience.description}
                      </p>

                      <Link
                        to="/contact"
                        className="group mt-10 inline-flex items-center gap-4 border-b border-white/20 pb-3 text-[9px] uppercase tracking-[0.25em] !text-white transition hover:border-white"
                      >

                        <span className="!text-white">
                          Plan your experience
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />

                      </Link>

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SAFARI MOMENT
      ========================================================= */}

      <section className="relative min-h-[75vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90"
          alt="Safari landscape"
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
              Northern Tanzania
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-7xl lg:text-8xl">

              Some places

              <br />

              <span className="italic text-white/65">
                stay with you.
              </span>

            </h2>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          TRAVEL PHILOSOPHY
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                The journey
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">

                Don't just

                <br />

                <span className="italic text-white/35">
                  visit.
                </span>

              </h2>

            </div>


            <div>

              <p className="text-base leading-8 text-white/55">
                Travel is about more than checking places off a list.
                It is about the moments between them — the people you
                meet, the landscapes you remember and the stories you
                take home.
              </p>

              <p className="mt-8 text-base leading-8 text-white/40">
                Stay at Arusha Giraffe Lodge and give yourself the time
                to experience Tanzania at your own pace.
              </p>


              <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

                <div>

                  <p className="font-serif text-3xl">
                    01
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Discover
                  </p>

                </div>

                <div>

                  <p className="font-serif text-3xl">
                    02
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Experience
                  </p>

                </div>

                <div>

                  <p className="font-serif text-3xl">
                    03
                  </p>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Remember
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
                Start exploring
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">

                Your next

                <br />

                <span className="italic text-white/40">
                  adventure awaits.
                </span>

              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/45">
                Come back to a comfortable room after a day spent
                discovering Tanzania.
              </p>

              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
              >

                <span className="!text-white">
                  Plan Your Stay
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

export default Experiences