import jsPDF from "jspdf";

const ExportToPDF = ({
  contact,
  introduction,
  experience,
  education,
  skills,
  languages,
  certifications,
  projects,
  links,
}) => {
  const doc = new jsPDF();

  let marginLeft = 20;
  const marginRight = 115; // For the second column
  let pageWidth = 170; // Width available for text
  let fontSize = 12; // Default font size

  const setFontSize = (size) => {
    fontSize = size;
    doc.setFontSize(size);
  };

  // Contact Information
  doc.setFont("helvetica", "bold");
  setFontSize(16);
  doc.text(contact.name || "Your Name", 105, 20, { align: "center" });

  doc.setFont("helvetica", "normal");
  setFontSize(12);
  const contactInfo = `${contact.email || "youremail@example.com"} • ${
    contact.phone || "(123) 456-7890"
  } • ${contact.address || "Your Address"}`;
  doc.text(contactInfo, 105, 30, { align: "center" });

  let y = 50;

  // Dynamically reduce font size if content overflows
  const checkOverflow = (height) => {
    if (y + height > 280) {
      setFontSize(fontSize - 1);
      return true;
    }
    return false;
  };

  // One-column Section
  const addSingleColumnSection = (title, content) => {
    if (!content || content.length === 0) return;

    doc.setFont("helvetica", "bold");
    doc.text(title, marginLeft, y);
    y += 10;
    checkOverflow(10);

    doc.setFont("helvetica", "normal");
    content.forEach((line) => {
      const lines = doc.splitTextToSize(line, pageWidth);
      doc.text(lines, marginLeft, y);
      y += lines.length * 8;
      checkOverflow(lines.length * 8);
    });
  };

  // Two-column Section
  const addTwoColumnSection = (title, content) => {
    if (!content || content.length === 0) return;

    doc.setFont("helvetica", "bold");
    doc.text(title, marginLeft, y);
    y += 10;
    checkOverflow(10);

    doc.setFont("helvetica", "normal");
    const midPoint = Math.ceil(content.length / 2);
    const firstColumn = content.slice(0, midPoint);
    const secondColumn = content.slice(midPoint);

    firstColumn.forEach((item, index) => {
      doc.text(item, marginLeft, y + index * 8);
    });

    secondColumn.forEach((item, index) => {
      doc.text(item, marginRight, y + index * 8);
    });

    y += Math.max(firstColumn.length, secondColumn.length) * 8;
    checkOverflow(Math.max(firstColumn.length, secondColumn.length) * 8);
  };

  // Add Links (Blue and Clickable)
  const addClickableLink = (text, link, x, y) => {
    doc.setTextColor(0, 0, 255); // Blue color
    doc.textWithLink(text, x, y, { url: link });
    doc.setTextColor(0, 0, 0); // Reset to black
  };

  // Introduction
  if (introduction) {
    addSingleColumnSection("INTRODUCTION", [
      introduction || "Your introduction or summary goes here.",
    ]);
  }

  // Work Experience
  if (experience && experience.length > 0) {
    const workContent = experience.map(
      (exp) =>
        `${exp.jobTitle} at ${exp.company} (${exp.duration})\n${exp.description}`
    );
    addSingleColumnSection("WORK EXPERIENCE", workContent);
  }

  // Education
  if (education && education.length > 0) {
    const educationContent = education.map(
      (edu) => `${edu.degree} from ${edu.school} (${edu.year})`
    );
    addTwoColumnSection("EDUCATION", educationContent);
  }

  // Skills
  if (skills && skills.length > 0) {
    addTwoColumnSection("SKILLS", skills);
  }

  // Languages
  if (languages && languages.length > 0) {
    const languageContent = languages.map(
      (lang) => `${lang.language} - ${lang.proficiency}`
    );
    addTwoColumnSection("LANGUAGES", languageContent);
  }

  // Certifications
  if (certifications && certifications.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("CERTIFICATIONS", marginLeft, y);
    y += 10;

    doc.setFont("helvetica", "normal");
    certifications.forEach((cert) => {
      doc.text(`${cert.name}`, marginLeft, y);
      y += 8;
      doc.text(`${cert.issuer} • ${cert.date}`, marginLeft, y);
      y += 8;
      if (cert.link) {
        addClickableLink(`Link: ${cert.link}`, cert.link, marginLeft, y);
        y += 10;
      }
    });
  }

  // Projects
  if (projects && projects.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("PROJECTS", marginLeft, y);
    y += 10;

    doc.setFont("helvetica", "normal");
    projects.forEach((proj) => {
      doc.text(proj.title, marginLeft, y);
      y += 8;
      const projDescLines = doc.splitTextToSize(proj.description, pageWidth);
      doc.text(projDescLines, marginLeft, y);
      y += projDescLines.length * 8;
      if (proj.link) {
        addClickableLink(`Link: ${proj.link}`, proj.link, marginLeft, y);
        y += 10;
      }
    });
  }

  // Portfolio Links
  if (links && links.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("PORTFOLIO LINKS", marginLeft, y);
    y += 10;

    doc.setFont("helvetica", "normal");
    links.forEach((l) => {
      addClickableLink(`${l.type}: ${l.link}`, l.link, marginLeft, y);
      y += 10;
    });
  }

  // Save the PDF
  doc.save("resume.pdf");
};

export default ExportToPDF;
