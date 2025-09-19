// Timeline.tsx
import { type FC } from "react";
import { motion } from "framer-motion";
import { educationItems } from "../../data/data";
import { t } from "i18next";

interface TimelineProps {}

export const Timeline: FC<TimelineProps> = () => {
  // Sort items by year descending
  const sortedItems = [...educationItems].sort(
    (a, b) => b.yearBegin - a.yearBegin,
  );

  return (
    <div className="relative container mx-auto md:px-4 p-0 py-12 max-w-5xl">
      {/* Timeline line */}
      <div
        className="
          absolute top-0 bottom-0 w-1
          bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500
          left-6 md:left-1/2 transform md:-translate-x-1/2
          z-0
        "
      />

      <div className="flex flex-col space-y-8 md:space-y-16">
        {sortedItems.map((item, i) => {
          const isLeft = i % 2 === 0;
          const yearLabel = item.yearEnd
            ? `${item.yearBegin} - ${item.yearEnd}`
            : `${item.yearBegin}`;

          return (
            <motion.div
              key={i}
              className="relative flex w-full items-center justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* LEFT SIDE - Desktop */}
              <div
                className={`hidden md:flex w-1/2 ${
                  isLeft ? "justify-end pr-8" : "justify-start pl-8"
                } transform transition-all duration-300`}
              >
                {isLeft && (
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-md min-h-52 flex flex-col justify-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-right">
                      <h3 className="font-bold text-lg text-blue-600 mb-1">
                        {yearLabel}
                      </h3>
                      <h4 className="font-semibold text-xl text-gray-800 mb-2">
                        {t(`timeLine.${item.key}.title`)}
                      </h4>
                      <p className="text-sm text-gray-500 italic leading-relaxed">
                        {t(`timeLine.${item.key}.subtitle`)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* RIGHT SIDE - Desktop */}
              <div
                className={`hidden md:flex w-1/2 ${
                  !isLeft ? "justify-start pl-8" : "justify-end pr-8"
                } transform transition-all duration-300`}
              >
                {!isLeft && (
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 w-full max-w-md min-h-52 flex flex-col justify-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-left">
                      <h3 className="font-bold text-lg text-purple-600 mb-1">
                        {yearLabel}
                      </h3>
                      <h4 className="font-semibold text-xl text-gray-800 mb-2">
                        {t(`timeLine.${item.key}.title`)}
                      </h4>
                      <p className="text-sm text-gray-500 italic leading-relaxed">
                        {t(`timeLine.${item.key}.subtitle`)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* MOBILE VERSION */}
              <div className="md:hidden w-full relative z-10">
                <motion.div
                  className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 w-full mx-4 min-h-48 flex flex-col justify-center hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-blue-600 mb-2">
                      {yearLabel}
                    </h3>
                    <h4 className="font-semibold text-xl text-gray-800 mb-3">
                      {t(`timeLine.${item.key}.title`)}
                    </h4>
                    <p className="text-sm text-gray-500 italic leading-relaxed px-2">
                      {t(`timeLine.${item.key}.subtitle`)}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Timeline DOT */}
              <motion.div
                className="
                  absolute left-6 md:left-1/2 
                  w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                  transform md:-translate-x-1/2 -translate-y-1/2
                  border-4 border-white shadow-lg
                  z-10
                "
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />

              {/* Mobile connector line */}
              <div className="md:hidden absolute left-2.5 -translate-y-1/2 w-1 h-12 bg-blue-500/30 rounded-full" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
