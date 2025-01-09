import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EducationForm";
import ResumePreview from "../components/ResumePreview";
import SkillsForm from "../components/SkillsForm";
import LanguagesForm from "../components/LanguagesForm";
import CertificationsForm from "../components/CertificationsForm";
import ProjectsForm from "../components/ProjectsForm";
import PortfolioLinksForm from "../components/PortfolioLinksForm";
import IntroductionForm from "../components/IntroductionForm";
import ExportToPDF from "../utils/ExportToPDF";
import './ResumeMaker.css';

const ResumeMaker = () => {
  const [contact, setContact] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState([]);
  const [introduction, setIntroduction] = useState("");

  const handleExport = () => {
    const resumeData = {
      contact,
      experience,
      education,
      skills,
      certifications,
      languages,
      projects,
      links,
      introduction,
    };
    ExportToPDF(resumeData);
  };

  return (
    <div className="resume-maker-container">
      <h1>Resume Maker</h1>
      
      {/* Form Sections */}
      <div className="form-sections">
        <ContactForm onUpdate={setContact} />
        <IntroductionForm onUpdate={setIntroduction} />
        <ExperienceForm onUpdate={setExperience} />
        <EducationForm onUpdate={setEducation} />
        <SkillsForm onUpdate={setSkills} />
        <LanguagesForm onUpdate={setLanguages} />
        <CertificationsForm onUpdate={setCertifications} />
        <ProjectsForm onUpdate={setProjects} />
       
      </div>

      {/* Resume Preview */}
      <div className="preview-section">
        <ResumePreview
          contact={contact}
          introduction={introduction}
          experience={experience}
          education={education}
          skills={skills}
          languages={languages}
          certifications={certifications}
          projects={projects}
        />
      </div>

      {/* Export Button */}
      <button className="export-btn" onClick={handleExport}>Export to PDF</button>
    </div>
  );
};

export default ResumeMaker;
