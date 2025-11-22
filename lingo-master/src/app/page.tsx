"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { LanguageSelector } from "@/components/language-selector";
import { CurriculumMap } from "@/components/curriculum-map";
import { ExperienceGrid } from "@/components/experience-grid";
import { Pricing } from "@/components/pricing";
import { ImpactMetrics } from "@/components/impact-metrics";
import { AiCoach } from "@/components/ai-coach";
import { languages } from "@/data/languages";

export default function Home() {
  const defaultNative = languages.find((lang) => lang.code === "ar") ?? languages[0];
  const defaultTarget =
    languages.find((lang) => lang.code === "en") ??
    languages.find((lang) => lang.code !== defaultNative.code) ??
    languages[0];

  const [selectedNative, setSelectedNative] = useState(defaultNative);
  const [selectedTarget, setSelectedTarget] = useState(defaultTarget);

  return (
    <>
      <Hero />
      <LanguageSelector
        onSelectionChange={(nativeLang, targetLang) => {
          setSelectedNative(nativeLang);
          setSelectedTarget(targetLang);
        }}
      />
      <ImpactMetrics />
      <CurriculumMap />
      <AiCoach
        nativeLanguage={selectedNative.name}
        targetLanguage={selectedTarget.name}
      />
      <ExperienceGrid />
      <Pricing />
    </>
  );
}
