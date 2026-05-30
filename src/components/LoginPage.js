import { useNavigate } from "react-router-dom";
import { PortalLogo } from "./utils/URLs";

export default function LoginPage() {

  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo + app name */}
        <div className="login-logo">
          <div className="login-logo-icon">
            <img src={PortalLogo} alt="Portal Logo" />
          </div>
          <p className="login-logo-text">Student Ticket Portal</p>
        </div>

        {/* Subtitle */}
        <p className="login-subtitle">
          Sign in with your university credentials to continue
        </p>

        {/* Form */}
        <form className="login-form">

          <div className="login-input-group">
            <label className="login-label">Email</label>
            <input className="login-input" placeholder="you@college.edu" />
          </div>

          <div className="login-input-group">
            <label className="login-label">Password</label>
            <input className="login-input" type="password" placeholder="••••••••" />
          </div>

          {/* Goes to attendee details after sign in */}
          <button
            className="login-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/attendee");
            }}
          >
            Sign in
          </button>

          {/* "or" divider */}
          <div className="login-divider"><span>or</span></div>

          {/* Sign up link */}
          <div className="login-footer">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>

        </form>
      </div>
    </div>
  );
}