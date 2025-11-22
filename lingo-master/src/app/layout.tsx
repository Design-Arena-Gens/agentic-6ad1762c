import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lingo Master | تعلّم أي لغة بالذكاء الاصطناعي والمرح",
  description:
    "منصة تعليم لغات عالمية من الصفر حتى الاحتراف مع ألعاب، دروس تفاعلية، ومدرب ذكاء اصطناعي شخصي.",
  metadataBase: new URL("https://agentic-6ad1762c.vercel.app"),
  openGraph: {
    title: "Lingo Master",
    description:
      "اختر لغتك الأم واللغة المستهدفة، واستمتع بدروس وألعاب مدعومة بالذكاء الاصطناعي.",
    type: "website",
    url: "https://agentic-6ad1762c.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingo Master",
    description:
      "تجربة تعليم لغات عالمية تعتمد على الألعاب والأهداف المدعومة بالذكاء الاصطناعي.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-100 antialiased dark:bg-neutral-950`}
      >
        <ThemeProvider>
          <div className="relative isolate min-h-screen">
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-white/60 px-6 py-4 backdrop-blur dark:bg-neutral-950/70">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  Lingo Master
                </span>
                <span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                  منصة تعلم اللغات الممتعة
                </span>
              </div>
              <ThemeToggle />
            </header>
            <main className="relative z-10 bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-8">
                {children}
              </div>
            </main>
            <footer className="border-t border-neutral-200 bg-white/80 px-4 py-6 text-sm text-neutral-500 dark:border-white/10 dark:bg-neutral-950/80 dark:text-neutral-400">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Lingo Master. جميع الحقوق محفوظة.</p>
                <div className="flex items-center gap-4">
                  <span>الشروط والأحكام</span>
                  <span>سياسة الخصوصية</span>
                  <span>الدعم والشركات</span>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
