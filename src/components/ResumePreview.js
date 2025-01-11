import React from "react";

const ResumePreview = ({ 
  contact, 
  introduction, 
  experience, 
  education, 
  skills, 
  languages, 
  certifications, 
  projects,
  links
}) => {
  return (
    <div>
      <h1>Resume Preview</h1>
      
      <h2>Contact Information</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>

      <h2>Introduction</h2>
      <p>{introduction}</p>

      <h2>Work Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.jobTitle} at {exp.company}</h3>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree} from {edu.school}</h3>
          <p>{edu.year}</p>
        </div>
      ))}

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Languages</h2>
{languages.length > 0 ? (
  <ul>
    {languages.map((lang, index) => (
      <li key={index}>
        {lang.language} - {lang.proficiency}
      </li>
    ))}
  </ul>
) : (
  <p>No languages added.</p>
)}


      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index}>
          <h3>{cert.title}</h3>
          <p>{cert.issuer}</p>
          <p>{cert.date}</p>
          {cert.link && (
           <p>
              Link: <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.link}</a>
           </p>
           )}

        </div>
      ))}

      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <p>{proj.link}</p>
        </div>
      ))}

<div>
        <h3>Portfolio Links</h3>
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

export default ResumePreview;
