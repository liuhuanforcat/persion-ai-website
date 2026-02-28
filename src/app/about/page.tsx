import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutBanner } from "@/components/sections/AboutBanner";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { Timeline } from "@/components/sections/Timeline";
import { CertScroll } from "@/components/sections/CertScroll";
import { HiringCTA } from "@/components/sections/HiringCTA";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { RemScript } from "./RemScript";

export const metadata: Metadata = {
  title: "关于我们 - QNSZ科技",
  description:
    "了解QNSZ科技：公司简介、发展历程、资质认证、招聘信息及联系方式。",
  openGraph: {
    title: "关于我们 - QNSZ科技",
    description: "以科技之力，连接无限可能",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header variant="solid" activeNav="/about" />
      <main className="pt-[60px] md:pt-[68px]">
        <AboutBanner />
        <CompanyIntro />
        <Timeline />
        <CertScroll />
        <HiringCTA />
        <ContactInfo />
      </main>
      <Footer />
      <RemScript />
    </>
  );
}
