import { motion } from "motion/react";

export default function Timeline({ items }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto relative">
        {/* Liste */}
        <div className="flex flex-col gap-12 pl-10">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.7 }}
              key={index}
              className="flex items-start gap-6 relative"
            >
              {/* Date */}
              <div className="w-[130px] lg:text-lg">{item.year}</div>

              {/* Texte */}
              <div>
                <p className="">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-lightHover">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
