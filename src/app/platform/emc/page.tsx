import type { Metadata } from "next";
import { EmcBanner } from "@/components/sections/emc/EmcBanner";
import { EmcProcess } from "@/components/sections/emc/EmcProcess";
import { EmcAnalysis } from "@/components/sections/emc/EmcAnalysis";
import { EmcSmartPlan } from "@/components/sections/emc/EmcSmartPlan";
import { EmcScenarios } from "@/components/sections/emc/EmcScenarios";

export const metadata: Metadata = {
  title: "应急指挥平台 - 全能数字",
  description:
    "基于融合通信系统构建可视化应急指挥系统，实现现场情况可视、资源调度便捷、环节沟通畅通，提升指挥调度精准性与协同效率。覆盖消防、抗洪、救援、交通事故等场景。",
  openGraph: { images: ["/images/emc/emcBanner.png"] },
};

export default function EmcPlatformPage() {
  return (
    <main>
      {/* 首屏 Banner — 从事发到处置完毕的完整指挥系统 */}
      <EmcBanner />

      {/* 处置流程 — 接报→会商→指挥→回溯，全流程闭环 */}
      <EmcProcess />

      {/* 分析研判 — 看得见现场、调得动资源 */}
      <EmcAnalysis />

      {/* 智能预案 — 反应快、决策准 */}
      <EmcSmartPlan />

      {/* 应用场景 — 消防/抗洪/救援/交通事故 */}
      <EmcScenarios />
    </main>
  );
}
