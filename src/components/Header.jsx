import { Search, Plus, HelpCircle, Gift } from "lucide-react";

export default function Header() {
  return (
    <header className="h-14 w-full bg-blue-900 flex items-center px-4 text-white">
      {/* Companyh logo and the Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center font-bold">
          C
        </div>
        <span className=" text-lg">Helpdesk</span>
      </div>

      {/* Search bar */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300"
          />
          <input
            type="text"
            placeholder="Search Capacity..."
            className="w-full bg-black/50 text-sm text-white placeholder-blue-300 rounded pl-9 pr-3 py-2 focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons at Right corner*/}
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded text-sm flex items-center gap-1">
          <Plus size={14} />
          Create
        </button>

        <HelpCircle
          size={18}
          className="text-blue-200 hover:text-white cursor-pointer"
        />
        <Gift
          size={18}
          className="text-blue-200 hover:text-white cursor-pointer"
        />

        <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-sm font-medium">
          AH
        </div>
      </div>
    </header>
  );
}
