import "AttendeeDetails.css";
import { useState } from "react";

export default function AttendeeDetails() {

  // State to store all attendee form data
  const [form, setForm] = useState({
    fullName: "",
    studentId: "",
    email: "",
    department: "Computer Science"
  });

  // Generic function to update any field in the form state
  const update = (field) => (e) =>
    setForm({
      ...form,                 // Keep existing form values
      [field]: e.target.value  // Update only the selected field
    });

  return (
    <div className="card">
      {/* Form Heading */}
      <h2>Attendee Details</h2>

      <div className="grid-2">

        {/* Full Name Input */}
        <div className="field">
          <label>Full Name</label>
          <input
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="Aanya Sharma"
          />
        </div>

        {/* Student ID Input */}
        <div className="field">
          <label>Student ID</label>
          <input
            value={form.studentId}
            onChange={update("studentId")}
            placeholder="2022CSE0089"
          />
        </div>

        {/* Email Input */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="aanya@university.edu"
          />
        </div>

        {/* Department Dropdown */}
        <div className="field">
          <label>Department</label>
          <select
            value={form.department}
            onChange={update("department")}
          >
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>
        </div>

      </div>
    </div>
  );
}