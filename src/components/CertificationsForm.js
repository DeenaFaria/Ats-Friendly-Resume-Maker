import React, { useState } from "react";

const CertificationsForm = ({ onUpdate }) => {
  const [certificationName, setCertificationName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [certifications, setCertifications] = useState([]);

  const addCertification = () => {
    if (certificationName.trim() && issuer.trim() && date.trim()) {
      const updatedCertifications = [
        ...certifications,
        { name: certificationName.trim(), issuer, link, date },
      ];
      setCertifications(updatedCertifications);
      onUpdate(updatedCertifications); // Update parent component
      setCertificationName("");
      setIssuer("");
      setLink("");
      setDate("");
    }
  };

  return (
    <div>
      <h2>Certifications</h2>
      <input
        type="text"
        value={certificationName}
        placeholder="Certification Name"
        onChange={(e) => setCertificationName(e.target.value)}
      />
      <input
        type="text"
        value={issuer}
        placeholder="Issuer Name"
        onChange={(e) => setIssuer(e.target.value)}
      />
      <input
        type="text"
        value={link}
        placeholder="Certification Link (optional)"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addCertification}>Add Certification</button>
      <div>
        {certifications.map((cert, index) => (
          <div key={index}>
            <p>
              <strong>{cert.name}</strong> ({cert.date})
              <br />
              Issued by: {cert.issuer}
              {cert.link && (
                <>
                  <br />
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certification
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsForm;
