import { useState } from "react";

// All ticket types defined in one place — easy to add/remove/edit
const TICKET_TYPES = [
  { id: "general", name: "General Entry",   desc: "₹150 per ticket",                         price: 150 },
  { id: "vip",     name: "VIP Pass",        desc: "₹350 per ticket · Front rows + backstage", price: 350 },
  { id: "faculty", name: "Faculty / Guest", desc: "₹200 per ticket",                         price: 200 },
];

// onChange is optional — parent can listen to count changes (e.g. to update total)
export default function TicketSelector({ onChange }) {

  // Tracks how many of each ticket type the user has selected
  const [counts, setCounts] = useState({ general: 0, vip: 0, faculty: 0 });

  // delta is +1 or -1; Math.max(0, ...) prevents going below zero
  const change = (id, delta) => {
    const updated = { ...counts, [id]: Math.max(0, counts[id] + delta) };
    setCounts(updated);
    onChange?.(updated); // notify parent only if onChange was passed in
  };

  return (
    <div className="card">
      <h2>Select ticket type</h2>

      {/* Render one row per ticket type */}
      {TICKET_TYPES.map((t) => (
        <div className="ticket-row" key={t.id}>

          {/* Left side — ticket name and price description */}
          <div className="ticket-info">
            <p className="ticket-name">{t.name}</p>
            <p className="ticket-price">{t.desc}</p>
          </div>

          {/* Right side — counter with − count + buttons */}
          <div className="counter">
            <button onClick={() => change(t.id, -1)}>−</button>
            <span>{counts[t.id]}</span>
            <button onClick={() => change(t.id, +1)}>+</button>
          </div>

        </div>
      ))}
    </div>
  );
}