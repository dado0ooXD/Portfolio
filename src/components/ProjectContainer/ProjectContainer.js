import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.css";
import { Box } from "@mui/material";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <Box>
      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>
    </Box>

    <Box>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noreferrer"
          aria-label="source code"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          target="_blank"
          rel="noreferrer"
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
        >
          <LaunchIcon />
        </a>
      )}
    </Box>
  </div>
);

export default ProjectContainer;
