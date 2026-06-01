import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, tag: "Competition", title: "Code Blitz",       time: "10 Mar · 9:00 AM",  venue: "Block 21, Lab 4",       price: 199, seats: 120, filled: 94  },
  { id: 2, tag: "Workshop",    title: "AI & ML Bootcamp", time: "11 Mar · 11:00 AM", venue: "Seminar Hall A",         price: 299, seats: 80,  filled: 80  },
  { id: 3, tag: "Talk",        title: "Future of Web3",   time: "11 Mar · 3:00 PM",  venue: "Auditorium Block 3",     price: 0,   seats: 300, filled: 210 },
  { id: 4, tag: "Competition", title: "Robo Wars",        time: "12 Mar · 10:00 AM", venue: "Mechanical Lab Yard",    price: 499, seats: 60,  filled: 38  },
  { id: 5, tag: "Workshop",    title: "Cybersecurity CTF",time: "12 Mar · 1:00 PM",  venue: "Block 18, Server Room",  price: 149, seats: 50,  filled: 44  },
  { id: 6, tag: "Exhibition",  title: "Startup Showcase", time: "12 Mar · 4:00 PM",  venue: "Main Lawn",              price: 0,   seats: 500, filled: 180 },
];

export default function TechnoFest() {
  const navigate = useNavigate();

  return (
    <div className="tf-page">

      {/* Hero banner */}
      <div className="tf-banner">
        <h1 className="tf-banner-title">TechnoFest 2025</h1>
        <p className="tf-banner-sub">Chandigarh University &nbsp;·&nbsp; March 10–12, 2025</p>
        <div className="tf-banner-pills">
          <span className="tf-pill">6 Events</span>
          <span className="tf-pill">3 Days</span>
          <span className="tf-pill">1000+ Students</span>
        </div>
      </div>

      {/* Events */}
      <div className="tf-body">
        <h2 className="tf-section-heading">Events</h2>

        <div className="tf-list">
          {events.map((ev) => {
            const full = ev.filled >= ev.seats;
            return (
              <div className="tf-item" key={ev.id}>
                <div className="tf-item-left">
                  <span className={`tf-badge tf-badge--${ev.tag.toLowerCase()}`}>
                    {ev.tag}
                  </span>
                  <div className="tf-item-info">
                    <p className="tf-item-name">{ev.title}</p>
                    <p className="tf-item-meta">{ev.time} &nbsp;·&nbsp; {ev.venue}</p>
                  </div>
                </div>

                <div className="tf-item-right">
                  <span className="tf-item-price">
                    {ev.price === 0 ? "Free" : `₹${ev.price}`}
                  </span>
                  <button
                    className="tf-item-btn"
                    disabled={full}
                    onClick={() => navigate("/book")}
                  >
                    {full ? "Housefull" : "Book now"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}