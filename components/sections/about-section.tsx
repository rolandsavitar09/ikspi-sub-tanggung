import Image from "next/image";

import { stats } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="tentang" className="bg-slate-950 px-3 py-12 sm:px-5 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-[0.88fr_1.12fr] items-start gap-3 sm:gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
        <div className="about-image-frame">
          <div className="about-image-frame-inner">
            <Image
              src="/latihan.PNG"
              alt="Gambar latihan perguruan"
              fill
              sizes="(min-width: 1024px) 48vw, 44vw"
              className="object-contain sm:object-cover"
            />
          </div>
        </div>
        <div className="about-copy min-w-0">
          <div className="about-heading-scroll">
            <SectionHeading
              eyebrow="Tentang Kami"
              title={
                <>
                  <span className="block text-[clamp(0.95rem,4.2vw,2.25rem)] sm:text-3xl md:text-4xl">
                    IKSPI Kera Sakti
                  </span>
                  <span className="block whitespace-nowrap text-[clamp(0.68rem,3vw,2.25rem)] sm:text-3xl md:text-4xl">
                    <span className="about-neon-blue">Sub Ranting</span>{" "}
                    <span className="about-neon-red">Tanggung</span>
                  </span>
                </>
              }
              align="left"
            />
          </div>
          <p className="mt-3 text-[0.63rem] leading-4 text-white/75 sm:mt-7 sm:text-base sm:leading-8">
            IKSPI Kera Sakti adalah perguruan pencak silat yang berdiri pada 15 Januari
            1980 di Madiun. Sub Ranting Tanggung berkomitmen membentuk pribadi yang
            bermental kuat, berakhlak mulia, dan bermanfaat bagi masyarakat.
          </p>
          <div className="mt-8 hidden grid-cols-4 gap-4 lg:grid">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded border border-blue-500/40 bg-black/25 p-5 text-center">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-xs font-black uppercase text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-4 justify-items-center gap-1.5 sm:mt-0 sm:gap-4 lg:hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex size-16 min-w-0 flex-col items-center justify-center rounded border border-blue-500/40 bg-black/25 p-1 text-center sm:size-auto sm:w-full sm:p-5"
            >
              <p className="text-sm font-black leading-none text-white sm:text-3xl sm:leading-normal">{stat.value}</p>
              <p className="mt-1 max-w-full text-[0.4rem] font-black uppercase leading-tight text-white/65 sm:mt-2 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
