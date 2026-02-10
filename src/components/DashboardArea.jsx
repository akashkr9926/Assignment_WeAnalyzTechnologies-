import { useState } from "react";
import MyTickets from "./MyTickets";
import TicketDetails from "./TicketDetails";
import TicketInfo from "./TicketInfo";
import TicketViews from "./TicketViews";
import TicketFilter from "./TicketFilter";

export default function DashboardArea() {
  const [showTicketViews, setShowTicketViews] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex-1 bg-slate-200 p-4 overflow-visible">
      <div className="h-full bg-white rounded flex overflow-visible relative">
        {/* Ticket Views */}
        {showTicketViews && <TicketViews />}

        {/* My Tickets */}
        <MyTickets
          onToggleTicketViews={() =>
            setShowTicketViews((prev) => !prev)
          }
          onToggleFilters={() =>
            setShowFilters((prev) => !prev)
          }
        />

        {/* Center panel*/}
        <TicketDetails />

        {/* Right panel */}
        <TicketInfo />

        {/* FILTER OVERLAPE */}
        {showFilters && (
          <div className="absolute top-20 left-[20rem] z-[999]">
            <TicketFilter />
          </div>
        )}
      </div>
    </div>
  );
}
