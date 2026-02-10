import {  ChevronDown } from "lucide-react";

export default function TicketViews() {
  return (
    <aside className="h-full bg-slate-100 border-r border-slate-200 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
          <ChevronDown size={14} />
          <span>Ticket Views</span>
        </div>
      </div>

      {/* Views list */}
      <div className="px-2 space-y-1 text-sm">
        {/* Active item */}
        <div className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white">
          <span className="font-medium">My Tickets</span>
          <span className="text-xs bg-blue-700 px-2 py-0.5 rounded-full">
            9
          </span>
        </div>

        <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-200 cursor-pointer">
          <span>Past Due</span>
          <span className="text-xs text-slate-500">4</span>
        </div>

        <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-200 cursor-pointer">
          <span>High Priority</span>
          <span className="text-xs text-slate-500">11</span>
        </div>

        <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-200 cursor-pointer">
          <span>Unassigned</span>
          <span className="text-xs text-slate-500">98</span>
        </div>

        <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-200 cursor-pointer">
          <span>All Tickets</span>
          <span className="text-xs text-slate-500">2,192</span>
        </div>
      </div>

      
    </aside>
  );
}
