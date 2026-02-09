import {
  Home,
  Lightbulb,
  Ticket,
  FileText,
  LayoutGrid,
  Layers,
  Share2,
  Bot,
  Database,
  RefreshCw,
  BarChart3,
  Settings,
} from "lucide-react";

const icons = [
  Home,
  Lightbulb,
  Ticket,
  FileText,
  LayoutGrid,
  Layers,
  Share2,
  Bot,
  Database,
  RefreshCw,
  BarChart3,
  Settings
];

export default function LeftIconBar() {
  return (
    <aside className="w-14 h-full bg-blue-900 flex flex-col items-center py-3 border-r border-blue-800">
      {/* Icons */}
      <div className="flex flex-col gap-3">
        {icons.map((Icon, i) => (
          <button
            key={i}
            className="w-9 h-9 flex items-center justify-center rounded hover:bg-blue-800 text-blue-400 hover:text-blue-200"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </aside>
  );
}
