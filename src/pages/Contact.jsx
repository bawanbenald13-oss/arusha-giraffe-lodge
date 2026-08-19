import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

function Contact() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[88vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=90"
          alt="Tanzania landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-[#11100d]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-transparent" />


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-[1500px] items-end px-6 pb-20 pt-44 md:px-10 md:pb-24 md:pt-48 lg:px-14 lg:pb-28">

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

            {/* LABEL */}

            <div className="mb-8 flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                06
              </span>

              <div className="h-px w-14 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Contact
              </span>

            </div>


            {/* HEADING */}

            <h1 className="max-w-5xl font-serif text-5xl leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[7.8rem] xl:text-[8.5rem]">

              Let's plan

              <br />

              <span className="italic font-light text-white/75">
                your stay.
              </span>

            </h1>


            {/* DESCRIPTION */}

            <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

              <p className="max-w-xl text-sm leading-7 text-white/65 md:text-base">

                Tell us a little about your trip and we'll help you
                plan your stay at Arusha Giraffe Lodge.

              </p>

              <div className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/45 md:flex">

                <span className="h-px w-10 bg-white/20" />

                Begin your journey

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          BOOKING SECTION
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 md:py-36 lg:px-14">

        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT */}

          <div>

            <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
              Reservations
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">

              Make an

              <br />

              <span className="italic text-white/35">
                enquiry.
              </span>

            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
              Complete the form and our team can get back to you
              regarding availability, rooms and your plans in Tanzania.
            </p>


            {/* CONTACT DETAILS */}

            <div className="mt-12 space-y-7 border-t border-white/10 pt-10">

              {/* PHONE */}

              <div className="flex gap-5">

                <Phone
                  size={17}
                  className="mt-1 shrink-0 text-white/40"
                />

                <div>

                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Phone / WhatsApp
                  </p>

                  <a
                    href="tel:+255746380392"
                    className="mt-2 block text-sm text-white/65 transition hover:text-white"
                  >
                    +255 746 380 392
                  </a>

                </div>

              </div>


              {/* EMAIL */}

              <div className="flex gap-5">

                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-white/40"
                />

                <div>

                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Email
                  </p>

                  <a
                    href="mailto:info@arusha-giraffelodge.com"
                    className="mt-2 block text-sm text-white/65 transition hover:text-white"
                  >
                    info@arusha-giraffelodge.com
                  </a>

                </div>

              </div>


              {/* LOCATION */}

              <div className="flex gap-5">

                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-white/40"
                />

                <div>

                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Arusha, Tanzania
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* FORM */}

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
            className="bg-[#171612] p-7 md:p-10 lg:p-14"
          >

            <form className="space-y-9">

              {/* NAME */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/50"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/50"
                />

              </div>


              {/* PHONE */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                >
                  Phone / WhatsApp
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+255 746 380 392"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/50"
                />

              </div>


              {/* DATES */}

              <div className="grid gap-8 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="arrival"
                    className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                  >
                    Arrival
                  </label>

                  <input
                    id="arrival"
                    type="date"
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-white/50"
                  />

                </div>


                <div>

                  <label
                    htmlFor="departure"
                    className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                  >
                    Departure
                  </label>

                  <input
                    id="departure"
                    type="date"
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-white/50"
                  />

                </div>

              </div>


              {/* GUESTS */}

              <div>

                <label
                  htmlFor="guests"
                  className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                >
                  Number of guests
                </label>

                <select
                  id="guests"
                  defaultValue=""
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-white/50"
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#171612]"
                  >
                    Select guests
                  </option>

                  <option className="bg-[#171612]">
                    1 Guest
                  </option>

                  <option className="bg-[#171612]">
                    2 Guests
                  </option>

                  <option className="bg-[#171612]">
                    3 Guests
                  </option>

                  <option className="bg-[#171612]">
                    4 Guests
                  </option>

                  <option className="bg-[#171612]">
                    5+ Guests
                  </option>

                </select>

              </div>


              {/* ROOM */}

              <div>

                <label
                  htmlFor="room"
                  className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                >
                  Preferred room
                </label>

                <select
                  id="room"
                  defaultValue=""
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-white/50"
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#171612]"
                  >
                    Select a room
                  </option>

                  <option className="bg-[#171612]">
                    Double Deluxe Room
                  </option>

                  <option className="bg-[#171612]">
                    Double Deluxe Room with Extra Bed
                  </option>

                  <option className="bg-[#171612]">
                    Twin Deluxe Room
                  </option>

                  <option className="bg-[#171612]">
                    Not sure yet
                  </option>

                </select>

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-3 block text-[8px] uppercase tracking-[0.35em] text-white/35"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your trip..."
                  className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition focus:border-white/50"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.3em] !text-white transition duration-300 hover:bg-[#050505]"
              >

                <span className="!text-white">
                  Send Enquiry
                </span>

                <Send
                  size={14}
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </form>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          LOCATION
      ========================================================= */}

      <section className="relative min-h-[65vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=90"
          alt="Tanzania landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-[#11100d]/10" />

        <div className="relative z-10 flex min-h-[65vh] items-center justify-center px-6 text-center">

          <div>

            <p className="mb-7 text-[9px] uppercase tracking-[0.45em] text-white/60">
              Find us in
            </p>

            <h2 className="font-serif text-6xl md:text-8xl">
              Arusha
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/60">
              Your gateway to northern Tanzania.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 md:py-44 lg:px-14">

        <div className="mx-auto max-w-[1200px] text-center">

          <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
            Arusha Giraffe Lodge
          </p>

          <h2 className="mt-7 font-serif text-5xl leading-none md:text-7xl lg:text-8xl">

            We look forward

            <br />

            <span className="italic text-white/40">
              to welcoming you.
            </span>

          </h2>

          <a
            href="mailto:info@arusha-giraffelodge.com"
            className="group mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.3em] !text-white transition duration-300 hover:bg-[#050505]"
          >

            <span className="!text-white">
              Email the lodge
            </span>

            <ArrowUpRight
              size={15}
              className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </a>

        </div>

      </section>

    </main>
  )
}

export default Contact