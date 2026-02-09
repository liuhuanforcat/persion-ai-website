"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/ui/ContactModal";

export function SolutionCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-16 md:py-24" aria-labelledby="solution-cta-title">
        <motion.div
          className="mx-auto max-w-3xl px-4 text-center md:px-8"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <h2
            id="solution-cta-title"
            className="text-3xl font-semibold text-gray-900 md:text-4xl"
          >
            了解相关解决方案
          </h2>
          <p className="mt-4 text-gray-600">
            更多方案和咨询，联系销售或技术支持，我们为您提供一对一指导。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              type="button"
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-gray-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              联系我们
            </motion.button>
            <motion.a
              href="tel:0571-86300996"
              className="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              0571-86300996
            </motion.a>
          </div>
        </motion.div>
      </section>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
