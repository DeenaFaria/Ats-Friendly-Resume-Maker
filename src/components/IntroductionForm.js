import React, { useState } from "react";

const IntroductionForm = ({ onUpdate }) => {
  const [intro, setIntro] = useState("");

  const handleChange = (e) => {
    const updatedIntro = e.target.value;
    setIntro(updatedIntro);
    onUpdate(updatedIntro); // Update parent component
  };

  return (
    <div>
      <h2>Introduction</h2>
      <textarea
        placeholder="Write a short introduction about yourself"
        value={intro}
        onChange={handleChange}
      />
    </div>
  );
};

export default IntroductionForm;
