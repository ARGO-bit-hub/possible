import React, { useState } from "react";

function App() {
  const [confirmation, setConfirmation] = useState("");
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    schoolName: "",
    course: "",
    parentName: "",
    address: "",
    parentPhone: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(
      `Thank you! We have received the details for ${formData.studentName} (Class ${formData.studentClass}, ${formData.course} course, ${formData.schoolName}) and will contact the parent at ${formData.parentPhone}.`
    );
    setFormData({
      studentName: "",
      studentClass: "",
      schoolName: "",
      course: "",
      parentName: "",
      address: "",
      parentPhone: ""
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f7f9fb" }}>
      <header style={{
        backgroundColor: "#0084FF",
        color: "white",
        padding: 20,
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>Possible Classes</h1>
        <h2 style={{ margin: 1, fontSize: 20 }}>2nd Floor Surmil Complex, Singhmore, Ranchi</h2>
        <p style={{ fontStyle: "italic", fontSize: 16 }}>'From Impossible to I&apos;m Possible'</p>
      </header>

      <form
        style={{
          background: "white",
          maxWidth: 400,
          margin: "30px auto",
          padding: 20,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "left"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="studentName" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Student&apos;s Name:
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        />

        <label htmlFor="studentClass" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Class:
        </label>
        <select
          id="studentClass"
          name="studentClass"
          value={formData.studentClass}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        >
          <option value="">--Select Class--</option>
          <option value="Six (VI)">Six (VI)</option>
          <option value="Seven (VII)">Seven (VII)</option>
          <option value="Eight (VIII)">Eight (VIII)</option>
          <option value="Nine (IX)">Nine (IX)</option>
          <option value="Ten (X)">Ten (X)</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="schoolName" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          School&apos;s Name:
        </label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        />

        <label htmlFor="course" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Course Interested In:
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        >
          <option value="">--Select Course--</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science [Physics, Chemistry, Biology]</option>
          <option value="English">English [Language, Literature]</option>
          <option value="Computer">Computer</option>
          <option value="Economics">Economics</option>
          <option value="Geography">Geography</option>
        </select>

        <label htmlFor="parentName" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Father&apos;s / Mother&apos;s Name:
        </label>
        <input
          type="text"
          id="parentName"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        />

        <label htmlFor="address" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="--Optional--"
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        />

        <label htmlFor="parentPhone" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Parent&apos;s Phone Number:
        </label>
        <input
          type="tel"
          id="parentPhone"
          name="parentPhone"
          pattern="[0-9]{10}"
          placeholder="10-digit number"
          value={formData.parentPhone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            marginTop: 5,
            border: "1px solid #ccc",
            borderRadius: 4
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: 15,
            backgroundColor: "#0077b6",
            color: "white",
            padding: 10,
            border: "none",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      {confirmation && (
        <div
          style={{
            marginTop: 20,
            fontWeight: "bold",
            color: "green",
            textAlign: "center"
          }}
        >
          {confirmation}
        </div>
      )}

      <footer style={{ textAlign: "center", margin: "30px 0 0 0", color: "#333" }}>
        Contact us: +91-7909006534 -or- 8294232560
      </footer>
    </div>
  );
}

export default App;