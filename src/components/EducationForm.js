import React, { useState } from "react";

const EducationForm = ({ onUpdate }) => {
  const [education, setEducation] = useState([]);

  const handleAddEducation = () => {
    setEducation([...education, { school: "", degree: "", year: "" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    setEducation(updatedEducation);
    onUpdate(updatedEducation); // Update parent component
  };

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={edu.school}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              name="year"
              value={edu.year}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
