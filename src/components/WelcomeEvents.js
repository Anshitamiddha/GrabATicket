import { useNavigate } from "react-router-dom";

// All event data in one place — add or remove events here
const EVENTS = [
  {
    id: "techno-fest",
    name: "Techno Fest 2026",
    meta: "28 May · 6:00 PM · Amphitheatre",
    price: "₹150 onwards",
    emoji: "🎵",
    color: "blue",
  },
  {
    id: "hackathon",
    name: "Hackathon 2026",
    meta: "1 Jun · 9:00 AM · Tech Block",
    price: "Free",
    emoji: "💻",
    color: "purple",
  },
  {
    id: "tedx",
    name: "TEDx Campus",
    meta: "5 Jun · 10:00 AM · Auditorium",
    price: "₹200 onwards",
    emoji: "🎤",
    color: "teal",
  },
];

export default function WelcomeEvents() {

  const navigate = useNavigate();

  return (
    <div className="welcome-section">

      {/* Section heading + see all link */}
      <div className="welcome-section-header">
        <span className="welcome-section-title">Upcoming events</span>
        <button
          className="welcome-see-all"
          onClick={() => navigate("/events")}
        >
          See all →
        </button>
      </div>

      {/* Three event cards rendered from the array */}
      <div className="welcome-events-grid">
        {EVENTS.map((event) => (
          <div
            className="welcome-event-card"
            key={event.id}
            onClick={() => navigate(`/book/${event.id}`)}
          >

            {/* Coloured banner at the top */}
            <div className={`welcome-event-banner ${event.color}`}>
              {event.emoji}
            </div>

            {/* Card content */}
            <div className="welcome-event-body">
              <p className="welcome-event-name">{event.name}</p>
              <p className="welcome-event-meta">{event.meta}</p>

              {/* Price on left, book button on right */}
              <div className="welcome-event-footer">
                <span className={`welcome-event-price ${event.color}`}>
                  {event.price}
                </span>
                <button
                  className={`welcome-book-btn ${event.color}`}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click firing too
                    navigate(`/book/${event.id}`);
                  }}
                >
                  Book now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}