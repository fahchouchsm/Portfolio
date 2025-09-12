import { useEffect, useState, type FC } from "react";
import { sidebarLinks, socialAccounts } from "../../data/data";
import AOS from "aos";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface SidebarInt {
  t: (e: string) => string;
}

const Sidebar: FC<SidebarInt> = ({ t }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Mobile toggle button for md and smaller */}
      <button
        className={`fixed top-5 left-5 z-50 rounded-lg bg-white p-2 shadow-lg md:hidden ${open ? "hidden" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-64 transform flex-col justify-between bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out md:static md:w-64 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${open ? "rounded-r-3xl" : "rounded-3xl"}`}
        aria-label="Sidebar with navigation links and social accounts"
      >
        <header>
          <h1 className="font-serif text-3xl font-extrabold tracking-tight text-gray-800 md:text-4xl">
            Fahchouch <br /> Mohammed
          </h1>
          <h2 className="md:text-md text-sm font-semibold text-gray-600">
            {t("sidebar.titleDesc")}
          </h2>
        </header>

        {/* Page navigation */}
        <nav aria-label="Main navigation" className="mt-6 md:mt-8">
          <ul className="mb-6 flex flex-col gap-2">
            {sidebarLinks.map((e, i) => {
              const isSelected = location.pathname === e.path;
              return (
                <li key={i}>
                  <Link
                    to={e.path}
                    className={`btn btn-ghost ${
                      isSelected ? "text-primary bg-primary/10" : ""
                    } btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full justify-start rounded-3xl`}
                    aria-current={isSelected ? "page" : undefined}
                    rel={t("sidebar.linksRel." + e.titleKey)}
                    onClick={() => setOpen(false)}
                  >
                    {t("sidebar.links." + e.titleKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social account links */}
        <ul
          className="mt-auto flex justify-center gap-4"
          aria-label="Social media links"
        >
          {socialAccounts.map((e, i) => (
            <li key={i}>
              <a
                href={e.path}
                target="_blank"
                rel={t(
                  "sidebar.socialAccountsLinksRel." + e.label.toLowerCase(),
                )}
                aria-label={e.label}
              >
                <e.icon className="h-7 w-7 rounded-lg border-2 p-0.5 shadow-lg hover:text-sky-500" />
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile overlay for md and smaller */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
