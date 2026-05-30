import { useState } from "react";
import WelcomeHeader  from "./WelcomeHeader";
import TicketSelector from "./TicketSelector";
import OrderSummary   from "./OrderSummary";

export default function TicketPage() {

  // Ticket counts lifted here so both components share the same state
  const [ticketCounts, setTicketCounts] = useState({
    general: 0,
    vip: 0,
    faculty: 0,
  });

  return (
    <div className="ticket-page">

      {/* Shared header */}
      <WelcomeHeader />

      {/* Two column layout — selector left, summary right */}
      <div className="ticket-page-grid">

        {/* LEFT — ticket type picker */}
        <div className="ticket-page-left">
          <TicketSelector
            onChange={(updated) => setTicketCounts(updated)}
          />
        </div>

        {/* RIGHT — live order summary */}
        <div className="ticket-page-right">
          <OrderSummary ticketCounts={ticketCounts} />
        </div>

      </div>
    </div>
  );
}