import React from "react";
import { PortalLogo, ProfileLogo } from "./utils/URLs";
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
               <img
    src={PortalLogo}
    alt="Portal Logo"
    onError={(e) => console.log("PortalLogo failed to load", e)}
/></div>
            
            <div className="logocaption">
                <h4>Student Ticket Portal</h4>
            </div>

            <div className="browse-btn">
                <button>Browse</button>
            </div>

            <div className="my-ticket-btn">
                <button>My Tickets</button>
            </div>

            <div className="calendar">
                <button>Calendar</button>
            </div>

            <div className="profile-btn">
                <div className="profile-logo">
                    <img src={ProfileLogo} alt="Portal Logo" />

                </div>
                <div className="name">
                    <h3>Ananya Panday</h3>
                </div>
                <div className="user-details">
                    <h4>CSE 3rd Year</h4>
                </div>
            </div>
        </div>
    );
};

export default Header;