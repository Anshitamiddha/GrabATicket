import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo"></div>
            
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
                <div className="profile-logo"></div>
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