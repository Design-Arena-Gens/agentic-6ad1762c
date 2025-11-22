"use client";

const metrics = [
  {
    label: "رضا المتعلمين",
    value: "97٪",
    note: "يظلون معنا بعد 60 يومًا",
  },
  {
    label: "تقدم السرعة",
    value: "5x",
    note: "أسرع من الطرق التقليدية",
  },
  {
    label: "لغات مدعومة",
    value: "70+",
    note: "مع لهجات وتخصصات مهنية",
  },
  {
    label: "شركات متحالفة",
    value: "120",
    note: "تستخدم Lingo Master لتدريب فرقها",
  },
];

export function ImpactMetrics() {
  return (
    <section className="rounded-4xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-neutral-900 sm:p-10">
      <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-8 shadow-sm dark:border-white/10 dark:bg-neutral-950"
          >
            <p className="text-4xl font-bold text-neutral-900 dark:text-white">
              {metric.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300">
              {metric.label}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {metric.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

