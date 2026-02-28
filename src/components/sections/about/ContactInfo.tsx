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
    image: "/images/address.png",
    label: "公司地址",
    value: "浙江省杭州市余杭区五常街道关瑞大厦C座3楼",
    href: undefined as string | undefined,
  },
  {
    id: "phone",
    image: "/images/phone.png",
    label: "联系电话",
    value: "0571-86300996",
    href: "tel:0571-86300996",
  },
  {
    id: "email",
    image: "/images/email.png",
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
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
                  <img
                    src={contact.image}
                    alt={contact.label}
                    className="h-7 w-7 object-contain"
                  />
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
