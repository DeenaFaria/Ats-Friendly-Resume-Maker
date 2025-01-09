import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Optional: Add a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>ATS Resume Maker</h1>
        <p>Create professional resumes in minutes!</p>
      </header>

      <section className="home-intro">
        <p>
          Stand out in your job applications with a clean and modern resume that
          is optimized for Applicant Tracking Systems (ATS). Easily input your
          details, preview in real-time, and export your resume as a PDF.
        </p>
        <Link to="/resume-maker">
          <button className="start-btn">Start Creating Your Resume</button>
        </Link>
      </section>

      <section className="home-features">
        <h2>Features</h2>
        <ul>
          <li>Simple forms to input your contact, experience, and education details.</li>
          <li>Live preview of your resume as you type.</li>
          <li>Download your resume as a PDF.</li>
        </ul>
      </section>

      <section className="home-how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Enter your details in the easy-to-use forms.</li>
          <li>Preview your resume in real-time.</li>
          <li>Download and share your resume in a professional format.</li>
        </ol>
      </section>

      <footer className="home-footer">
        <p>© 2025 ATS Resume Maker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
