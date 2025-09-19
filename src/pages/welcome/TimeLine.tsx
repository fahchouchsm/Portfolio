import { type FC } from "react";
import { motion } from "framer-motion";
import { educationItems } from "../../data/data";
import { t } from "i18next";
import { BriefcaseBusiness, CircleCheck, GraduationCap } from "lucide-react";

interface TimelineProps {}

export const Timeline: FC<TimelineProps> = () => {
  const sortedItems = [...educationItems].sort(
    (a, b) => b.yearBegin - a.yearBegin,
  );

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
            >
              <div className="timeline-middle">
                {item.type == "education" ? (
                  <GraduationCap />
                ) : item.type == "internship" ? (
                  <CircleCheck />
                ) : (
                  <BriefcaseBusiness />
                )}
              </div>
              <div
                className={`w-full ${
                  isLeft
                    ? "timeline-start mb-10 md:text-end"
                    : "timeline-end md:mb-10"
                }`}
              >
                <time className="font-mono italic">{yearLabel}</time>

                {/* IMAGE PLACEHOLDER */}
                <div className="mb-4 w-full">
                  <motion.img
                    src={`/timeline/${item.imgKey}`}
                    alt={t(`timeLine.${item.key}.title`)}
                    className="min-w-10/12 h-56 md:h-80 object-cover rounded-lg border border-base-200"
                    loading="lazy"
                    initial={{ filter: "blur(5px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="text-lg font-black">
                  {t(`timeLine.${item.key}.title`)}
                </div>
                <p className="mt-2">{t(`timeLine.${item.key}.subtitle`)}</p>
              </div>
              <hr />
            </motion.li>
          );
        })}
      </ul>
      {/* Trigger button */}
      <label htmlFor="bottom-sheet" className="btn">
        Open Bottom Sheet
      </label>

      {/* Bottom sheet */}
      <input type="checkbox" id="bottom-sheet" className="modal-toggle" />
      <div className="modal modal-bottom">
        <div className="modal-box h-[90vh] rounded-t-2xl">
          <h3 className="font-bold text-lg">Bottom Sheet</h3>
          <p className="py-4">
            This is a bottom sheet built with DaisyUI. It leaves a little space
            at the top and slides from the bottom.
          </p>

          <div className="modal-action">
            <label htmlFor="bottom-sheet" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
