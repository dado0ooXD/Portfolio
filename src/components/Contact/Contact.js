import { contact } from "../../portfolio";
import "./Contact.css";
import { about } from "../../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  if (!contact.email) return null;
  const { name, role, description, resume, social } = about;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      {social && (
        <div style={{ display: "flex" }}>
          {social.github && (
            <a
              target="_blank"
              rel="noreferrer"
              href={social.github}
              aria-label="github"
              className="link link--icon"
            >
              <GitHubIcon />
            </a>
          )}

          {social.linkedin && (
            <a
              target="_blank"
              rel="noreferrer"
              href={social.linkedin}
              aria-label="linkedin"
              className="link link--icon"
              style={{ marginLeft: "10px" }}
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
      )}
      <a href={`mailto:${contact.email}`}>
        <span
          type="button"
          className="btn btn--outline"
          style={{ marginTop: "20px" }}
        >
          Email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
