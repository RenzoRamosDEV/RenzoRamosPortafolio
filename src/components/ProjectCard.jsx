import { SCHEMES } from '../constants/schemes';

export function ProjectCard({ proj, scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  return (
    <div className="project-card">
      <div className="project-img">
        {proj.image ? (
          <img src={proj.image} alt={proj.title} />
        ) : (
          <div
            className="project-img-placeholder"
            style={{ background: `linear-gradient(135deg, rgba(${s.aRgb},0.08) 0%, rgba(${s.bRgb},0.05) 100%)` }}
          >
            <span className="project-img-label">Vista previa próximamente</span>
            <div className="project-img-placeholder-num">{proj.num}</div>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-num-tag">{proj.num}</div>
        <div className="project-title">{proj.title}</div>
        <p className="project-desc">{proj.desc}</p>

        <div className="project-footer">
          <div className="project-badges">
            {proj.badges.map((b) => {
              const logo = getSkillLogo(b);
              return logo ? (
                <img key={b} src={logo} alt={b} className="project-badge-logo" title={b} />
              ) : (
                <span key={b} className="project-badge">{b}</span>
              );
            })}
          </div>

          <div className="project-links">
            <a className="project-link" href={proj.repo || '#'}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77" />
              </svg>
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Devuelve la ruta del icono para una tecnología, o null si no hay icono
function getSkillLogo(skill) {
  const logos = {
    "Java":                     "JAVA.png",
    "Kotlin":                   "KOTLIN.png",
    "C":                        "C.png",
    "Python":                   "PYTHON.png",
    "HTML":                     "HTML.png",
    "CSS":                      "CSS.png",
    "XML":                      "XML.png",
    "Spring Boot":              "SPRING.png",
    "Maven":                    "MAVEN.png",
    "Gradle":                   "GRADLE.png",
    "JUnit":                    "JUNIT.png",
    "IntelliJ IDEA":            "INTELLIJ.png",
    "Git":                      "GIT.png",
    "Docker":                   "DOCKER.png",
    "Linux":                    "LINUX.png",
    "Shell Script":             "LINUX.png",
    "MySQL":                    "MYSQL.png",
    "PostgreSQL":               "MYSQL.png",
    "Google Gemini":            "GEMINI.png",
    "Inteligencia Artificial":  "IA.png",
    "Machine Learning":         "IA.png",
    "Adobe Experience Manager": "ADOBEEXPERIENCEMANAGER.png",
    "DevOps":                   "DOCKER.png",
    "Windows":                  "WINDOWS.png",
  };

  const file = logos[skill];
  return file ? `/icons/${file}` : null;
}
