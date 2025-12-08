import React from "react";

const sections = [
  { id: "motivation", label: "Motivation" },
  { id: "data", label: "Data" },
  { id: "task-analysis", label: "Task Analysis" },
  { id: "design-process", label: "Design Process" },
  { id: "final-vis", label: "Final Visualization" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "conclusion", label: "Conclusion" }
];


export default function App() {
  return (
    <div className="page">
      <header>
        <h1 className="site-title">Project Title</h1>
        <p className="subtitle">
          CS7250 · Fall 2025 · Carey Barry and Julia Weppler · Public repository?
        </p>
      </header>

      <div className="layout">
        <main>
          <section className="card hero-card" id="overview">
            <div className="placeholder-thumb" />
            <div>
              <p className="hero-text-title">
                Visualization Project
              </p>
              <p className="hero-text-sub">
                Brief one-sentence summary of our project.
              </p>
            </div>
          </section>

          <section className="card" id="motivation">
            <h2 className="section-title">Motivation</h2>
            <div className="section">
              <p>
                Placeholder: Who? What? Why?
              </p>
            </div>
          </section>

          <section className="card" id="data">
            <h2 className="section-title">Data</h2>
            <div className="section">
              <p>
              Placeholder: summary of data and data types? What is it? Who collected it?
              </p>
            </div>
          </section>

          <section className="card" id="task-analysis">
            <h2 className="section-title">Task Analysis</h2>
            <div className="section">
              <p>
              Placeholder: summary of interview and task table
              </p>
            </div>
          </section>

          <section className="card" id="design-process">
            <h2 className="section-title">Design Process</h2>
            <div className="section">
              <p>
                Placeholder: sketches and design choices to justify final visualization
              </p>
            </div>
          </section>

          <section className="card" id="final-vis">
            <h2 className="section-title">Final Visualization</h2>
            <div className="section">
              <p>
                Placeholder: final visualization, design justifications, packages utilized for coding, and UI walk-through
              </p>
            </div>
          </section>

          <section className="card" id="data-analysis">
            <h2 className="section-title">Data Analysis</h2>
            <div className="section">
              <p>
                Placeholder:  summary of interesting results
              </p>
            </div>
          </section>

          <section className="card" id="conclusion">
            <h2 className="section-title">Conclusion</h2>
            <div className="section">
              <p>
                Placeholder: short summary of work completed and areas for improvement/future-work
              </p>
            </div>
          </section>
        </main>

        <aside>
          <section className="card">
            <h2 className="sidebar-title">Demo Video</h2>
            <p className="section">
              A short (~2 minutes or less) demo video of the final visualization.
              This is a placeholder for now
            </p>
            <div className="video-wrapper">

            </div>
          </section>

          <section className="card card-margin-top">
            <h2 className="sidebar-title">Project Details</h2>
            <ul className="meta-list">
              <li>
                <span className="tag">Course</span> CS7250 Info Viz Theory and Appls SEC 02 Fall 2025 
              </li>
              <li>
                <span className="tag">Code</span> Placeholder github link?
              </li>
              <li>
                <span className="tag">Team</span> Carey Barry, Julia Weppler
              </li>
              <li>
                <span className="tag">Tech</span> Plotly, Dash, Pandas
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
