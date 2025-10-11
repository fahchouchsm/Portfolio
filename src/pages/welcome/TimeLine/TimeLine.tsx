import { type FC, useState } from "react";
import { motion } from "framer-motion";
import { t } from "i18next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code,
  GraduationCap,
} from "lucide-react";
import { Drawer } from "vaul";
import { TimelineDrawerContent } from "./TimelineDrawerContent";
import { educationItems } from "../../../data/data";

export const Timeline: FC<TimelineProps> = () => {
  const [openDrawerKey, setOpenDrawerKey] = useState<string | null>(null);

  const handleDrawerToggle = (itemKey: string) => {
    setOpenDrawerKey(openDrawerKey === itemKey ? null : itemKey);
  };

  const iconClass = "h-4 w-4 text-white";

  return (
    <div className="container w-full px-18 py-12">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-auto w-full">
        {educationItems.map((item, i) => {
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
                <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
                  {item.type == "education" ? (
                    <GraduationCap className={iconClass} />
                  ) : item.type == "internship" ? (
                    <Code className={iconClass} />
                  ) : (
                    <BriefcaseBusiness className={iconClass} />
                  )}
                </div>
              </div>

              <Drawer.Root
                open={isDrawerOpen}
                onOpenChange={() => handleDrawerToggle(item.key)}
              >
                <Drawer.Trigger asChild>
                  <div
                    className={`group/timeline relative w-full cursor-pointer transition-all duration-300 ${
                      isLeft
                        ? "timeline-start mb-10 md:text-end"
                        : "timeline-end md:mb-10"
                    }`}
                  >
                    {/* Year label - full width, positioned based on side */}
                    <time className="mb-4 block w-full font-mono text-sm text-gray-500 italic">
                      {yearLabel}
                    </time>

                    {/* Image - full width of its side */}
                    <div className="mb-4 w-full">
                      <motion.img
                        className="border-base-200 h-56 w-full rounded-lg border object-cover transition-all duration-300 group-hover/timeline:scale-[1.02] hover:shadow-lg md:h-48"
                        src={`/timeline/${item.imgKey}`}
                        alt={t(`timeLine.${item.key}.title`)}
                        loading="lazy"
                        initial={{ filter: "blur(5px)" }}
                        whileInView={{ filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Title - full width of its side */}
                    <div className="group-hover/timeline:text-primary mb-2 flex w-fit items-center gap-2 text-lg font-black transition-colors">
                      <span className="w-full">
                        {t(`timeLine.${item.key}.title`)}
                      </span>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
                    </div>

                    {/* Subtitle - full width of its side */}
                    <p className="mt-2 w-full text-gray-600 transition-colors group-hover/timeline:text-gray-800">
                      {t(`timeLine.${item.key}.subtitle`)}
                    </p>

                    {/* Hover indicator - positioned based on side */}
                    <div
                      className={`bg-primary absolute -right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover/timeline:opacity-100 ${isLeft ? "top-0 md:-left-1" : "top-0 md:-right-1"}`}
                    >
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </Drawer.Trigger>

                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
                  <Drawer.Content className="fixed right-0 bottom-0 left-0 z-50 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-gray-100 outline-none lg:h-[90%]">
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
