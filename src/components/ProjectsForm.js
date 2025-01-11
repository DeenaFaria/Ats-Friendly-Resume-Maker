import React, { useState } from "react";

const ProjectsForm = ({ onUpdate }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription]=useState("");
  const [projects, setProjects] = useState([]);

  const addProject = () => {
    if (title.trim() && link.trim()) {
      const updatedProjects = [...projects, { title: title.trim(), description: description.trim(), link: link.trim() }];
      setProjects(updatedProjects);
      onUpdate(updatedProjects); // Update parent component
      setTitle("");
      setDescription("");
      setLink("");
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <input
        type="text"
        value={title}
        placeholder="Project Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={description} placeholder="Enter a short description" onChange={(e)=>setDescription(e.target.value)}/>
      <input
        type="text"
        value={link}
        placeholder="Live Link"
        onChange={(e) => setLink(e.target.value)}
      />
      
      <button onClick={addProject}>Add Project</button>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <p>{project.title} - <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsForm;
