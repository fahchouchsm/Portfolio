import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import { Loading } from "./components/loading";
import "aos/dist/aos.css";
import { Welcome } from "./pages/welcome/welcome";
import "./translation/i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LanguageSelect } from "./components/languageSelect";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // i18n.changeLanguage("en");
  });

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 p-1">
        <Sidebar t={t} />
        <main className="h-full w-full p-6">
          {/* language selector */}
          <LanguageSelect t={t} i18n={i18n} />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<div>ℹ️ About Page</div>} />
            <Route path="/projects" element={<div>💻 Projects Page</div>} />
            <Route path="/contact" element={<div>📧 Contact Page</div>} />
            {/* fallback */}
            <Route
              path="*"
              element={
                <div className="flex h-full w-full items-center justify-center">
                  <Loading />
                </div>
              }
            />
          </Routes>
        </main>
        <a
          href="https://wakatime.com/badge/user/121014c5-6d47-4868-b332-98e5c1ac55da/project/e8c4deac-9d0d-4dba-8918-c265cbb4e104"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-0 bottom-0 z-10 rounded-none"
        >
          <img
            src="https://wakatime.com/badge/user/121014c5-6d47-4868-b332-98e5c1ac55da/project/e8c4deac-9d0d-4dba-8918-c265cbb4e104.svg"
            alt="wakatime"
          />
        </a>
      </div>
    </Router>
  );
}

export default App;
