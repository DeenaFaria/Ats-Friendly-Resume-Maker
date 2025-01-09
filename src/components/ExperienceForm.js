import React, { useState } from "react";

const ExperienceForm = ({ onUpdate }) => {
  const [experiences, setExperiences] = useState([]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { jobTitle: "", company: "", duration: "", description: "" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setExperiences(updatedExperiences);
    onUpdate(updatedExperiences); // Update parent component
  };

  return (
    <div>
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index}>
          <label>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              value={exp.jobTitle}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={exp.duration}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
