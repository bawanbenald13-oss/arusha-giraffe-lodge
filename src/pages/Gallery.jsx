import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90',
    alt: 'African safari landscape',
    title: 'The Wild',
    category: 'Tanzania',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=90',
    alt: 'African landscape',
    title: 'Open Horizons',
    category: 'Landscape',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1600&q=90',
    alt: 'Tanzania landscape',
    title: 'Beyond',
    category: 'Journey',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2000&q=90',
    alt: 'Dining experience',
    title: 'Around the Table',
    category: 'Dining',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=90',
    alt: 'Luxury hotel room',
    title: 'Rest',
    category: 'Rooms',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=90',
    alt: 'Hotel bedroom',
    title: 'Slow Mornings',
    category: 'Rooms',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=90',
    alt: 'African wildlife',
    title: 'Into the Wild',
    category: 'Wildlife',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1600&q=90',
    alt: 'African city',
    title: 'Arusha',
    category: 'Culture',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?auto=format&fit=crop&w=1600&q=90',
    alt: 'Mountain landscape',
    title: 'Higher',
    category: 'Mountains',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=90',
    alt: 'Elephant in Tanzania',
    title: 'Giants',
    category: 'Wildlife',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1600&q=90',
    alt: 'African sunset',
    title: 'Golden Hour',
    category: 'Landscape',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90',
    alt: 'Safari landscape',
    title: 'The Journey',
    category: 'Safari',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=90',
    alt: 'African mountains',
    title: 'Wild Country',
    category: 'Adventure',
    size: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90',
    alt: 'Travel experience',
    title: 'Away',
    category: 'Travel',
    size: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=90',
    alt: 'African culture',
    title: 'The People',
    category: 'Culture',
    size: 'small',
  },
]

function Gallery() {
  return (
    <main className="bg-[#11100d] text-[#f5f1e8]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[88vh] items-end overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=90"
          alt="Tanzania wildlife"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-black/10 to-black/30" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 md:px-10 md:pb-24 lg:px-14">

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
                05
              </span>

              <div className="h-px w-14 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Gallery
              </span>

            </div>

            <h1 className="max-w-6xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-[9rem]">

              See the

              <br />

              <span className="italic font-light text-white/75">
                journey.
              </span>

            </h1>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-lg text-sm leading-7 text-white/65">
                A glimpse of the lodge, the landscapes and the moments
                that make northern Tanzania unforgettable.
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/50">

                <ArrowDown size={14} />

                Explore the gallery

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

              A place worth

              <br />

              <span className="italic text-white/35">
                remembering.
              </span>

            </motion.h2>

            <p className="text-sm leading-8 text-white/50">
              From quiet mornings at the lodge to wide-open landscapes
              beyond Arusha, every part of the journey has a story.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          EDITORIAL GALLERY
      ========================================================= */}

      <section className="px-6 pb-32 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                The collection
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Life at the lodge
              </h2>

            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/30 md:block">
              15 moments
            </p>

          </div>


          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {images.map((image, index) => (

              <motion.figure
                key={`${image.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.75,
                  delay: index % 2 === 0 ? 0 : 0.08,
                }}
                className={`group relative overflow-hidden ${
                  image.size === 'large'
                    ? 'min-h-[650px] md:min-h-[800px]'
                    : 'min-h-[480px] md:min-h-[580px]'
                }`}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index > 1 ? 'lazy' : 'eager'}
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5 opacity-80 transition duration-500 group-hover:opacity-100" />

                <figcaption className="absolute bottom-0 left-0 right-0 p-7 md:p-10">

                  <p className="text-[8px] uppercase tracking-[0.35em] text-white/50">
                    {image.category}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                    {image.title}
                  </h3>

                </figcaption>

              </motion.figure>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CINEMATIC BREAK
      ========================================================= */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90"
          alt="Safari"
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
              Northern Tanzania
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-7xl lg:text-8xl">

              Come see it

              <br />

              <span className="italic text-white/65">
                for yourself.
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

          <div className="relative overflow-hidden bg-[#171612] px-8 py-24 md:px-16 md:py-32">

            <div className="max-w-5xl">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                Your story
              </p>

              <h2 className="mt-7 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">

                The best

                <br />

                <span className="italic text-white/40">
                  photographs are yours.
                </span>

              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/45">
                Come experience Arusha and create memories of your
                own.
              </p>

              <Link
                to="/contact"
                className="mt-12 inline-flex items-center gap-5 bg-black px-8 py-5 text-[9px] font-medium uppercase tracking-[0.25em] !text-white transition duration-300 hover:bg-[#050505]"
              >

                <span className="!text-white">
                  Book Your Stay
                </span>

                <span className="text-white">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Gallery