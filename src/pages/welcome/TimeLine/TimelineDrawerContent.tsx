import { type FC } from "react";
import { t } from "i18next";
import { Calendar, MapPin, Award, Link2, ExternalLink } from "lucide-react";
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

  const renderLocation = () => {
    if (!item.locationLink) {
      return (
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">{name}</span>
        </div>
      );
    }

    return (
      <a
        href={item.locationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm hover:text-primary transition-colors hover:underline"
      >
        <MapPin className="w-4 h-4 text-gray-500" />
        <span className="text-gray-600 hover:text-primary">{name}</span>
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    );
  };

  return (
    <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
      <div className="max-w-xl mx-auto space-y-4">
        <div
          aria-hidden
          className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-4"
        />

        <div className="space-y-2">
          <h2 className="font-bold text-xl text-gray-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            {title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
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
            className="w-full h-48 object-cover rounded-lg border border-gray-200"
          />
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              {t("timelineDrawer.overview")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="text-sm">{renderLocation()}</div>

          {item.skills.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {t("timelineDrawer.keySkills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.links && item.links.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {t("timelineDrawer.links")}
              </h3>
              <div className="space-y-2">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-primary hover:text-primary-focus"
                  >
                    <Link2 className="w-4 h-4 flex-shrink-0" />
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
