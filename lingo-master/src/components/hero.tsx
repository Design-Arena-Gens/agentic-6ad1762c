"use client";

import { Sparkles, Sparkle, Languages, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, index) => ({
        style: {
          animationDelay: `${index * 0.8}s`,
        },
      })),
    [],
  );

  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/30 bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 p-10 text-white shadow-2xl">
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-black/30 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
            <Sparkles className="h-5 w-5 text-amber-300" />
            <span className="text-sm font-medium tracking-wide uppercase">
              مرحباً بك في Lingo Master ᴬᴵ
            </span>
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            تعلّم أي لغة في العالم عبر المرح، الذكاء الاصطناعي، والألعاب
            الغامرة.
          </h1>
          <p className="text-balance text-lg leading-relaxed text-white/90 lg:text-xl">
            صمّم رحلتك من الصفر حتى الاحتراف مع تمارين صوتية، قصص تفاعلية،
            ألعاب تنافسية، ومسارات معتمدة للامتحانات الدولية. اختر لغتك الأم،
            حدّد أهدافك، ودع Lingo Master يرافقك.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="shadow-lg shadow-emerald-500/30">
              ابدأ رحلة لغتك
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/40 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link href="#pricing">اكتشف مزايا العضوية المدفوعة</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Languages className="h-4 w-4" /> أكثر من 70 لغة متاحة
            </span>
            <span className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" /> ألعاب وتحدّيات يومية
            </span>
            <span className="flex items-center gap-2">
              <Sparkle className="h-4 w-4" /> خطط مخصصة وذكاء اصطناعي حيّ
            </span>
          </div>
        </div>
        <div className="relative mt-10 w-full max-w-md lg:mt-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-black/20 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/80">
                <span className="block text-xs tracking-wide uppercase">
                  خطة الذكاء الاصطناعي
                </span>
                <span className="text-lg font-semibold">رحلة إسبانية مكثفة</span>
              </div>
              <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                موصى به لك
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-white/90">
              <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                <div className="rounded-full bg-emerald-500/30 p-2">
                  <Sparkle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">محادثة صباحية بالذكاء الاصطناعي</p>
                  <p className="text-xs text-white/70">
                    تدريب نطق مع تغذية راجعة لحظية وتحليل للأخطاء.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                <div className="rounded-full bg-sky-500/30 p-2">
                  <Sparkle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">رحلة ثقافية حية</p>
                  <p className="text-xs text-white/70">
                    غامر في قصة تفاعلية مع خيارات متعددة النهايات.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                <div className="rounded-full bg-indigo-500/30 p-2">
                  <Sparkle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">بطاقات المراجعة الذكية</p>
                  <p className="text-xs text-white/70">
                    مراجعة متباعدة تتكيف مع مستوى التحدّي لديك.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="absolute -top-6 right-6 flex gap-2">
            {sparkles.map((props, index) => (
              <span
                key={index}
                className="h-3 w-3 animate-ping rounded-full bg-amber-300 opacity-70"
                style={props.style}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

