import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// React Router
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Welcome page components
import WelcomeHeader  from "./src/components/WelcomeHeader.js";
import WelcomeHero    from "./src/components/WelcomeHero.js";
import WelcomeEvents  from "./src/components/WelcomeEvents.js";
import WelcomeActions from "./src/components/WelcomeActions.js";

// Booking page components
import AttendeeDetails from "./src/Components/AttendeeDetails.js";
import TicketSelector  from "./src/Components/TicketSelector.js";
import TicketPage      from "./src/Components/TicketPage.js";
import OrderSummary    from "./src/Components/OrderSummary.js";

// Login page
import LoginPage from "./src/Components/LoginPage.js";



/* ============================================
   WELCOME PAGE — shown at "/"
   ============================================ */

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <WelcomeHeader />
      <WelcomeHero />
      <WelcomeEvents />
      <WelcomeActions />
    </div>
  );
};



/* ============================================
   EVENTS LIST PAGE — shown at "/events"
   Opens when Browse or Calendar is clicked
   ============================================ */

const EventsPage = () => {

  const navigate = useNavigate();

  return (
    <div className="welcome-page">

      <WelcomeHeader />

      <div className="welcome-section">
        <div className="welcome-section-header">
          <span className="welcome-section-title">All Events</span>
        </div>

        <div className="welcome-events-grid">

          <div className="welcome-event-card">
            <div className="welcome-event-banner blue">🎵</div>
            <div className="welcome-event-body">
              <p className="welcome-event-name">Techno Fest 2026</p>
              <p className="welcome-event-meta">28 May · 6:00 PM · Amphitheatre</p>
              <div className="welcome-event-footer">
                <span className="welcome-event-price blue">₹150 onwards</span>
                <button
                  className="welcome-book-btn blue"
                  onClick={() => navigate("/book")}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>

          <div className="welcome-event-card">
            <div className="welcome-event-banner purple">💻</div>
            <div className="welcome-event-body">
              <p className="welcome-event-name">Hackathon 2026</p>
              <p className="welcome-event-meta">1 Jun · 9:00 AM · Tech Block</p>
              <div className="welcome-event-footer">
                <span className="welcome-event-price purple">Free</span>
                <button
                  className="welcome-book-btn purple"
                  onClick={() => navigate("/book")}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>

          <div className="welcome-event-card">
            <div className="welcome-event-banner teal">🎤</div>
            <div className="welcome-event-body">
              <p className="welcome-event-name">TEDx Campus</p>
              <p className="welcome-event-meta">5 Jun · 10:00 AM · Auditorium</p>
              <div className="welcome-event-footer">
                <span className="welcome-event-price teal">₹200 onwards</span>
                <button
                  className="welcome-book-btn teal"
                  onClick={() => navigate("/book")}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};



/* ============================================
   BOOKING PAGE — shown at "/book"
   Opens when Book now is clicked on any event
   ============================================ */

const BookingPage = () => {

  const [attendee, setAttendee] = useState({
    fullName: "",
    studentId: "",
    email: "",
    department: "Computer Science",
  });

  const [ticketCounts, setTicketCounts] = useState({
    general: 0,
    vip: 0,
    faculty: 0,
  });

  return (
    <div className="app">

      <WelcomeHeader />

      <div className="main-grid">

        <div className="left-col">
          <AttendeeDetails
            value={attendee}
            onChange={(updated) => setAttendee(updated)}
          />
          <TicketSelector
            onChange={(updated) => setTicketCounts(updated)}
          />
        </div>

        <div className="right-col">
          <OrderSummary
            ticketCounts={ticketCounts}
            attendee={attendee}
          />
        </div>

      </div>
    </div>
  );
};



/* ============================================
   MY TICKETS PAGE — shown at "/my-tickets"
   Opens when My Tickets is clicked in header
   ============================================ */

const MyTicketsPage = () => {
  return (
    <div className="welcome-page">

      <WelcomeHeader />

      <div className="welcome-section">
        <div className="welcome-section-header">
          <span className="welcome-section-title">My Tickets</span>
        </div>

        <div className="my-tickets-empty">
          <p className="my-tickets-emoji">🎟</p>
          <p className="my-tickets-msg">No tickets yet</p>
          <p className="my-tickets-sub">
            Browse events and book your first ticket
          </p>
        </div>
      </div>

    </div>
  );
};



/* ============================================
   APP ROOT — wires all pages to their routes
   ============================================ */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default — welcome page */}
        <Route path="/"           element={<WelcomePage />}   />

        {/* Browse / Calendar button */}
        <Route path="/events"     element={<EventsPage />}    />

        {/* Sign in button on welcome header */}
        <Route path="/login"      element={<LoginPage />}     />

        {/* Sign in button on login page — goes to attendee details */}
        <Route path="/attendee"   element={<BookingPage />}   />

        {/* Book now button on any event card */}
        <Route path="/book"       element={<TicketPage />}    />

        {/* My Tickets button in header */}
        <Route path="/my-tickets" element={<MyTicketsPage />} />

      </Routes>
    </BrowserRouter>
  );
};



/* ============================================
   RENDER
   ============================================ */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);