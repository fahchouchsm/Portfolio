import Sidebar from "./components/sidebar/sidebar";
import { ThemeController } from "./components/themeController";

function App() {
  return (
    <>
      <div className="h-screen bg-white">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Sidebar />
        <ThemeController />
      </div>
    </>
  );
}

export default App;
