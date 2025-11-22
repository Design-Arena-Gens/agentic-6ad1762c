'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme =
    theme === "system" ? resolvedTheme ?? "light" : theme ?? "light";
  const isDark = currentTheme === "dark";

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-full border border-white/70 bg-white/70 text-neutral-700 backdrop-blur transition dark:border-white/20 dark:bg-neutral-900/80 dark:text-neutral-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
