export default function Experience() {
  return (
    <main>
      <h1>Experience</h1>

      <section className="experience-section">
        <div className="experience-item">
          <div className="experience-header">
            <h3>AI Engineer · Swif.ai</h3>
            <p className="date">May 2025 — Aug 2025</p>
          </div>
          <p className="description">
            Built AI-powered automation tools and developer experiences for SaaS workflows.
          </p>
          <ul className="experience-details">
            <li>Developed agentic provisioning and deprovisioning systems for SaaS applications</li>
            <li>Built a live terminal with code-assist and automation features</li>
            <li>Created a copilot editor capable of generating custom scripts for client applications</li>
          </ul>
          <p className="tech">Tech: TypeScript, OpenAI SDK, LLMs, Vue.js, Playwright</p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Systems Analyst · Fairfax Financial Holdings</h3>
            <p className="date">Sep 2023 — Dec 2023</p>
          </div>
          <p className="description">
            Developed data-driven tools and processes to enhance compliance and investment operations.
          </p>
          <ul className="experience-details">
            <li>Created a data clustering algorithm to optimize compliance data management</li>
            <li>Built ETL pipeline to transfer XML data into SQL databases</li>
            <li>Executed ORE simulations to assess trade sensitivities across portfolios</li>
          </ul>
          <p className="tech">Tech: Python, SQL, ETL, Data Engineering</p>
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>

        <div className="project-item">
          <div className="project-header">
            <div>
              <h3>Cold Email Agent</h3>
              <p>An agent that identifies opportunities and sends cold emails to companies.</p>
              <p className="tech">Stack: OpenAI SDK, Python, React.js, FastAPI</p>
            </div>
            <a href="https://github.com/yourusername/cold-email-agent" target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub →
            </a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-header">
            <div>
              <h3>WatSched</h3>
              <p>AI-powered class schedule generator for UW students.</p>
              <p className="tech">Stack: Next.js, FastAPI, Groq API, Selenium</p>
            </div>
            <a href="https://github.com/yourusername/watsched" target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
