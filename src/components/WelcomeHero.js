import { useNavigate } from "react-router-dom";
 
const purposeItems = [
  {
    icon: "🎟️",
    title: "One-tap ticketing",
    desc: "Reserve your seat at any campus event in seconds — no queues, no hassle.",
  },
  {
    icon: "📅",
    title: "Never miss out",
    desc: "Browse upcoming fests, workshops, seminars and club events all in one feed.",
  },
  {
    icon: "🎓",
    title: "Built for CU students",
    desc: "Exclusively for Chandigarh University — log in with your campus credentials.",
  },
  {
    icon: "📲",
    title: "Your tickets, always with you",
    desc: "Access QR-coded tickets from your phone at the venue gate, any time.",
  },
];
 
export default function WelcomeHero() {
  const navigate = useNavigate();
 
  return (
    <>
      {/* ── Hero ── */}
      <div className="welcome-hero">
        <div className="welcome-hero-tag">✦ Your campus, your events</div>
 
        <h1 className="welcome-hero-heading">
          Book tickets for <br />
          <span className="welcome-hero-accent">every campus event</span>
        </h1>
 
        <p className="welcome-hero-sub">
          Fests, workshops, seminars and more — all in one place
          for students of Chandigarh University.
        </p>
 
        <div className="welcome-hero-actions">
          <button
            className="welcome-btn-primary"
            onClick={() => navigate("/events")}
          >
            Browse events
          </button>
          <button
            className="welcome-btn-ghost"
            onClick={() => navigate("/my-tickets")}
          >
            My tickets
          </button>
        </div>
      </div>
 
      {/* ── Purpose section ── */}
      <section className="purpose-section">
        <div className="purpose-label">Why use this platform?</div>
        <h2 className="purpose-heading">Everything campus events need</h2>
        <p className="purpose-sub">
          One platform designed to make discovering and attending
          university events effortless for every CU student.
        </p>
 
        <div className="purpose-grid">
          {purposeItems.map((item) => (
            <div className="purpose-card" key={item.title}>
              <span className="purpose-card-icon">{item.icon}</span>
              <h3 className="purpose-card-title">{item.title}</h3>
              <p className="purpose-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
 