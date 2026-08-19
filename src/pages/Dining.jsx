import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Dining() {
  return (
    <main className="bg-[#f5f1e8] text-[#211f1a]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[88vh] items-end overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2400&q=90"
          alt="Dining experience"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-[1500px] items-end px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-44 lg:px-14 lg:pt-48">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >

            <div className="mb-8 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/75">
                03
              </span>

              <div className="h-px w-14 bg-[#d6b873]/70" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/75">
                Dining
              </span>

            </div>

            <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] text-white md:text-8xl lg:text-[9rem]">

              Gather.

              <br />

              <span className="italic font-light text-white/80">
                Eat. Enjoy.
              </span>

            </h1>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-lg text-sm leading-7 text-white/75">
                Relaxed dining, warm hospitality and a place to enjoy
                good food after a day discovering Tanzania.
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/65">

                <ArrowDown size={14} />

                Discover dining

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
              className="max-w-6xl font-serif text-5xl leading-[0.95] tracking-[-0.03em]"
            >

              Good food is

              <br />

              <span className="italic text-[#a58b55]">
                part of the journey.
              </span>

            </motion.h2>


            <div>

              <p className="text-sm leading-8 text-[#5f5a50]">
                After a day spent on the road, exploring Arusha or
                discovering Tanzania's wildlife, there is nothing better
                than sitting down to a relaxed meal.
              </p>

              <p className="mt-7 text-sm leading-8 text-[#81796b]">
                Our dining experience is designed to be comfortable,
                welcoming and uncomplicated — giving you time to enjoy
                the moment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED DINING IMAGE
      ========================================================= */}

      <section className="px-6 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="relative min-h-[650px] overflow-hidden md:min-h-[750px]">

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2200&q=90"
              alt="Fresh food"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

            <div className="absolute bottom-0 left-0 max-w-2xl p-8 md:p-14 lg:p-16">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/65">
                Around the table
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-none text-white md:text-7xl">

                Fresh.

                <br />

                <span className="italic text-white/75">
                  Simple. Satisfying.
                </span>

              </h2>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DINING EXPERIENCES
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-16">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#a58b55]">
              The dining experience
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight">

              Made for

              <br />

              <span className="italic text-[#a58b55]">
                lingering.
              </span>

            </h2>

          </div>


          <div className="grid border-t border-[#211f1a]/15 md:grid-cols-3">

            <div className="border-b border-[#211f1a]/15 py-10 md:border-r md:pr-10">

              <span className="font-serif text-2xl text-[#b9a883]">
                01
              </span>

              <h3 className="mt-8 font-serif text-3xl">
                Breakfast
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6f685c]">
                Start your morning slowly with a relaxed breakfast
                before heading out for the day.
              </p>

            </div>


            <div className="border-b border-[#211f1a]/15 py-10 md:border-r md:px-10">

              <span className="font-serif text-2xl text-[#b9a883]">
                02
              </span>

              <h3 className="mt-8 font-serif text-3xl">
                Dinner
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6f685c]">
                Return from your adventures and settle into an easy
                evening over good food.
              </p>

            </div>


            <div className="border-b border-[#211f1a]/15 py-10 md:pl-10">

              <span className="font-serif text-2xl text-[#b9a883]">
                03
              </span>

              <h3 className="mt-8 font-serif text-3xl">
                Together
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6f685c]">
                Whether travelling with family, friends or someone
                special, meals are better when shared.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECOND IMAGE
      ========================================================= */}

      <section className="px-6 md:px-10 lg:px-14">

        <div className="mx-auto grid max-w-[1500px] gap-0 lg:grid-cols-2">

          <div className="relative min-h-[600px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=90"
              alt="Restaurant dining"
              className="absolute inset-0 h-full w-full object-cover"
            />

          </div>


          <div className="flex items-center bg-[#ebe5d8] p-10 md:p-16 lg:p-20">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#a58b55]">
                An easy evening
              </p>

              <h2 className="mt-7 font-serif text-4xl leading-tight md:text-5xl">

                Leave the day

                <br />

                <span className="italic text-[#8d7b58]">
                  behind you.
                </span>

              </h2>

              <div className="my-10 h-px w-16 bg-[#b9a883]" />

              <p className="max-w-lg text-sm leading-8 text-[#5f5a50]">
                Some of the best moments of travel happen when
                nothing needs to be rushed.
              </p>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#81796b]">
                Sit down, enjoy your meal and let the stories from
                the day unfold around the table.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2400&q=90"
          alt="Dining atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

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

            <p className="mb-7 text-[9px] uppercase tracking-[0.45em] text-white/70">
              Evenings at the lodge
            </p>

            <h2 className="font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl">

              Stay for

              <br />

              <span className="italic text-white/75">
                another story.
              </span>

            </h2>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden bg-[#ebe5d8] px-8 py-24 md:px-16 md:py-32">

            <div className="max-w-4xl">

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#a58b55]">
                Your stay
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">

                Eat well.

                <br />

                <span className="italic text-[#8d7b58]">
                  Stay longer.
                </span>

              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[#6f685c]">
                Make your stay in Arusha a little more memorable.
              </p>

              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-5 bg-[#211f1a] px-8 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-[#f8f5ed] transition duration-300 hover:bg-[#302c25]"
              >

                <span className="!text-[#f8f5ed]">
                  Book Your Stay
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-[#d6b873]"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Dining