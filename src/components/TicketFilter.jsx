import { ChevronDown } from "lucide-react";

export default function TicketFilter() {
  return (
    <div className="fixed top-24 left-[22rem] w-80 bg-white border border-slate-200 rounded-lg shadow-2xl z-[9999]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="text-sm font-semibold">Ticket Filters</span>
        <button className="text-sm text-slate-400 hover:text-slate-600">
          Reset
        </button>
      </div>

      {/* Filters options */}
      <div className="p-4 space-y-3 text-sm">
        {[
          "Project: All",
          "Type: All",
          "Status: All",
          "Assignee: All",
        ].map((label) => (
          <div
            key={label}
            className="flex items-center justify-between border rounded px-3 py-2 cursor-pointer hover:bg-slate-50"
          >
            <span>{label}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        ))}

        <button className="text-blue-600 text-sm font-medium">
          + More
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 px-4 py-3 border-t">
        <input
          placeholder="Name this view..."
          className="flex-1 px-3 py-2 text-sm border rounded focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded">
          Save new view
        </button>
      </div>
    </div>
  );
}
