import { useNavigate } from "react-router-dom";
import { PortalLogo } from "./utils/URLs";

export default function WelcomeHeader() {

  const navigate = useNavigate();

  return (
    <div className="welcome-header">

      {/* Logo icon box */}
      <div className="welcome-logo-icon">
        <img src={PortalLogo} alt="Portal Logo" />
      </div>

      {/* App name */}
      <span className="welcome-logo-text">Student Ticket Portal</span>

      {/* Nav links + sign in — pushed to the right */}
      <div className="welcome-header-right">
        <button className="welcome-header-link" onClick={() => navigate("/events")}>Browse</button>
        <button className="welcome-header-link" onClick={() => navigate("/my-tickets")}>My Tickets</button>
        <button className="welcome-header-link" onClick={() => navigate("/calendar")}>Calendar</button>
        <button className="welcome-signin-btn"  onClick={() => navigate("/login")}>Sign in</button>
      </div>

    </div>
  );
}