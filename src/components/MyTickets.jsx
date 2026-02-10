import { useState } from "react";
import TicketFilter from "./TicketFilter";

import {
  Menu,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

const ticketTitles = [
  "Soluta quam velit",
  "Laudantium neque veritatis",
  "Molestiae saepe illum",
  "Dignissimos maiores porro",
  "Nihil porro repudiandae",
  "Soluta quam velit",
  "Laudantium neque veritatis",
  "Molestiae saepe illum",
  "Dignissimos maiores porro",
  "Nihil porro repudiandae",
];

export default function MyTickets({ onToggleTicketViews }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative">
      {/* MY TICKETS PANEL  */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-slate-200">
          {/* Top row */}
          <div className="flex items-center justify-between mb-3">
            {/* Left button */}
            <div className="flex items-center gap-2">
              <button onClick={onToggleTicketViews}>
                <Menu size={16} className="text-slate-500" />
              </button>

              <span className="text-sm font-semibold text-slate-800">
                My Tickets
              </span>

              <ChevronDown size={16} className="text-slate-500" />
            </div>

            {/* Filter button */}
            <button
              className="text-slate-500 hover:text-slate-700"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <SlidersHorizontal size={16} />
            </button>
          </div>

          {/* Search bar */}
          <div className="border-t border-b border-slate-300 py-2">
            <input
              placeholder="Search tickets"
              className="w-full text-sm px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Ticket list */}
        <div className="flex-1 overflow-y-auto">
          {ticketTitles.map((title, i) => (
            <div
              key={i}
              className="px-4 py-3 border-b cursor-pointer hover:bg-blue-200"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-slate-800">
                  {title}
                </p>
                <span className="text-xs text-slate-400">
                  Nov 14
                </span>
              </div>

              <div className="flex items-center gap-8 mt-2 font-bold text-xs text-slate-600">
                <input type="checkbox" />
                <span className="font-medium">APPS-216</span>
                <span className="px-2 py-0.5 rounded-full text-blue-600 bg-blue-200">
                  To Do
                </span>

                {/* circle buttons */}
                <div className="flex items-center gap-1 ml-auto">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[6px] font-semibold">
                    AH
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-400 text-white flex items-center justify-center text-[6px] font-semibold">
                    AH
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* === FILTER OVERLAY (NO STYLING CHANGES) === */}
      {showFilters && <TicketFilter />}
    </div>
  );
}
