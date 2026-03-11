import Link from "next/link";
import Image from "next/image";

const mediaLogos = [
  "The New York Times",
  "Inc.",
  "Entrepreneur",
  "THE WALL STREET JOURNAL.",
  "CBS",
  "CNN",
  "FOX",
  "SPIKE",
  "MTV",
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[600px]">
        {/* ── LEFT: Text ── */}
        <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-20">
          {/* Eyebrow */}
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-2">
            About
          </p>

          {/* Name heading */}
          <h2 className="font-display text-white font-bold uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Bedros Keuilian
          </h2>

          {/* Gold underline */}
          <div className="w-40 h-[2px] bg-gold mb-8" />

          {/* Body copy */}
          <div className="space-y-5 text-silver/75 text-sm sm:text-base leading-relaxed max-w-xl">
            <p>
              Bedros Keuilian is an American Entrepreneur and a believer in the
              American Dream. He and his family are immigrants who escaped
              communism and came to the United States to find freedom,
              opportunity and a better life.
            </p>
            <p>
              Today Bedros is a serial entrepreneur and investor in over a dozen
              industry leading brands and businesses. He&apos;s the founder of{" "}
              <Link href="#" className="text-gold hover:underline">
                Fit Body Boot Camp
              </Link>
              , three times listed in Inc Magazine as well as Entrepreneur
              Magazine&apos;s 100 fastest growing franchise brands in the world.
              Bedros is the author of the Wall Street Journal Best Selling book{" "}
              <Link href="#" className="text-gold hover:underline">
                Man Up – How To Cut The BS and Dominate In Business and In Life.
              </Link>
            </p>
            <p>
              Bedros believes in the power of the human spirit and uses the
              stage, TV, social media, his podcast and his{" "}
              <Link href="#" className="text-gold hover:underline">
                blog
              </Link>{" "}
              to share his Immigrant Edge and American Dream story to help
              inspire audiences worldwide to get unstuck and reach their fullest
              potential!
            </p>
          </div>

          {/* Media logos */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                className="text-silver/40 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap"
                style={{ fontFamily: "serif" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div className="relative hidden md:block">
          {/* Dark left-edge fade so photo blends into the text column */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />

          {/* Photo placeholder — drop /public/bedros-about.jpg to replace */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1b] via-[#2a2010] to-[#0a0a0a]">
            <Image
              src="/bedros-about-placeholder.svg"
              alt="Bedros Keuilian"
              fill
              className="object-cover object-top grayscale opacity-80"
              priority
            />
          </div>

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
