import { type FC } from "react";
import { t } from "i18next";
import {
  MapPin,
  Link2,
  ExternalLink,
  GraduationCap,
  Code,
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";
import type { educationItemsInt } from "../../../data/data";

interface TimelineDrawerContentProps {
  item: educationItemsInt;
}

export const TimelineDrawerContent: FC<TimelineDrawerContentProps> = ({
  item,
}) => {
  const title = t(`timeLine.${item.key}.title`);
  const name = t(`timeLine.${item.key}.name`);
  const subtitle = t(`timeLine.${item.key}.subtitle`);
  const description = t(`timeLine.${item.key}.description`);
  const duration = t(`timeLine.${item.key}.duration`);
  const iconClass = "text-primary h-5 w-5";

  const renderLocation = () => {
    if (!item.locationLink) {
      return (
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{name}</span>
        </div>
      );
    }

    return (
      <a
        href={item.locationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary flex items-center gap-2 text-sm transition-colors hover:underline"
      >
        <MapPin className="h-4 w-4 text-gray-500" />
        <span className="hover:text-primary text-gray-600">{name}</span>
        <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
      <div className="mx-auto max-w-xl space-y-4">
        <div
          aria-hidden
          className="mx-auto mb-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"
        />

        <div className="space-y-2">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            {item.type == "education" ? (
              <GraduationCap className={iconClass} />
            ) : item.type == "internship" ? (
              <Code className={iconClass} />
            ) : (
              <BriefcaseBusiness className={iconClass} />
            )}
            {title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays className="h-4 w-4" />
            <span>
              {item.yearEnd
                ? `${item.yearBegin} - ${item.yearEnd}`
                : `${item.yearBegin} - Present`}
            </span>
          </div>
          {subtitle && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{subtitle}</span>
            </div>
          )}
        </div>

        <div className="w-full">
          <img
            src={`/timeline/${item.imgKey}`}
            alt={title}
            className="h-64 w-full rounded-lg border border-gray-200 object-cover"
          />
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="mb-2 font-semibold text-gray-800">
              {t("timelineDrawer.overview")}
            </h3>
            <p className="leading-relaxed text-gray-600">{description}</p>
          </div>

          <div className="text-sm">{renderLocation()}</div>

          {item.skills.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">
                {t("timelineDrawer.keySkills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.links && item.links.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">
                {t("timelineDrawer.links")}
              </h3>
              <div className="space-y-2">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-focus flex items-center gap-2 rounded-lg p-2 text-sm transition-colors hover:bg-gray-50"
                  >
                    <Link2 className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {duration && (
            <div className="text-sm text-gray-500 italic">
              {t("timelineDrawer.duration")}: {duration}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
