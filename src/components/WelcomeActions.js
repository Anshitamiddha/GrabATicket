import { useNavigate } from "react-router-dom";

// All quick actions in one place — add more here if needed
const ACTIONS = [
  { label: "Browse all events", emoji: "🔍", color: "blue",   route: "/events"        },
  { label: "My tickets",        emoji: "🎟", color: "purple", route: "/my-tickets"    },
  { label: "Event calendar",    emoji: "📅", color: "teal",   route: "/calendar"      },
  { label: "Notifications",     emoji: "🔔", color: "amber",  route: "/notifications" },
];

export default function WelcomeActions() {

  const navigate = useNavigate();

  return (
    <div className="welcome-actions-grid">

      {/* Render each action card from the array */}
      {ACTIONS.map((action) => (
        <div
          className="welcome-action-card"
          key={action.label}
          onClick={() => navigate(action.route)}
        >

          {/* Coloured icon box */}
          <div className={`welcome-action-icon ${action.color}`}>
            {action.emoji}
          </div>

          {/* Label text */}
          <span className="welcome-action-label">{action.label}</span>

        </div>
      ))}

    </div>
  );
}