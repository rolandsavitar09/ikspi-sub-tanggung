import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-white md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative size-14">
            <Image
              src="/Logo IKSPI Kera Sakti 1980.png"
              alt="Logo IKSPI Kera Sakti"
              fill
              quality={100}
              sizes="56px"
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-black uppercase">IKSPI Kera Sakti</p>
            <p className="text-sm font-bold uppercase text-white/70">Sub Ranting Tanggung</p>
          </div>
        </div>
        <p className="max-w-md text-sm text-white/65">
          WARGA IKS DAPAT PATAH TANGANNYA, DAPAT PATAH KAKINYA, TAPI TIDAK DAPAT DITAKLUKKAN SELAMA TIDAK PATAH IKS NYA.
        </p>
        <p className="text-xs text-white/45">© 2026 IKSPI Kera Sakti Sub Ranting Tanggung.</p>
      </div>
    </footer>
  );
}
