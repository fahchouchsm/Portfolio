import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import { Loading } from "./components/loading";
import "aos/dist/aos.css";
import { Welcome } from "./pages/welcome";
import "./i18n";

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100 p-1 flex">
        <Sidebar />
        <main className="h-full w-full p-6">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<div>ℹ️ About Page</div>} />
            <Route path="/projects" element={<div>💻 Projects Page</div>} />
            <Route path="/contact" element={<div>📧 Contact Page</div>} />
            {/* fallback */}
            <Route
              path="*"
              element={
                <div className="h-full w-full flex justify-center items-center">
                  <Loading />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
