import React, { useState } from "react";

const SkillsForm = ({ onUpdate }) => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skill.trim()) {
      const updatedSkills = [...skills, skill.trim()];
      setSkills(updatedSkills);
      onUpdate(updatedSkills); // Update parent component
      setSkill(""); // Clear input
    }
  };

  return (
    <div>
      <h2>Skills</h2>
      <input
        type="text"
        value={skill}
        placeholder="Add a skill"
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <div>
        {skills.map((s, index) => (
          <span key={index} style={{ margin: "0 5px", display: "inline-block", background: "#ddd", padding: "5px" }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
