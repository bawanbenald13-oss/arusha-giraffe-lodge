import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Lodge() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[90vh] items-end overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90"
          alt="Tanzania landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-black/10 to-black/30" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 md:px-10 md:pb-24 lg:px-14">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >

            <div className="mb-8 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                01
              </span>

              <div className="h-px w-14 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                The Lodge
              </span>

            </div>

            <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">

              More than

              <br />

              <span className="italic font-light text-white/75">
                somewhere to stay.
              </span>

            </h1>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-lg text-sm leading-7 text-white/65">
                A relaxed base in Arusha. A place to slow down,
                reconnect and prepare for everything Tanzania has
                waiting beyond the lodge.
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/50">

                <ArrowDown size={14} />

                Discover the lodge

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr]">

            <motion.h2
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
              }}
              className="max-w-6xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[6.5rem]"
            >

              Your journey

              <br />

              <span className="italic text-white/35">
                begins here.
              </span>

            </motion.h2>


            <div className="flex flex-col justify-end">

              <p className="text-sm leading-8 text-white/55">
                Arusha is where many Tanzanian adventures begin.
                From here, the roads lead towards some of East Africa's
                most extraordinary landscapes and wildlife experiences.
              </p>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Our lodge gives you a comfortable place to arrive,
                rest and settle into the rhythm of Tanzania before
                continuing your journey.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          IMAGE + STORY
      ========================================================= */}

      <section className="px-6 md:px-10 lg:px-14">

        <div className="mx-auto grid max-w-[1500px] gap-0 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative min-h-[650px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=90"
              alt="African landscape"
              className="absolute inset-0 h-full w-full object-cover"
            />

          </div>


          {/* STORY */}

          <div className="flex items-center bg-[#171612] p-10 md:p-16 lg:p-20">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                The experience
              </p>

              <h2 className="mt-7 font-serif text-4xl leading-tight md:text-5xl">

                A slower way

                <br />

                <span className="italic text-white/35">
                  to experience Africa.
                </span>

              </h2>

              <div className="my-10 h-px w-16 bg-white/20" />

              <p className="max-w-lg text-sm leading-8 text-white/50">
                There is something special about having somewhere
                comfortable to return to after a day on the road.
              </p>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/40">
                At Arusha Giraffe Lodge, the experience is not about
                rushing. It is about good rest, warm hospitality and
                having the space to enjoy where you are.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-16">

            <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
              What matters
            </p>

            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">

              Simple things.

              <br />

              <span className="italic text-white/35">
                Done well.
              </span>

            </h2>

          </div>


          <div className="grid border-t border-white/10 md:grid-cols-3">

            <div className="border-b border-white/10 py-10 md:border-r md:pr-10">

              <span className="font-serif text-2xl text-white/30">
                01
              </span>

              <h3 className="mt-8 font-serif text-3xl">
                Comfort
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                A peaceful environment where you can rest properly
                between your Tanzanian adventures.
              </p>

            </div>


            <div className="border-b border-white/10 py-10 md:border-r md:px-10">

              <span className="font-serif text-2xl text-white/30">
                02
              </span>

              <h3 className="mt-8 font-serif text-3xl">
                Hospitality
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Genuine, welcoming service that makes your stay feel
                personal rather than ordinary.
              </p>

            </div>


            <div className="border-b border-white/10 py-10 md:pl-10">

              <span className="font-serif text-2xl text-white/30">
                03
              </span>

              <h3 className="mt-8 font-serif text-3xl">
                Location
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                A convenient Arusha base for discovering northern
                Tanzania and everything around it.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CINEMATIC IMAGE
      ========================================================= */}

      <section className="relative min-h-[75vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=90"
          alt="African wildlife"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-[#11100d]/20" />


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

              The wild is

              <br />

              <span className="italic text-white/65">
                waiting.
              </span>

            </h2>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          LOCATION
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
              Location
            </p>

            <h2 className="mt-6 font-serif text-5xl md:text-6xl">
              Arusha,
              <br />
              <span className="italic text-white/35">
                Tanzania.
              </span>
            </h2>

          </div>


          <div>

            <p className="max-w-2xl text-base leading-8 text-white/50">
              Positioned in Arusha, the lodge offers a convenient
              starting point for travellers exploring northern Tanzania.
            </p>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

              <div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Region
                </p>

                <p className="mt-3 text-sm text-white/70">
                  Arusha
                </p>

              </div>

              <div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Country
                </p>

                <p className="mt-3 text-sm text-white/70">
                  Tanzania
                </p>

              </div>

              <div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Experience
                </p>

                <p className="mt-3 text-sm text-white/70">
                  Northern Tanzania
                </p>

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

            <div className="relative z-10 max-w-5xl">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                Come stay with us
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">

                Your African

                <br />

                <span className="italic text-white/40">
                  story starts here.
                </span>

              </h2>


              <Link
                to="/rooms"
                className="mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
              >

                <span className="!text-white">
                  Explore our rooms
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

export default Lodge