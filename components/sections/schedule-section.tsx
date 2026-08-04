import { schedules } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function ScheduleSection() {
  return (
    <section id="jadwal" className="schedule-section-bg bg-black px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Jadwal Latihan" title="Jadwal Latihan" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-7 md:grid-cols-2">
          {schedules.map((schedule) => (
            <article
              key={schedule.day}
              className={cn(
                "schedule-card p-6 text-center text-white sm:p-8",
                schedule.tone === "red" ? "schedule-card-red" : "schedule-card-blue",
              )}
            >
              <div className="schedule-icon mx-auto">
                <span className="schedule-calendar-icon" />
              </div>

              <p className="mt-5 text-2xl font-black uppercase">{schedule.day}</p>
              <div className="schedule-card-divider mx-auto mt-3" />
              <p className="mt-5 text-[clamp(3rem,9vw,4.8rem)] font-black leading-none tracking-normal text-white">
                {schedule.time}
              </p>
              <p className="mt-2 text-xl font-black uppercase text-white/50">WIB</p>

              <div className="schedule-location mt-6 flex items-center gap-3 px-4 py-3 text-left">
                <span className="schedule-pin-icon shrink-0" />
                <p className="text-sm font-semibold leading-5 text-white/85">{schedule.title}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="schedule-values mx-auto mt-9 flex max-w-xl items-center justify-center gap-2 px-3 py-3 text-[0.68rem] font-black uppercase text-white/80 sm:gap-3 sm:px-5 sm:text-sm">
          <span className="schedule-people-icon" />
          <span>Disiplin</span>
          <span className="text-red-500">•</span>
          <span>Kerja Keras</span>
          <span className="text-red-500">•</span>
          <span>Kekeluargaan</span>
        </div>
      </div>
    </section>
  );
}
