import "./Event-Details_Style.css";
import { useState } from "react";

export default function AttendeeDetails() {

  const [form, setForm] = useState({
    fullName: "",
    studentId: "",
    email: "",
    department: ""
  });

  return (
    <div>

      <h2>Attendee Details</h2>

      {/* Full Name */}
      <div>
        <label>Full Name</label>

        <input
          value={form.fullName}
          onChange={(e) => {
            setForm({
              ...form,
              fullName: e.target.value
            });
          }}
        />
      </div>

      {/* Student ID */}
      <div>
        <label>Student ID</label>

        <input
          value={form.studentId}
          onChange={(e) => {
            setForm({
              ...form,
              studentId: e.target.value
            });
          }}
        />
      </div>

      {/* Email */}
      <div>
        <label>Email</label>

        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </div>

      {/* Department */}
      <div>
        <label>Department</label>

        <select
          value={form.department}
          onChange={(e) => {
            setForm({
              ...form,
              department: e.target.value
            });
          }}
        >
          <option>Computer Science</option>
          <option>Electronics</option>
          <option>Mechanical</option>
          <option>Civil</option>
        </select>

      </div>

    </div>
  );
}