"use client";

import { Flame, Joystick, Sparkles } from "lucide-react";
import { experiences } from "@/data/experiences";

const iconMap = {
  game: Joystick,
  challenge: Flame,
  mission: Sparkles,
};

export function ExperienceGrid() {
  return (
    <section className="rounded-4xl border border-neutral-200 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-8 shadow-lg dark:border-white/10 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 sm:p-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            ألعاب وتحديات يومية
          </p>
          <h2 className="text-balance text-3xl font-bold text-neutral-900 dark:text-white">
            تعلّم بالمرح مع ألعاب تفاعلية وروبوتات محادثة في الوقت الحقيقي.
          </h2>
        </div>
        <p className="max-w-xl text-neutral-600 dark:text-neutral-300">
          استكشف مجموعة متنوعة من الأنشطة التفاعلية التي تدرب الاستماع، النطق،
          القراءة، والكتابة مع مكافآت وإنجازات يومية. جميع الألعاب قابلة للتشغيل
          على الهاتف أو المتصفح.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience) => {
          const Icon = iconMap[experience.kind];
          return (
            <article
              key={experience.id}
              className="group relative overflow-hidden rounded-3xl border border-transparent bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl dark:bg-neutral-950/70 dark:hover:border-sky-500/40"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl transition group-hover:translate-x-3 group-hover:-translate-y-3 dark:bg-sky-500/20" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs uppercase tracking-widest text-sky-400 dark:text-sky-300">
                    {experience.kind === "game"
                      ? "لعبة"
                      : experience.kind === "challenge"
                        ? "تحدي"
                        : "مهمة يومية"}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-300">
                    {experience.title}
                  </h3>
                </div>
                <div className="rounded-2xl bg-sky-100/60 p-2 text-sky-600 transition group-hover:bg-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {experience.description}
              </p>
              <div className="relative mt-5 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>يستغرق تقريباً {experience.estimatedMinutes} دقائق</span>
                {experience.premium ? (
                  <span className="rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-500 dark:border-amber-300/50 dark:text-amber-200">
                    Premium
                  </span>
                ) : (
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    مجاني
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

