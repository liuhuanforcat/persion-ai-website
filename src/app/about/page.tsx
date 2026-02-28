import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { CompanyIntro } from "@/components/sections/about/CompanyIntro";
import { Timeline } from "@/components/sections/about/Timeline";
import { Certifications } from "@/components/sections/about/Certifications";
import { JoinUs } from "@/components/sections/about/JoinUs";
import { ContactInfo } from "@/components/sections/about/ContactInfo";

export const metadata: Metadata = {
  title: "关于我们 - 全能数字",
  description:
    "了解全能数字：成立于2021年的实时音视频通讯应用引领者，提供PaaS到SaaS到硬件全栈解决方案，服务政府、商业、金融、教育、医疗等领域。",
  openGraph: { images: ["/images/logo.png"] },
};

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <CompanyIntro />
      <Timeline />
      <Certifications />
      <JoinUs />
      <ContactInfo />
    </main>
  );
}
