import "./App.css";
import TopBar from "./components/Header";
import LeftIconBar from "./components/LeftIconBar";
import DashboardArea from "./components/DashboardArea";

export default function App() {
  return (
    <div className="h-screen w-screen bg-blue-900 overflow-hidden">
      <TopBar />
      <div className="h-screen flex flex-row flex-1 overflow-hidden">
        <LeftIconBar />
        <DashboardArea />
      </div>
    </div>
  );
}
