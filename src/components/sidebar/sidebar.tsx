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
        className={`fixed top-3 left-3 z-50 rounded-xl bg-base-100/95 p-2.5 shadow-md backdrop-blur md:hidden ${open ? "hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-[82%] max-w-sm transform flex-col bg-white px-4 py-5 shadow-2xl transition-transform duration-300 ease-in-out md:static md:z-0 md:h-full md:w-3/12 md:max-w-none md:translate-x-0 md:rounded-3xl md:p-5 md:shadow-none ${
          open ? "translate-x-0 rounded-r-3xl" : "-translate-x-full"
        }`}
        aria-label={t("sidebar.asideRel")}
      >
        <header className="border-b border-base-200 pb-4 md:border-b-0 md:pb-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="font-serif text-3xl font-extrabold tracking-tight text-gray-800 md:text-4xl">
                Fahchouch <br /> Mohammed
              </h1>
              <h2 className="text-md font-semibold text-gray-600">
                {t("sidebar.titleDesc")}
              </h2>
            </div>
            <button
              className="btn btn-ghost btn-sm btn-circle md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          {/* Page navigation */}
          <nav aria-label="Main navigation" className="mt-4 overflow-y-auto md:mt-8">
            <ul className="mb-6 flex flex-col gap-2">
              {sidebarLinks.map((e, i) => {
                const isSelected = location.pathname === e.path;
                return (
                  <li key={i}>
                    <Link
                      to={e.path}
                      className={`btn btn-ghost btn-lg flex w-full justify-between rounded-2xl ${isSelected ? "bg-primary text-white" : ""}`}
                      aria-current={isSelected ? "page" : undefined}
                      rel={t("sidebar.linksRel." + e.titleKey)}
                      onClick={() => setOpen(false)}
                    >
                      <div>{t("sidebar.links." + e.titleKey)}</div>
                      <div>
                        <e.icon />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social account links */}
          <ul
            className="mt-auto flex justify-center gap-4 border-t border-base-200 pt-4 md:border-t-0 md:pt-0"
            aria-label="Social media links"
          >
            {socialAccounts.map((e, i) => (
              <li key={i}>
                <a
                  href={e.path}
                  target="_blank"
                  rel={t("sidebar.socialAccountsLinksRel." + e.label.toLowerCase())}
                  aria-label={e.label}
                >
                  <e.icon className="h-7 w-7 rounded-lg border-2 p-0.5 shadow-lg hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/35 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
