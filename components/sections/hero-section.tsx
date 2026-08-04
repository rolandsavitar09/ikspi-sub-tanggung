import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative flex flex-col justify-start overflow-hidden bg-black px-4 pb-8 pt-24 text-white sm:min-h-[100svh] sm:justify-between sm:px-6 sm:pb-7 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.92))]" />

      <div className="absolute left-[-1.75rem] top-[5.7rem] h-52 w-52 opacity-35 sm:inset-y-16 sm:left-[-14%] sm:h-auto sm:w-[56vw] sm:opacity-25 sm:mix-blend-screen lg:left-[2%] lg:w-[34vw]">
        <div className="absolute inset-x-3 top-[-1.25rem] h-36 rounded-full bg-blue-700/30 blur-2xl sm:hidden" />
        <Image
          src="/Logo IKSPI Kera Sakti 1980.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="(min-width: 1024px) 34vw, (min-width: 640px) 56vw, 208px"
          className="relative z-10 object-contain mix-blend-screen drop-shadow-[0_0_18px_rgba(37,99,235,0.5)] sm:drop-shadow-none"
        />
      </div>

      <div className="absolute right-[-2.5rem] top-[5.5rem] h-56 w-56 opacity-[0.36] sm:inset-y-12 sm:right-[-16%] sm:h-auto sm:w-[60vw] sm:opacity-30 sm:mix-blend-screen lg:right-[0%] lg:w-[38vw]">
        <div className="absolute inset-x-3 top-[-1.5rem] h-40 rounded-full bg-red-700/30 blur-2xl sm:hidden" />
        <Image
          src="/logo ks tanggungs.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 224px"
          className="relative z-10 object-contain mix-blend-screen drop-shadow-[0_0_18px_rgba(220,38,38,0.52)] sm:drop-shadow-none"
        />
      </div>

      <div className="hero-color-glow absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-none flex-col items-center justify-start pt-8 pb-1 text-center sm:flex-1 sm:justify-center sm:pt-0 sm:pb-16">
        <h1 className="hero-title-animate max-w-5xl text-[clamp(2.9rem,8.5vw,7.4rem)] font-black uppercase leading-[0.86] tracking-normal text-white [text-shadow:0_4px_0_rgba(0,0,0,0.9),0_12px_28px_rgba(0,0,0,0.95)]">
          <span className="hero-title-grunge" data-text="IKSPI">
            IKSPI
          </span>
          <span className="hero-title-grunge block" data-text="KERA SAKTI">
            Kera Sakti
          </span>
        </h1>

        <p className="hero-subtitle-animate mt-3 text-[clamp(1.7rem,5vw,4.2rem)] font-black uppercase leading-none">
          <span className="hero-subtitle-neon-blue">Sub Ranting</span>{" "}
          <span className="hero-subtitle-neon-red">Tanggung</span>
        </p>

        <div className="mt-4 flex w-full max-w-3xl items-center gap-3 px-3 sm:mt-5 sm:gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 shadow-[0_0_16px_rgba(37,99,235,0.9)]" />
          <div className="size-4 rotate-45 border border-white/50 bg-black/70 shadow-[0_0_18px_rgba(255,255,255,0.4)]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-red-600 to-red-600 shadow-[0_0_16px_rgba(220,38,38,0.9)]" />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs font-semibold text-white sm:mt-6 sm:gap-x-4 sm:gap-y-2 sm:text-xl">
          <span>Ranting Garum</span>
          <span className="size-1.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,1)]" />
          <span>Cabang Blitar</span>
          <span className="size-1.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,1)]" />
          <span>Jawa Timur</span>
        </div>

        <div className="mt-6 flex w-full max-w-sm flex-row justify-center gap-2 px-0 sm:mt-10 sm:max-w-2xl sm:gap-4 sm:px-0">
          <a
            className="hero-cta-3d hero-cta-3d-red group flex h-11 flex-1 items-center justify-center gap-2 rounded border border-red-500 bg-red-950/45 px-2 text-[0.72rem] font-black uppercase text-white transition hover:bg-red-700/80 sm:h-16 sm:min-w-64 sm:flex-none sm:gap-5 sm:px-8 sm:text-xl"
            href="#arsip"
          >
            Lihat Arsip
            <span className="text-lg transition group-hover:translate-x-1 sm:text-2xl">&gt;</span>
          </a>
          <a
            className="hero-cta-3d hero-cta-3d-blue group flex h-11 flex-1 items-center justify-center gap-2 rounded border border-blue-500 bg-blue-950/40 px-2 text-[0.72rem] font-black uppercase text-white transition hover:bg-blue-700/75 sm:h-16 sm:min-w-64 sm:flex-none sm:gap-5 sm:px-8 sm:text-xl"
            href="#jadwal"
          >
            Lihat Latihan
            <span className="text-lg transition group-hover:translate-x-1 sm:text-2xl">&gt;</span>
          </a>
        </div>
      </div>

      <a
        href="#tentang"
        className="relative z-10 mx-auto mt-2 flex flex-col items-center gap-1 text-[0.65rem] font-black uppercase text-white/90 sm:mt-0 sm:mb-4 sm:gap-2 sm:text-xs"
        aria-label="Scroll ke bagian tentang"
      >
        <span className="relative block h-9 w-5 rounded-full border-2 border-white/80 sm:h-12 sm:w-7">
          <span className="absolute left-1/2 top-1.5 h-2.5 w-1 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(220,38,38,1)] sm:top-2 sm:h-3" />
        </span>
        <span>Scroll</span>
        <span className="text-base leading-none text-red-500 sm:text-xl">v</span>
      </a>
    </section>
  );
}
