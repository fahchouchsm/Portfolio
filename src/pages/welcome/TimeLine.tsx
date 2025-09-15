import { type FC } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative container mx-auto px-4 py-12 max-w-5xl">
      {/* Vertical line */}
      <div
        className="
          absolute top-0 bottom-0 w-1 
          bg-gradient-to-b from-blue-400 to-purple-500
          left-5 md:left-1/2 transform md:-translate-x-1/2
        "
      />

      <div className="flex flex-col space-y-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              className="relative flex w-full md:items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Desktop: left half */}
              <div
                className={`hidden md:flex w-1/2 ${
                  isLeft ? "justify-end pr-10 text-right" : "justify-end"
                }`}
              >
                {isLeft && (
                  <div className="bg-white p-6 rounded-xl shadow-2xl transition-shadow duration-300 border border-gray-100 max-w-sm">
                    <h3 className="font-bold text-xl text-blue-600">
                      {item.year}
                    </h3>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-sm text-gray-500 italic">
                        {item.subtitle}
                      </p>
                    )}
                    {item.description && (
                      <p className="mt-3 text-gray-600 text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Timeline dot */}
              <div
                className="
                  absolute md:left-1/2 left-5 
                  w-5 h-5 bg-blue-500 rounded-full
                  transform md:-translate-x-1/2 -translate-y-1/2
                  border-4 border-white shadow-md
                "
              />

              {/* Desktop: right half */}
              <div
                className={`hidden md:flex w-1/2 ${
                  !isLeft ? "justify-start pl-10 text-left" : "justify-start"
                }`}
              >
                {!isLeft && (
                  <div className="bg-white p-6 rounded-xl shadow-2xl transition-shadow duration-300 border border-gray-100 max-w-sm">
                    <h3 className="font-bold text-xl text-blue-600">
                      {item.year}
                    </h3>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-sm text-gray-500 italic">
                        {item.subtitle}
                      </p>
                    )}
                    {item.description && (
                      <p className="mt-3 text-gray-600 text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile: always right of line */}
              <div className="md:hidden w-full pl-12">
                <div className="bg-white p-6 rounded-xl shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="font-bold text-xl text-blue-600">
                    {item.year}
                  </h3>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="text-sm text-gray-500 italic">
                      {item.subtitle}
                    </p>
                  )}
                  {item.description && (
                    <p className="mt-3 text-gray-600 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
