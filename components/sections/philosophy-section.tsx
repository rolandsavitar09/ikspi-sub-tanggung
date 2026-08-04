import { philosophyItems } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function PhilosophySection() {
  return (
    <section id="filosofi" className="bg-black px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Filosofi Perguruan" />
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {philosophyItems.map((item) => (
            <article
              key={item.title}
              className={cn(
                "philosophy-card rounded border bg-slate-950/80 p-6",
                item.tone === "red"
                  ? "philosophy-card-red border-red-500/50"
                  : "philosophy-card-blue border-blue-500/50",
              )}
            >
              <p className="text-lg font-black uppercase text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
