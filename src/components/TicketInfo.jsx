import { ChevronDown, Calendar, X } from "lucide-react";

export default function TicketInfo() {
  return (
    <aside className="w-72 bg-white border-l border-slate-200 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <button className="flex items-center gap-2 bg-blue-600 text-white text-xs px-3 py-1.5 rounded">
          To Do
          <ChevronDown size={14} />
        </button>

        <X size={16} className="text-slate-400 cursor-pointer" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 text-sm">
        {/* Priority */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">
            Priority
          </label>
          <div className="flex items-center justify-between border rounded px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Medium</span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>

        {/* Assigned To */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-semibold text-slate-500">
              Assigned To
            </label>
            <span className="text-xs text-blue-600 cursor-pointer">
              Assign to me
            </span>
          </div>
          <div className="flex items-center justify-between border rounded px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                AH
              </div>
              <span>Allie Harmon</span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>

        {/* Project */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">
            Project
          </label>
          <div className="flex items-center justify-between border rounded px-3 py-2">
            <span>Administrative</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>

        {/* Ticket Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">
            Ticket Type
          </label>
          <div className="flex items-center justify-between border rounded px-3 py-2">
            <span>Task</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">
            Due Date
          </label>
          <div className="flex items-center justify-between border rounded px-3 py-2 text-slate-400">
            <span>mm/dd/yyyy</span>
            <Calendar size={14} />
          </div>
        </div>

        {/* Reporter */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">
            Reporter
          </label>
          <div className="flex items-center justify-between border rounded px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                AH
              </div>
              <span>Allie Harmon</span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">
            Tags
          </label>
          <button className="text-blue-600 text-xs font-medium">
            Add Tag +
          </button>
        </div>
      </div>

      {/* Collapsible sections */}
      <div className="border-t border-slate-200">
        {[
          "TASKS",
          "COLLECTED FIELDS",
          "LINKED TICKETS",
          "HISTORY",
        ].map((label, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-3 border-b border-slate-200 text-xs font-semibold text-slate-600 cursor-pointer"
          >
            {label}
            <ChevronDown size={14} />
          </div>
        ))}
      </div>
    </aside>
  );
}
