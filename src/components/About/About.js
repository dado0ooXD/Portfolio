import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a
            href="Davud_Carovac-CV.pdf"
            download="Davud_Carovac-CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
