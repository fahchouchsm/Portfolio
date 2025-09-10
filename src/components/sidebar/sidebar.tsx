import { useEffect, type FC } from "react";
import { sidebarLinks, socialAccounts } from "../../data/data";
import AOS from "aos";
import { Link, useLocation } from "react-router-dom";

interface SidebarInt {
  t: (e: string) => string;
}

const Sidebar: FC<SidebarInt> = ({ t }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <aside
      data-aos="fade-right"
      className="w-[20%] bg-white h-full rounded-3xl p-5 shadow-2xl flex flex-col justify-between"
      aria-label="Sidebar with navigation links and social accounts"
    >
      <header>
        <h1 className="text-4xl font-extrabold font-serif tracking-tight text-gray-800">
          Fahchouch <br /> Mohammed
        </h1>
        <h2 className="text-md font-semibold text-gray-600">
          {t("titleDesc")}
        </h2>
      </header>

      {/* Page navigation */}
      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-1 mb-[100%]">
          {sidebarLinks.map((e, i) => {
            const isSelected = location.pathname === e.path;
            return (
              <li key={i}>
                <Link
                  to={e.path}
                  className={`btn btn-${
                    isSelected ? "primary" : "ghost"
                  } btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full justify-start rounded-3xl`}
                  aria-current={isSelected ? "page" : undefined}
                >
                  {t(e.title)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social account links */}
      <ul className="flex justify-center gap-4" aria-label="Social media links">
        {socialAccounts.map((e, i) => (
          <li key={i}>
            <a
              href={e.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={e.label}
            >
              <e.icon className="border-2 rounded-lg p-0.5 h-7 w-7 shadow-2xl" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
