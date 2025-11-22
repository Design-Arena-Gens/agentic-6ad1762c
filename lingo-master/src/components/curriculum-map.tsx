"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Timer } from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export function CurriculumMap() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeTier = useMemo(() => curriculum[activeIndex], [activeIndex]);

  return (
    <section className="rounded-4xl border border-neutral-200 bg-white p-8 shadow-lg shadow-indigo-100/50 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-300">
            مسار شامل من الصفر حتى الاحتراف
          </p>
          <h2 className="text-balance text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
            تعلم متدرج يعتمد على البيانات مع دعم الذكاء الاصطناعي في كل مرحلة.
          </h2>
        </div>
        <div className="rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/60 px-4 py-3 text-sm text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200">
          <p>كل مستوى يفتح أدوات AI إضافية، موارد ثقافية، وامتحانات حقيقية.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-3">
          {curriculum.map((tier, index) => (
            <button
              key={tier.level}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex w-full items-center justify-between rounded-3xl border px-4 py-4 text-left transition",
                index === activeIndex
                  ? "border-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-xl"
                  : "border-neutral-200 bg-white text-neutral-800 hover:border-indigo-200 hover:bg-indigo-50 dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10",
              )}
            >
              <div>
                <p className="text-xs uppercase tracking-wide opacity-60">
                  {tier.level}
                </p>
                <p className="text-lg font-semibold">{tier.headline}</p>
              </div>
              <ArrowUpRight
                className={cn(
                  "h-5 w-5 transition",
                  index === activeIndex ? "translate-x-1 -translate-y-1" : "",
                )}
              />
            </button>
          ))}
        </div>

        <div className="w-full max-w-xl rounded-4xl border border-neutral-100 bg-neutral-50 p-6 shadow-inner dark:border-white/10 dark:bg-neutral-950">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                تركيز المستوى
              </p>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {activeTier.headline}
              </h3>
            </div>
            <div className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-200">
              {activeTier.level}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {activeTier.focus.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm dark:bg-neutral-900 dark:text-neutral-200"
              >
                {badge}
              </span>
            ))}
          </div>

          <ul className="mt-6 space-y-4">
            {activeTier.skills.map((skill) => (
              <li
                key={skill.title}
                className="group rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-neutral-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                      {skill.title}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {skill.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-xs text-indigo-500 dark:text-indigo-300">
                      <Timer className="h-4 w-4" />
                      <span>{skill.durationMinutes} دقائق</span>
                    </div>
                    {skill.premium ? (
                      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-500 dark:border-indigo-500/60 dark:bg-indigo-500/15 dark:text-indigo-200">
                        Premium
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-500">
                        <CheckCircle2 className="h-4 w-4" />
                        متاح مجاناً
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

