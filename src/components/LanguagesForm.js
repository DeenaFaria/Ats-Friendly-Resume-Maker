import React, { useState } from "react";

const LanguagesForm = ({ onUpdate }) => {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("Beginner");
  const [languages, setLanguages] = useState([]);

  const addLanguage = () => {
    if (language.trim()) {
      const updatedLanguages = [...languages, { language: language.trim(), proficiency }];
      setLanguages(updatedLanguages);
      onUpdate(updatedLanguages); // Update parent component
      setLanguage("");
      setProficiency("Beginner");
    }
  };

  return (
    <div>
      <h2>Languages</h2>
      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <select value={proficiency} onChange={(e) => setProficiency(e.target.value)}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Fluent</option>
        <option>Native</option>
      </select>
      <button onClick={addLanguage}>Add Language</button>
      <div>
        {languages.map((l, index) => (
          <div key={index}>
            <p>{l.language} - {l.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesForm;
