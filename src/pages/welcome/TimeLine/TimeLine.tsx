import { type FC, useState } from "react";
import { motion } from "framer-motion";
import { t } from "i18next";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Drawer } from "vaul";
import { TimelineDrawerContent } from "./TimelineDrawerContent";
import { educationItems } from "../../../data/data";

interface TimelineProps {}

export const Timeline: FC<TimelineProps> = () => {
  const [openDrawerKey, setOpenDrawerKey] = useState<string | null>(null);

  const sortedItems = [...educationItems].sort(
    (a, b) => b.yearBegin - a.yearBegin,
  );

  const handleDrawerToggle = (itemKey: string) => {
    setOpenDrawerKey(openDrawerKey === itemKey ? null : itemKey);
  };

  return (
    <div className="container mx-auto w-full px-4 py-12">
      <ul className="timeline timeline-snap-icon w-full max-md:timeline-compact timeline-vertical">
        {sortedItems.map((item, i) => {
          const yearLabel = item.yearEnd
            ? `${item.yearBegin} - ${item.yearEnd}`
            : `${item.yearBegin}`;
          const isLeft = i % 2 === 0;
          const isDrawerOpen = openDrawerKey === item.key;

          return (
            <motion.li
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="timeline-middle">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>

              <Drawer.Root
                open={isDrawerOpen}
                onOpenChange={() => handleDrawerToggle(item.key)}
              >
                <Drawer.Trigger asChild>
                  <div
                    className={`relative w-full group/timeline cursor-pointer transition-all duration-300 ${
                      isLeft
                        ? "timeline-start mb-10 md:text-end"
                        : "timeline-end md:mb-10"
                    }`}
                  >
                    <time className="font-mono italic text-sm text-gray-500 mb-2 block">
                      {yearLabel}
                    </time>

                    <div className="mb-4 w-full">
                      <motion.img
                        src={`/timeline/${item.imgKey}`}
                        alt={t(`timeLine.${item.key}.title`)}
                        className="min-w-10/12 h-56 md:h-60 object-cover rounded-lg border border-base-200 hover:shadow-lg group-hover/timeline:scale-[1.02] transition-all duration-300"
                        loading="lazy"
                        initial={{ filter: "blur(5px)" }}
                        whileInView={{ filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    <div className="text-lg font-black flex items-center gap-2 mb-2 group-hover/timeline:text-primary transition-colors">
                      <span>{t(`timeLine.${item.key}.title`)}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <p className="mt-2 text-gray-600 group-hover/timeline:text-gray-800 transition-colors">
                      {t(`timeLine.${item.key}.subtitle`)}
                    </p>

                    <div
                      className={`absolute w-7 h-7 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover/timeline:opacity-100 transition-all duration-300 z-10 shadow-lg ${
                        isLeft ? "-top-2 -left-2" : "-top-2 -right-2"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </Drawer.Trigger>

                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
                  <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[90%] fixed bottom-0 left-0 right-0 outline-none z-50">
                    <TimelineDrawerContent item={item} />
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>

              <hr />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
