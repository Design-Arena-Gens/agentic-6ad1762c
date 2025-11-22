import { NextResponse } from "next/server";

const prompts = [
  "ركز على نطق الحروف الصامتة وكرّر الجمل البسيطة بصوت مرتفع ثلاث مرات.",
  "جرّب كتابة فقرة قصيرة عن يومك واستخدم ثلاثة أزمنة مختلفة.",
  "استمع إلى أغنية قصيرة، دوّن الكلمات الجديدة، ثم اطلب من الذكاء الاصطناعي مثالاً جديداً.",
  "اختر موضوعاً ثقافياً عن البلد المستهدف وابحث عن ثلاث حقائق لتشاركها غداً.",
];

function randomPrompt() {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, nativeLanguage, targetLanguage } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "يرجى إرسال رسالة نصية صحيحة." },
        { status: 400 },
      );
    }

    const suggestions = [
      `استخدم كلمات من ${nativeLanguage ?? "لغتك"} لوضع قائمة مفردات ثم ترجمها إلى ${targetLanguage ?? "اللغة الجديدة"} داخل بطاقات الذكاء الاصطناعي.`,
      "سجّل صوتك لمدة دقيقة ثم حمّله للأداة لتحصل على تقرير دقيق عن النطق والإيقاع.",
      randomPrompt(),
    ];

    return NextResponse.json({
      reply: `رائع! فهمت أنك قلت: «${message.trim()}». لنحوّل ذلك إلى نمو حقيقي:`,
      suggestions,
    });
  } catch (error) {
    console.error("[AI_COACH_POST]", error);
    return NextResponse.json(
      {
        error: "حدث خطأ غير متوقع. حاول مجدداً خلال ثوانٍ.",
      },
      { status: 500 },
    );
  }
}

