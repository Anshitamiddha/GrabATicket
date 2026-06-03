# 🎟️ GrabATicket - Student Ticket Portal

## Environment Setup

The Student Ticket Portal was developed using React and Parcel Bundler. The following steps were used to set up the development environment.

## Step 1: Initialize Git Repository

A Git repository was created for version control.

git init
## Step 2: Initialize Node Package Manager

A new Node.js project was initialized.

npm init -y

This generated the package.json file for dependency management.

## Step 3: Install React

React and ReactDOM were installed as project dependencies.

npm install react react-dom
## Step 4: Install Parcel Bundler

Parcel was installed as a development dependency.

npm install -D parcel
Step 5: Configure package.json

The default entry:

"main": "index.html"

was removed from package.json.

The following scripts were added:

"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
## Step 6: Run the Application

The development server was started using:

npx parcel index.html

or

npm start

Parcel automatically serves the application and reloads the browser whenever changes are made.

## Step 7: Build for Production

To generate an optimized production build:

npm run build

The compiled files are generated inside the dist/ directory.

Development Workflow Followed

The complete setup process used during development was:

git init

npm init -y

npm install react react-dom

npm install -D parcel

npx parcel index.html

After setup:

Removed "main": "index.html" from package.json
Added start and build scripts
Created React components inside the src/components directory
Used Parcel for development server, bundling, and production builds

## 1. Introduction

Student Ticket Portal is a web-based event ticket booking platform designed specifically for university students. The system enables students to browse upcoming campus events, view event details, select ticket types, provide attendee information, and simulate ticket purchases through an interactive user interface.

The application is built using React and follows a component-based architecture to ensure scalability, maintainability, and code reusability.

---



## 2. Problem Statement

Universities regularly organize workshops, hackathons, seminars, technical festivals, and cultural events. Managing registrations manually can be time-consuming and prone to errors.

The Student Ticket Portal addresses these challenges by providing:

* Centralized event browsing
* Digital ticket booking
* Student information collection
* Real-time ticket cost calculation
* Seamless navigation between event pages

---

## 3. Objectives

The primary objectives of this project are:

* Create a user-friendly event booking platform
* Allow students to discover university events
* Enable ticket selection and booking
* Provide instant order summaries
* Demonstrate React component communication and state management
* Build a scalable frontend architecture ready for backend integration

---

## 4. System Architecture

The application currently follows a frontend-only architecture.

```text
User
  │
  ▼
React Frontend
  │
  ▼
Local State Management
```

No backend or database is currently connected. Event information and booking details are stored using React state.

---

## 5. Technology Stack

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| React             | Building reusable UI components |
| React Router DOM  | Navigation and routing          |
| JavaScript (ES6+) | Application logic               |
| CSS3              | Styling and responsive design   |
| ReactDOM          | Rendering React components      |

---

## 6. Application Workflow

### Step 1: Landing Page

Users can:

* Browse Events
* View Upcoming Activities
* Access Quick Actions
* Sign In

### Step 2: Event Selection

Users can:

* View available events
* Read event descriptions
* Check venue and timings
* View ticket pricing

### Step 3: Login

Students enter:

* Email Address
* Password

(Currently used for navigation purposes only.)

### Step 4: Attendee Information

Students provide:

* Full Name
* Student ID
* Email Address
* Department

### Step 5: Ticket Selection

Users choose ticket quantities for:

* General Entry
* VIP Pass
* Faculty / Guest Pass

### Step 6: Order Review

The system automatically calculates:

```text
Subtotal
+ Convenience Fee (6%)
-----------------------
Final Total
```

### Step 7: Payment Simulation

Upon clicking the payment button, the system displays:

```javascript
alert("Payment Successful!");
```

This simulates a successful transaction.

---

## 7. Routing Structure

| Route       | Description           |
| ----------- | --------------------- |
| /           | Welcome Page          |
| /events     | Events Listing        |
| /technofest | TechnoFest Event Page |
| /login      | Student Login         |
| /attendee   | Attendee Information  |
| /book       | Ticket Booking        |
| /my-tickets | Ticket History        |

---

## 

## 8. Project Structure
```text
GRABATICKET
│
├── .parcel-cache/
├── dist/
├── node_modules/
│
├── src/
│   └── components/
│       ├── utils/
│       │   └── URLS.js
│       │
│       ├── AttendeeDetails.js
│       ├── Body.js
│       ├── Calender.js
│       ├── Footer.js
│       ├── LoginPage.js
│       ├── MyTicket.js
│       ├── OrderSummary.js
│       ├── TechnoFest.js
│       ├── TicketPage.js
│       ├── TicketSelector.js
│       ├── WelcomeActions.js
│       ├── WelcomeEvents.js
│       ├── WelcomeHeader.js
│       └── WelcomeHero.js
│
├── App.js
├── index.html
├── style.css
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Component Responsibilities

| Component       | Purpose                             |
| --------------- | ----------------------------------- |
| WelcomeHeader   | Navigation bar and branding         |
| WelcomeHero     | Landing page hero section           |
| WelcomeEvents   | Displays featured events            |
| WelcomeActions  | Quick action buttons and shortcuts  |
| LoginPage       | Student login interface             |
| AttendeeDetails | Collects attendee information       |
| TicketPage      | Main ticket booking page            |
| TicketSelector  | Ticket quantity selection           |
| OrderSummary    | Calculates subtotal, fee, and total |
| TechnoFest      | Event details page                  |
| MyTicket        | Displays booked tickets             |
| Calender        | Event schedule and dates            |
| Footer          | Website footer section              |
| Body            | Main page layout wrapper            |
| URLS.js         | Stores route and API constants      |

```
```

### App.js Architecture

App.js
│
├── Body
│   ├── WelcomeHeader
│   ├── WelcomeHero
│   ├── WelcomeEvents
│   ├── WelcomeActions
│   └── Footer
│
├── LoginPage
├── AttendeeDetails
├── TechnoFest
├── MyTicket
│
└── TicketPage
    ├── TicketSelector
    └── OrderSummary

```text
```


Each component follows the Single Responsibility Principle, improving maintainability and reusability.

---

### 9. State Management

The application uses React's built-in state management.

### Attendee State

```javascript
const [attendee, setAttendee] = useState({
  name: "",
  studentId: "",
  email: "",
  department: ""
});
```

Stores attendee information during the booking process.

### Ticket State

```javascript
const [ticketCounts, setTicketCounts] = useState({
  general: 0,
  vip: 0,
  guest: 0
});
```

Stores selected ticket quantities.

### Data Flow

```text
Parent Component
      │
      ▼
Child Component
      │
      ▼
onChange Callback
      │
      ▼
Updated Parent State
```

This approach is commonly known as **State Lifting**.

---

## 10. Fee Calculation Logic

The order summary dynamically calculates ticket costs.

### Formula

```text
Convenience Fee = Subtotal × 0.06

Total = Subtotal + Convenience Fee
```

### Example

```text
General Ticket = ₹150 × 2 = ₹300

Convenience Fee = ₹300 × 6% = ₹18

Final Total = ₹318
```

---

## 11. User Interface Design

The application follows a modern dark-theme design.

### Color Palette

| Element        | Color   |
| -------------- | ------- |
| Background     | #080c14 |
| Header         | #0a0f1e |
| Cards          | #0f172a |
| Primary Text   | #f1f5f9 |
| Accent Blue    | #2563eb |
| Secondary Text | #475569 |

### Design Principles

* Consistent spacing
* Reusable UI cards
* Responsive layouts
* Clear visual hierarchy
* Accessible form controls
* Interactive hover effects

---

## 12. Key Features

### Event Discovery

Students can browse upcoming university events.

### Dynamic Ticket Selection

Users can increase or decrease ticket quantities.

### Real-Time Pricing

Order totals update instantly based on selections.

### Form Validation Ready

Architecture supports future validation enhancements.

### Responsive Layout

Optimized for desktop, tablet, and mobile devices.

### Component Reusability

Reusable React components reduce duplication and improve maintainability.

---

## 13. Future Enhancements

* Backend Integration (Spring Boot / Node.js)
* Database Support (MySQL / MongoDB)
* User Authentication
* Payment Gateway Integration
* Ticket QR Code Generation
* Event Search and Filters
* Email Confirmation System
* Admin Dashboard for Event Management

---

## 14. Author

**Anshita Middha**

Frontend Developer | React Enthusiast

GitHub Repository: https://github.com/Anshitamiddha/GrabATicket
