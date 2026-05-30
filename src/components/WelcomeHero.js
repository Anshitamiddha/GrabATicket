import { useNavigate } from "react-router-dom";

export default function WelcomeHero() {

  const navigate = useNavigate();

  return (
    <div className="welcome-hero">

      {/* Small pill tag above the heading */}
      <div className="welcome-hero-tag">
        ✦ Your campus, your events
      </div>

      {/* Main heading — accent colour on second line */}
      <h1 className="welcome-hero-heading">
        Book tickets for <br />
        <span className="welcome-hero-accent">every campus event</span>
      </h1>

      {/* Supporting description */}
      <p className="welcome-hero-sub">
        Fests, workshops, seminars and more — all in one place
        for students of Chandigarh University.
      </p>

      {/* Two call to action buttons */}
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
  );
}