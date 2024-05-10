"use client";
import React from "react";
import "../styles/Projects.css";
import TileComponent from "./TileComponent";
const projectData = [
  {
    title: "Discord Siri Bot",
    imageSrc:
      "https://yt3.googleusercontent.com/ytc/AIdro_lBFnWS0XsOc_PbUCpWpTTUtcUa3CJNO8oXqrjnc9IA_A4=s900-c-k-c0x00ffffff-no-rj",
    githubLink: "https://github.com/ariqM1/Discord-Siri",
    description:
      "Developed a Discord Bot using JavaScript that allows users to play music, access roles, and create playlists",
  },
  {
    title: "JustHealth",
    imageSrc: "/justhealth.png",
    githubLink: "https://github.com/abdulchowdhury/justhealth-webapp.git",
    description:
      "Startup providing healthcare transparency through procedure cost data, cost comparisons, and data analytics.",
  },
  {
    title: "Arduino Robot",
    imageSrc:
      "data:image/jpeg;base64,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",
    githubLink: "https://github.com/ariqM1/Arduino-Robot-",
    description:
      "Designed and created a robot comprised of a motherboard, sensors, and wheels, wrote commands that the robot executes to change direction and stop motion, and implemented Java methods enabling sensors to detect obstacles in its path and react accordingly.",
  },
  {
    title: "Idea Organizer",
    imageSrc:
      "https://cdn.logojoy.com/wp-content/uploads/20220329172812/app-logo-color-combinations-600x371.jpeg",
    githubLink: "https://github.com/ariqM1/Idea-Organizer",
    description:
      "Web application that helps you organize you ideas, built in JavaFX!",
  },
  {
    title: "Weather CLI Tool",
    imageSrc:
      "data:image/png;base64,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",
    githubLink: "https://github.com/ariqM1/weather_cli_tool",
    description:
      "Command Line Interface tool that allows you to check the weather through terminal.",
  },
];

function Projects() {
  return (
    <div className="project">
      <h1>Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} className="project-tile">
          <TileComponent
            imageSrc={project.imageSrc}
            githubLink={project.githubLink}
          />
          <div className="description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
