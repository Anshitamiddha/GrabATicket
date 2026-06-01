import { useNavigate } from "react-router-dom";
import { PortalLogo } from "./utils/URLs";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <div className="login-logo-icon">
            <img src={PortalLogo} alt="Portal Logo" />
          </div>

          <h1 className="login-logo-text">
            Student Ticket Portal
          </h1>

          <p className="login-subtitle">
            Sign in with your university credentials to continue
          </p>
        </div>

        <form className="login-form">

          <div className="login-input-group">
            <label htmlFor="email" className="login-label">
              University Email
            </label>

            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="you@college.edu"
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="password" className="login-label">
              Password
            </label>

            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="login-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/attendee");
            }}
          >
            Sign In
          </button>

          <div className="login-footer-note">
            Use your official university email and password
          </div>

        </form>
      </div>
    </div>
  );
}