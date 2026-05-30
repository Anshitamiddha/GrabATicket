const TICKETS = {
  general: { label: "General Entry",   price: 150 },
  vip:     { label: "VIP Pass",        price: 350 },
  faculty: { label: "Faculty / Guest", price: 200 },
};

const CONVENIENCE_FEE_RATE = 0.06;

export default function OrderSummary({ ticketCounts }) {

  const selectedItems = Object.entries(ticketCounts).filter(([, qty]) => qty > 0);

  const subtotal = selectedItems.reduce(
    (sum, [id, qty]) => sum + TICKETS[id].price * qty, 0
  );
  const fee = Math.round(subtotal * CONVENIENCE_FEE_RATE);
  const total = subtotal + fee;

  return (
    <div className="card">

      <h2>Techno Fest 2026</h2>
      <p className="event-meta">28 May 2026 · 6:00 PM · Open Air Amphitheatre</p>

      <hr className="divider" />

      <div className="line-items">
        {selectedItems.length === 0 ? (
          <p className="empty">No tickets selected yet.</p>
        ) : (
          selectedItems.map(([id, qty]) => (
            <div className="summary-row" key={id}>
              <span>{TICKETS[id].label} × {qty}</span>
              <span>₹{TICKETS[id].price * qty}</span>
            </div>
          ))
        )}
      </div>

      <hr className="divider" />

      <div className="summary-row">
        <span>Convenience fee</span>
        <span>₹{fee}</span>
      </div>

      <hr className="divider" />

      <div className="summary-row total-row">
        <span>Total payable</span>
        <span>₹{total}</span>
      </div>

      <button
        className="pay-btn"
        disabled={total === 0}
        onClick={() => alert(`Proceeding to pay ₹${total}`)}
      >
        🔒 Pay ₹{total}
      </button>

      <p className="gateway-note">Secured by university payment gateway</p>
      <p className="email-note">
        Your e-ticket will be sent to your registered university email. Show QR code at entry.
      </p>

    </div>
  );
}