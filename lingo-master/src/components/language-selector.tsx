"use client";

import { useMemo, useState } from "react";
import { Languages, Sparkles } from "lucide-react";
import { languages, type Language } from "@/data/languages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LanguageSelectorProps = {
  onSelectionChange?: (nativeLang: Language, targetLang: Language) => void;
};

export function LanguageSelector({ onSelectionChange }: LanguageSelectorProps) {
  const [nativeCode, setNativeCode] = useState("ar");
  const [targetCode, setTargetCode] = useState("en");
  const [filter, setFilter] = useState("");

  const filteredLanguages = useMemo(() => {
    if (!filter.trim()) {
      return languages;
    }
    const normalized = filter.toLowerCase();
    return languages.filter(
      (language) =>
        language.name.toLowerCase().includes(normalized) ||
        language.family.toLowerCase().includes(normalized) ||
        language.regions.some((region) =>
          region.toLowerCase().includes(normalized),
        ),
    );
  }, [filter]);

  const nativeLanguage = useMemo(
    () => languages.find((lang) => lang.code === nativeCode) ?? languages[0],
    [nativeCode],
  );

  const targetLanguage = useMemo(
    () =>
      languages.find((lang) => lang.code === targetCode && lang.code !== nativeCode) ??
      languages.find((lang) => lang.code !== nativeCode) ??
      languages[0],
    [targetCode, nativeCode],
  );

  return (
    <section className="rounded-4xl border border-neutral-200 bg-white p-8 shadow-xl shadow-sky-100/40 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400">
            <Languages className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase">
              حدّد رحلتك الخاصة
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold leading-tight text-neutral-900 dark:text-white">
            اختر لغتك الأم، ثم اللغة التي تريد إتقانها. سنبني الخطة الفورية لك.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            يدعم Lingo Master جميع اللغات العالمية مع توصيات تعتمد على عاداتك،
            وقتك المتاح، والأهداف التي تريد الوصول إليها سواء كانت للسفر،
            الدراسة، أو الترقية المهنية.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-sky-200 bg-sky-50/60 p-4 text-sm text-sky-800 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-200">
          <p className="font-semibold">مدعوم بالذكاء الاصطناعي</p>
          <p>
            كل اختيار يحدث فرقاً! يستخدم محرك الذكاء الاصطناعي بياناتك لتوليد
            أنشطة وتحديات شخصية تتكيف مع كلا اللغتين.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 space-y-6">
          <div>
            <label
              htmlFor="language-search"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
            >
              ابحث عن لغة
            </label>
            <input
              id="language-search"
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-neutral-950 dark:text-white"
              placeholder="ابحث باسم اللغة، العائلة اللغوية، أو المنطقة..."
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              type="search"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <LanguageSelectCard
              title="لغتي الأم"
              activeCode={nativeCode}
              options={filteredLanguages}
              onChange={(code) => {
                setNativeCode(code);
                if (code === targetCode) {
                  const fallback =
                    languages.find((lang) => lang.code !== code) ?? languages[0];
                  setTargetCode(fallback.code);
                  onSelectionChange?.(fallback, fallback);
                } else {
                  onSelectionChange?.(
                    languages.find((lang) => lang.code === code) ?? languages[0],
                    targetLanguage,
                  );
                }
              }}
            />
            <LanguageSelectCard
              title="اللغة المستهدفة"
              activeCode={targetCode}
              options={filteredLanguages.filter((lang) => lang.code !== nativeCode)}
              onChange={(code) => {
                setTargetCode(code);
                onSelectionChange?.(
                  nativeLanguage,
                  languages.find((lang) => lang.code === code) ?? languages[0],
                );
              }}
            />
          </div>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-900 dark:border-white/10 dark:bg-neutral-950 dark:text-white">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
              الخطة المقترحة
            </p>
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/30 dark:text-emerald-200">
              <Sparkles className="h-4 w-4" />
              توليد لحظي
            </span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-white p-3 shadow-sm dark:bg-neutral-900">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                اللغة الأم
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {nativeLanguage.name}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-sm dark:bg-neutral-900">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                اللغة المستهدفة
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {targetLanguage.name}
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-neutral-200 p-4 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-300">
              <p>
                تم ضبط مستويات الترجمة، الألعاب الصوتية، والقصص التفاعلية لتناسب
                انتقالك من{" "}
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  {nativeLanguage.name}
                </span>{" "}
                إلى{" "}
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  {targetLanguage.name}
                </span>
                .
              </p>
            </div>
            <Button className="w-full">جرّب درساً مجانياً الآن</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

type LanguageSelectCardProps = {
  title: string;
  activeCode: string;
  options: Language[];
  onChange: (code: string) => void;
};

function LanguageSelectCard({
  title,
  activeCode,
  options,
  onChange,
}: LanguageSelectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-950">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">
          {title}
        </h3>
        <span className="text-xs text-neutral-400">
          {options.length.toLocaleString()} لغة
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 overflow-y-auto [max-height:260px]">
        {options.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => onChange(language.code)}
            className={cn(
              "rounded-full border px-3 py-2 text-sm transition",
              activeCode === language.code
                ? "border-transparent bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg"
                : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-sky-300 hover:text-neutral-900 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white",
            )}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
}

