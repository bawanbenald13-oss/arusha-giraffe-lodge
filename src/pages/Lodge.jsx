import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Lodge() {
  return (
    <main className="bg-[#F7F4EC] text-[#302C25]">

      {/* =========================================================
          HERO
          DIFFERENT FROM HOME — QUIETER / MORE EDITORIAL
      ========================================================= */}

      <section className="relative min-h-[90vh] overflow-hidden">

        {/* IMAGE */}

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=90"
            alt="African landscape surrounding Arusha"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#302C25] via-transparent to-black/20" />

        </div>


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1500px] items-center px-6 py-32 md:px-10 lg:px-14">

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.1,
              ease: 'easeOut',
            }}
            className="max-w-4xl"
          >

            {/* LABEL */}

            <div className="mb-9 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-[#D7BC82]">
                01
              </span>

              <div className="h-px w-14 bg-[#D7BC82]/60" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/70">
                The Lodge
              </span>

            </div>


            {/* HEADING */}

            <h1 className="font-serif text-6xl leading-[0.88] tracking-[-0.04em] text-white md:text-8xl lg:text-[8.5rem]">

              A place

              <br />

              <span className="italic font-light text-[#F7F4EC]/80">
                to arrive.
              </span>

            </h1>


            {/* DESCRIPTION */}

            <div className="mt-10 flex max-w-2xl flex-col gap-7 md:flex-row md:items-end">

              <p className="max-w-lg text-sm leading-7 text-white/70 md:text-base">
                Arusha Giraffe Lodge is a relaxed place to pause,
                settle in and experience the warmth of Tanzania
                before the next part of your journey begins.
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#D7BC82]">

                <ArrowDown size={14} />

                Discover the lodge

              </div>

            </div>

          </motion.div>

        </div>


        {/* SIDE DETAIL */}

        <div className="absolute bottom-8 right-6 z-10 hidden md:block lg:right-14">

          <div className="flex items-center gap-4">

            <div className="h-px w-10 bg-white/25" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-white/55">
              Sakina · Arusha · Tanzania
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-[#F7F4EC] px-6 py-32 md:px-10 md:py-44 lg:px-14">

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
              className="max-w-6xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#302C25] md:text-7xl lg:text-[6.5rem]"
            >

              Your journey

              <br />

              <span className="italic text-[#8B8171]">
                begins here.
              </span>

            </motion.h2>


            <div className="flex flex-col justify-end">

              <p className="text-sm leading-8 text-[#6F685D]">
                Arusha is where many Tanzanian adventures begin.
                From here, the roads lead towards some of East Africa's
                most extraordinary landscapes and wildlife experiences.
              </p>

              <p className="mt-7 text-sm leading-8 text-[#8B8171]">
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

      <section className="bg-[#F7F4EC] px-6 md:px-10 lg:px-14">

        <div className="mx-auto grid max-w-[1500px] gap-0 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative min-h-[650px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=90"
              alt="Tanzania landscape"
              className="absolute inset-0 h-full w-full object-cover"
            />

          </div>


          {/* STORY */}

          <div className="flex items-center bg-[#EDE8DC] p-10 md:p-16 lg:p-20">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#B08D50]">
                The experience
              </p>

              <h2 className="mt-7 font-serif text-4xl leading-tight text-[#302C25] md:text-5xl">

                A slower way

                <br />

                <span className="italic text-[#8B8171]">
                  to experience Africa.
                </span>

              </h2>

              <div className="my-10 h-px w-16 bg-[#C6A568]/60" />

              <p className="max-w-lg text-sm leading-8 text-[#5F5A51]">
                There is something special about having somewhere
                comfortable to return to after a day on the road.
              </p>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#8B8171]">
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

      <section className="bg-[#F7F4EC] px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-16">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#B08D50]">
              What matters
            </p>

            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-[#302C25] md:text-7xl">

              Simple things.

              <br />

              <span className="italic text-[#8B8171]">
                Done well.
              </span>

            </h2>

          </div>


          <div className="grid border-t border-[#302C25]/10 md:grid-cols-3">

            <div className="border-b border-[#302C25]/10 py-10 md:border-r md:pr-10">

              <span className="font-serif text-2xl text-[#B08D50]/70">
                01
              </span>

              <h3 className="mt-8 font-serif text-3xl text-[#302C25]">
                Comfort
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6F685D]">
                A peaceful environment where you can rest properly
                between your Tanzanian adventures.
              </p>

            </div>


            <div className="border-b border-[#302C25]/10 py-10 md:border-r md:px-10">

              <span className="font-serif text-2xl text-[#B08D50]/70">
                02
              </span>

              <h3 className="mt-8 font-serif text-3xl text-[#302C25]">
                Hospitality
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6F685D]">
                Genuine, welcoming service that makes your stay feel
                personal rather than ordinary.
              </p>

            </div>


            <div className="border-b border-[#302C25]/10 py-10 md:pl-10">

              <span className="font-serif text-2xl text-[#B08D50]/70">
                03
              </span>

              <h3 className="mt-8 font-serif text-3xl text-[#302C25]">
                Location
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6F685D]">
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
          alt="African wildlife landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#302C25] via-transparent to-black/20" />


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

            <p className="mb-7 text-[9px] uppercase tracking-[0.45em] text-[#D7BC82]">
              Northern Tanzania
            </p>

            <h2 className="font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl">

              The wild is

              <br />

              <span className="italic text-[#F7F4EC]/75">
                waiting.
              </span>

            </h2>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          LOCATION
      ========================================================= */}

      <section className="bg-[#F7F4EC] px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#B08D50]">
              Location
            </p>

            <h2 className="mt-6 font-serif text-5xl text-[#302C25] md:text-6xl">

              Arusha,

              <br />

              <span className="italic text-[#8B8171]">
                Tanzania.
              </span>

            </h2>

          </div>


          <div>

            <p className="max-w-2xl text-base leading-8 text-[#6F685D]">
              Positioned in Arusha, the lodge offers a convenient
              starting point for travellers exploring northern Tanzania.
            </p>

            <div className="mt-12 grid gap-8 border-t border-[#302C25]/10 pt-10 sm:grid-cols-3">

              <div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-[#8B8171]">
                  Region
                </p>

                <p className="mt-3 text-sm text-[#302C25]">
                  Arusha
                </p>

              </div>


              <div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-[#8B8171]">
                  Country
                </p>

                <p className="mt-3 text-sm text-[#302C25]">
                  Tanzania
                </p>

              </div>


              <div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-[#8B8171]">
                  Experience
                </p>

                <p className="mt-3 text-sm text-[#302C25]">
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

      <section className="bg-[#F7F4EC] px-6 pb-32 md:px-10 md:pb-44 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden bg-[#302C25] px-8 py-24 md:px-16 md:py-32">

            <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#C6A568]/10 blur-[120px]" />

            <div className="relative z-10 max-w-5xl">

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#D7BC82]">
                Come stay with us
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] text-[#F7F4EC] md:text-7xl lg:text-8xl">

                Your African

                <br />

                <span className="italic text-[#D8D0C1]">
                  story starts here.
                </span>

              </h2>


              <Link
                to="/rooms"
                className="mt-12 inline-flex items-center gap-5 bg-[#C6A568] px-8 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-[#302C25] transition duration-300 hover:bg-[#D7BC82]"
              >

                <span className="!text-[#302C25]">
                  Explore our rooms
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-[#302C25]"
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