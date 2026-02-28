"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BannerCarousel } from "@/components/sections/BannerCarousel";
import { SceneCards } from "@/components/sections/SceneCards";
import { LowLatency } from "@/components/sections/LowLatency";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { SmartExperience } from "@/components/sections/SmartExperience";
import { SolutionCTA } from "@/components/sections/SolutionCTA";
import { ContactModal } from "@/components/sections/ContactModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setModalOpen(true)} />
      <main>
        <BannerCarousel />
        <SceneCards />
        <LowLatency />
        <Craftsmanship />
        <SmartExperience />
        <SolutionCTA onContactClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
