import jsPDF from "jspdf";

const ExportToPDF = (resumeData) => {
  const doc = new jsPDF();

  const { contact, experience, education, skills, languages, certifications, projects, links, introduction } = resumeData;

  // Add Introduction
  doc.setFontSize(16);
  doc.text("Introduction", 10, 10);
  doc.setFontSize(12);
  doc.text(introduction || "No introduction provided", 10, 20);

  // Add Contact Information
  doc.setFontSize(16);
  doc.text("Contact Information", 10, 40);
  doc.setFontSize(12);
  Object.entries(contact).forEach(([key, value], index) => {
    doc.text(`${key}: ${value}`, 10, 50 + index * 10);
  });

  // Add Skills
  doc.setFontSize(16);
  doc.text("Skills", 10, 90);
  skills?.forEach((skill, index) => {
    doc.text(`- ${skill}`, 10, 100 + index * 10);
  });

  // Add Languages
  doc.setFontSize(16);
  doc.text("Languages", 10, 130);
  languages?.forEach((language, index) => {
    doc.text(`- ${language.language}: ${language.proficiency}`, 10, 140 + index * 10);
  });

  // Add Certifications
  doc.setFontSize(16);
  doc.text("Certifications", 10, 170);
  certifications?.forEach((cert, index) => {
    const yPosition = 180 + index * 20;
    doc.text(`- ${cert.name} (${cert.date})`, 10, yPosition);
    doc.text(`  Issued by: ${cert.issuer}`, 10, yPosition + 10);
    if (cert.link) {
      doc.textWithLink("View Certification", 10, yPosition + 20, { url: cert.link });
    }
  });

  // Add Projects
  doc.setFontSize(16);
  doc.text("Projects", 10, 240);
  projects?.forEach((project, index) => {
    const yPosition = 250 + index * 20;
    doc.text(`- ${project.title}`, 10, yPosition);
    if (project.link) {
      doc.textWithLink("Live Demo", 60, yPosition, { url: project.link });
    }
  });

  // Save the PDF
  doc.save("Resume.pdf");
};

export default ExportToPDF;
