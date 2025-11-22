"use client";

import { Crown, Gem, Rocket } from "lucide-react";
import { pricingTiers } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconByTier = {
  "المجاني الذهبي": Rocket,
  "Pro المتفاعل": Crown,
  "Elite للأبطال": Gem,
};

export function Pricing() {
  return (
    <section
      id="pricing"
      className="rounded-4xl border border-neutral-200 bg-neutral-900 p-8 text-white shadow-2xl sm:p-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
            جاهز للربحية
          </p>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">
            خطط مدفوعة مرنة، مزايا قوية، وتجربة لا تُقاوم للمستخدمين والشركات.
          </h2>
          <p className="text-neutral-300">
            يمكنك البدء مجاناً ثم الانتقال بسهولة إلى الخطط المدفوعة التي تضيف
            مميزات AI، محتوى حصري، ولوحة مؤشرات قابلة للتصدير للأفراد أو الفرق.
          </p>
        </div>
        <div className="rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80">
          <p>جميع الخطط قابلة للإلغاء في أي وقت وتشمل وضعًا داكنًا بالكامل.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => {
          const Icon = iconByTier[tier.name as keyof typeof iconByTier] ?? Rocket;
          return (
            <article
              key={tier.name}
              className={cn(
                "relative flex h-full flex-col gap-5 overflow-hidden rounded-4xl border border-white/10 bg-neutral-950/60 p-6 backdrop-blur",
                tier.popular && "border-emerald-500/60 bg-emerald-500/10",
              )}
            >
              {tier.popular ? (
                <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-50">
                  الأكثر طلباً
                </span>
              ) : null}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-2 text-sm text-neutral-300">{tier.description}</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-3 text-white/80">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="ml-2 text-sm text-neutral-400">{tier.billing}</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-200">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-2xl bg-white/5 p-3"
                  >
                    <span className="mt-1 inline-flex h-4 w-4 rounded-full border border-white/40" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "default" : "outline"}
                className={cn(
                  "mt-auto w-full rounded-2xl border border-white/20 bg-white/10 text-white hover:bg-white/20",
                  tier.popular && "border-transparent bg-white text-neutral-900 hover:bg-neutral-100",
                )}
              >
                {tier.cta}
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

