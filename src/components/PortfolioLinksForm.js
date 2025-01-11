import React, { useState } from "react";

const PortfolioLinksForm = ({ onUpdate, links = [] }) => {
  const [type, setType] = useState("");
  const [link, setLink] = useState("");

  const addLink = () => {
    if (type.trim() && link.trim()) {
      const updatedLinks = [...links, { type: type.trim(), link: link.trim() }];
      onUpdate(updatedLinks);
      setType("");
      setLink("");
    }
  };

  return (
    <div>
      <h2>Portfolio and Social Links</h2>
      <input
        type="text"
        value={type}
        placeholder="Type (e.g., GitHub, LinkedIn)"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        value={link}
        placeholder="Link"
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={addLink}>Add Link</button>
      <div>
        {links.map((l, index) => (
          <p key={index}>
            {l.type}:{" "}
            <a href={l.link} target="_blank" rel="noopener noreferrer">
              {l.link}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PortfolioLinksForm;

