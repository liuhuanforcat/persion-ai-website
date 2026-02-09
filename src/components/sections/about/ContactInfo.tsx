"use client";

import { motion } from "framer-motion";
import {
  headingVariants,
  cardContainerVariants,
  cardVariants,
  defaultViewport,
  SPRING,
} from "@/lib/motion-variants";

const contacts = [
  {
    id: "address",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "公司地址",
    value: "浙江省杭州市余杭区五常街道关瑞大厦C座3楼",
    href: undefined as string | undefined,
  },
  {
    id: "phone",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "联系电话",
    value: "0571-86300996",
    href: "tel:0571-86300996",
  },
  {
    id: "email",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "商务邮箱",
    value: "business@onlineinline.com",
    href: "mailto:business@onlineinline.com",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-14 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          联系我们
        </motion.h2>

        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contacts.map((contact) => {
            const inner = (
              <>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                  {contact.icon}
                </div>
                <h3 className="mb-2 text-sm font-medium text-gray-500">
                  {contact.label}
                </h3>
                <p className="text-base font-medium text-gray-900">
                  {contact.value}
                </p>
              </>
            );

            return (
              <motion.div
                key={contact.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={SPRING.snappy}
                className="group flex flex-col items-center rounded-2xl bg-white px-6 py-10 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                {contact.href ? (
                  <a href={contact.href} className="flex flex-col items-center">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
