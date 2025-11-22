"use client";

import { FormEvent, useState } from "react";
import { BotMessageSquare, Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type AiCoachProps = {
  nativeLanguage: string;
  targetLanguage: string;
};

type CoachResponse = {
  reply: string;
  suggestions: string[];
};

export function AiCoach({ nativeLanguage, targetLanguage }: AiCoachProps) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<CoachResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai-coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          nativeLanguage,
          targetLanguage,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "حدث خطأ أثناء محادثة المدرب.");
      }
      const data = (await res.json()) as CoachResponse;
      setResponse(data);
      setMessage("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "تعذر الاتصال بالمدرب، حاول لاحقاً.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-4xl border border-neutral-200 bg-white p-8 shadow-lg shadow-emerald-100/40 dark:border-white/10 dark:bg-neutral-900 sm:p-10">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
            مدرب الذكاء الاصطناعي المباشر
          </p>
          <h2 className="text-balance text-3xl font-bold text-neutral-900 dark:text-white">
            اطلب درساً أو تصحيحاً لحظياً. سيصمم المدرب خطة دقيقة لك خلال ثوانٍ.
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-3xl border border-emerald-400/30 bg-emerald-400/15 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-200">
          <Sparkles className="h-5 w-5" />
          <span>تجربة Premium، متاحة مجاناً لأول 3 محادثات.</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-inner dark:border-white/10 dark:bg-neutral-950"
        >
          <label
            htmlFor="coach-message"
            className="text-sm font-medium text-neutral-600 dark:text-neutral-300"
          >
            ماذا تريد أن تتعلم اليوم؟
          </label>
          <textarea
            id="coach-message"
            className="min-h-[120px] rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-white/10 dark:bg-neutral-900 dark:text-white"
            placeholder="مثال: أريد تحسين مهاراتي في التفاوض باللغة الإسبانية غداً."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="self-end rounded-2xl px-6"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                نعمل على الخطة...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                أرسل للمدرب
              </>
            )}
          </Button>
          {error ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
              {error}
            </p>
          ) : null}
        </form>

        <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-950">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-500/20 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
              <BotMessageSquare className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                خطة المدرب الذكي
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                من {nativeLanguage} إلى {targetLanguage}
              </p>
            </div>
          </div>
          {response ? (
            <div className="space-y-3">
              <p className="rounded-2xl bg-neutral-100 p-4 text-sm text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                {response.reply}
              </p>
              <ul className="space-y-3">
                {response.suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                جرّب كتابة هدفك القادم، والمساعد سيقترح أنشطة وألعاباً من مكتبتك
                الشخصية.
              </p>
              <p className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 p-3 dark:border-white/10 dark:bg-neutral-900">
                مثال: «لدي عرض عمل باللغة الفرنسية الأسبوع المقبل، أحتاج إلى
                تدريب مكثف على المصطلحات المهنية والثقة في الردود».
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

