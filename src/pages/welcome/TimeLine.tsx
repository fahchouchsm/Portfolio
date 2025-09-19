import { type FC } from "react";
import { motion } from "framer-motion";
import { educationItems } from "../../data/data";
import { t } from "i18next";
import {
  ArrowUpRight,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";
import { Drawer } from "vaul";

interface TimelineProps {}

export const Timeline: FC<TimelineProps> = () => {
  const sortedItems = [...educationItems].sort(
    (a, b) => b.yearBegin - a.yearBegin,
  );

  // Get drawer content for each item
  const getDrawerContent = (item: (typeof educationItems)[0]) => {
    const title = t(`timeLine.${item.key}.title`);
    const subtitle = t(`timeLine.${item.key}.subtitle`);

    const getItemDetails = () => {
      switch (item.key) {
        case "ehei":
          return {
            description:
              t("timeLine.ehei.description") ||
              "Pursuing a comprehensive engineering program focusing on software development, cloud computing, and modern web technologies.",
            location: "Online Campus",
            skills: ["React", "TypeScript", "Node.js", "AWS"],
            duration: "3 years program",
          };
        case "udemy":
          return {
            description:
              t("timeLine.udemy.description") ||
              "Ongoing professional development with a focus on cloud architecture and DevOps practices.",
            location: "Udemy Platform",
            skills: ["AWS", "Cloud Computing", "DevOps", "CI/CD"],
            duration: "Ongoing",
          };
        default:
          return {
            description: subtitle,
            location: "N/A",
            skills: [],
            duration: "",
          };
      }
    };

    const details = getItemDetails();

    return (
      <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-4">
          <div
            aria-hidden
            className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-4"
          />

          {/* Header */}
          <div className="space-y-2">
            <Drawer.Title className="font-bold text-xl text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {title}
            </Drawer.Title>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>
                {item.yearEnd
                  ? `${item.yearBegin} - ${item.yearEnd}`
                  : `${item.yearBegin} - Present`}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={`/timeline/${item.imgKey}`}
              alt={title}
              className="w-full h-48 object-cover rounded-lg border border-gray-200"
            />
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                {details.description}
              </p>
            </div>

            {details.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{details.location}</span>
              </div>
            )}

            {details.skills.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {details.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {details.duration && (
              <div className="text-sm text-gray-500 italic">
                {details.duration}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto w-full px-4 py-12 ">
      <ul className="timeline timeline-snap-icon w-full max-md:timeline-compact timeline-vertical">
        {sortedItems.map((item, i) => {
          const yearLabel = item.yearEnd
            ? `${item.yearBegin} - ${item.yearEnd}`
            : `${item.yearBegin}`;

          const isLeft = i % 2 === 0;

          return (
            <motion.li
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="timeline-middle ">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Timeline Content - Make the entire content clickable */}
              <div
                className={`w-full group ${
                  isLeft
                    ? "timeline-start mb-10 md:text-end"
                    : "timeline-end md:mb-10"
                }`}
              >
                <time className="font-mono italic text-sm text-gray-500 mb-2 block">
                  {yearLabel}
                </time>

                {/* IMAGE PLACEHOLDER */}
                <div className="mb-4 w-full">
                  <motion.img
                    src={`/timeline/${item.imgKey}`}
                    alt={t(`timeLine.${item.key}.title`)}
                    className="min-w-10/12 h-56 md:h-80 object-cover rounded-lg border border-base-200 hover:shadow-lg transition-all duration-300"
                    loading="lazy"
                    initial={{ filter: "blur(5px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="text-lg font-black flex items-center gap-2 mb-2 transition-colors">
                  <span>{t(`timeLine.${item.key}.title`)}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                </div>
                <p className="mt-2 text-gray-600 transition-colors">
                  {t(`timeLine.${item.key}.subtitle`)}
                </p>
              </div>

              {/* Individual Drawer for each item */}
              <Drawer.Root>
                <Drawer.Trigger asChild>
                  {/* Make the entire timeline content clickable */}
                  <div
                    className={`w-full group/timeline cursor-pointer transition-all duration-300 ${
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
                        className="min-w-10/12 h-56 md:h-80 object-cover rounded-lg border border-base-200 hover:shadow-lg group-hover/timeline:scale-[1.02] transition-all duration-300"
                        loading="lazy"
                        initial={{ filter: "blur(5px)" }}
                        whileInView={{ filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    <div className="text-lg font-black flex items-center gap-2 mb-2 group-hover/timeline:text-primary transition-colors">
                      <span>{t(`timeLine.${item.key}.title`)}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/timeline:rotate-45 transition-transform duration-300" />
                    </div>
                    <p className="mt-2 text-gray-600 group-hover/timeline:text-gray-800 transition-colors">
                      {t(`timeLine.${item.key}.subtitle`)}
                    </p>

                    {/* Floating button for visual feedback */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover/timeline:opacity-100 transition-all duration-300 z-10 shadow-lg">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </Drawer.Trigger>

                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
                  <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[90%] fixed bottom-0 left-0 right-0 outline-none z-50">
                    {getDrawerContent(item)}
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
