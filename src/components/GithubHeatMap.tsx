import React, { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total?: { lastYear?: number };
  contributions?: ContributionDay[];
}

const LEVEL_COLORS: Record<number, string> = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

const MONTHS_FR = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const GithubHeatMap: React.FC<{ username: string; lang?: "fr" | "en" }> = ({
  username,
  lang = "fr",
}) => {
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        if (Array.isArray(data.contributions) && data.contributions.length > 0) {
          setDays(data.contributions);
          setTotal(data.total?.lastYear ?? null);
        } else {
          setFailed(true);
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (failed) {
    return (
      <img
        src={`https://ghchart.rshah.org/26a641/${username}`}
        alt="Graphique des contributions GitHub"
        className="github-chart-img github-chart-dark-fallback"
        loading="lazy"
      />
    );
  }

  if (days.length === 0) {
    return (
      <div className="gh-loading font-code">
        {lang === "fr" ? "Chargement des contributions…" : "Loading contributions…"}
      </div>
    );
  }

  // Group into Sunday-start weeks
  const weeks: (ContributionDay | null)[][] = [];
  let currentWeek: (ContributionDay | null)[] = [];
  const firstDow = new Date(days[0].date + "T00:00:00").getDay();
  for (let i = 0; i < firstDow; i++) currentWeek.push(null);
  for (const d of days) {
    currentWeek.push(d);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  const monthNames = lang === "fr" ? MONTHS_FR : MONTHS_EN;
  let lastMonth = -1;

  return (
    <div className="gh-dark-board">
      <div className="gh-top-meta">
        <span className="gh-total font-code">
          {total !== null
            ? lang === "fr"
              ? `${total} contributions sur les 12 derniers mois`
              : `${total} contributions in the last year`
            : ""}
        </span>
        <div className="gh-legend" aria-hidden="true">
          <span>{lang === "fr" ? "Moins" : "Less"}</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <span
              key={lvl}
              className="gh-cell"
              style={{ backgroundColor: LEVEL_COLORS[lvl] }}
            />
          ))}
          <span>{lang === "fr" ? "Plus" : "More"}</span>
        </div>
      </div>

      <div className="gh-scroll-wrap">
        <div className="gh-months-row">
          {weeks.map((week, wIdx) => {
            const firstDay = week.find((d) => d !== null);
            let label = "";
            if (firstDay) {
              const m = new Date(firstDay.date + "T00:00:00").getMonth();
              if (m !== lastMonth) {
                label = monthNames[m];
                lastMonth = m;
              }
            }
            return (
              <span key={wIdx} className="gh-month-lbl">
                {label}
              </span>
            );
          })}
        </div>

        <div className="gh-grid">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="gh-week-col">
              {week.map((day, dIdx) =>
                day ? (
                  <span
                    key={day.date}
                    className="gh-cell"
                    style={{ backgroundColor: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0] }}
                    title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                  />
                ) : (
                  <span key={`empty-${wIdx}-${dIdx}`} className="gh-cell gh-cell-empty" />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubHeatMap;
