import React from "react";
import { useState } from "react";

const sections = [
  { id: "motivation", label: "Motivation" },
  { id: "data", label: "Data" },
  { id: "task-analysis", label: "Task Analysis" },
  { id: "design-process", label: "Design Process" },
  { id: "final-vis", label: "Final Visualization" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "conclusion", label: "Conclusion" }
];
const REPO_URL = "https://github.com/julia-weppler-1/SynchronyVisDashboard.git";

function TaskAnalysisSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="card" id="task-analysis">
      <h2 className="section-title">Task Analysis</h2>
      <div className="section">
        <p>
          To better understand real-world needs and opportunities for visualizing physiologic synchrony, we conducted an
          expert interview with an occupational therapist and Assistant Professor in the Division of Developmental and
          Behavioral Sciences at the University of Kansas Medical Center. The stakeholder is both a clinician and researcher
          whose work focuses on eating behaviors among children with autism, with a specific interest in how parent–child
          physiologic synchrony influences eating, engagement, and regulation. A semi-structured interview was conducted
          with verbal consent. The conversation focused on how physiologic linkage is currently used in clinical and research
          settings, existing gaps in interpretation and communication of synchrony data, and unmet needs in visualization
          tools for both clinicians and families.
          <br />
          <br />
          A task analysis was performed following the expert interview to identify the functionality required in a
          visualization platform designed for parent–child physiologic synchrony. Eight tasks were identified, spanning
          high-, mid-, and low-level abstractions (Table 1). Tasks related to interpretation and interaction were ranked
          highest.
        </p>

        <div className="task-assets">
          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: "src/assets/task-table.png",
                  alt: "Task analysis table summarizing domain and abstract visualization tasks.",
                  caption: "Figure 1. Task analysis table derived from the expert interview."
                })
              }
            >
              <img
                src="src/assets/task-table.png"
                alt="Task analysis table summarizing domain and abstract visualization tasks."
                className="task-image"
              />
            </button>
            <figcaption>Figure 1. Task analysis table derived from the expert interview.</figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: "src/assets/interview-notes.png",
                  alt: "Excerpt from the expert interview notes used for task analysis coding.",
                  caption: "Figure 2. Annotated interview notes used to derive tasks and prioritization."
                })
              }
            >
              <img
                src="src/assets/interview-notes.png"
                alt="Excerpt from the expert interview notes used for task analysis coding."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 2. Annotated interview notes used to derive tasks and prioritization.
            </figcaption>
          </figure>
        </div>

        {activeImage && (
          <div
            className="lightbox-backdrop"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="lightbox-content"
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setActiveImage(null)}
                aria-label="Close image"
              >
                ×
              </button>
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="lightbox-image"
              />
              {activeImage.caption && (
                <p className="lightbox-caption">{activeImage.caption}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header>
        <h1 className="site-title">Visualizing Physiologic Synchrony for Patient-Clinician Communication</h1>
        <p className="subtitle">
          CS7250 · Fall 2025 · Carey Barry and Julia Weppler
        </p>
      </header>

      <div className="layout">
        <main>
          <section className="card hero-card" id="overview">
            <div>
              <p className="hero-text-title">
                A Dashboard for Physiologic Synchrony and Behavioral Data.
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
                There is a critical gap in how physiologic synchrony is communicated to patients, caregivers,
                and non-technical users. Research in psychology, neuroscience, and physiology has established the
                importance of autonomic synchrony, particularly in parent-child interactions, couples' relationships,
                and therapeutic settings. However, existing tools for analyzing synchrony are designed for scientists and
                require domain expertise to interpret. Visualizations such as wavelet coherence plots and multiscale time-series 
                displays provide analytical capabilities for researchers, but they remain inaccessible to the patients and families 
                who could benefit from understanding these dynamics. <br/> <br/>
                The goal of our project was to develop a dashboard that provides clinicians with a tool to communicate meaningful information 
                to parents about their interactions during the session.  
              </p>
            </div>
          </section>

          <section className="card" id="data">
            <h2 className="section-title">Data</h2>
            <div className="section">
              <p>
              The data used in this project comes from the enTRAIN study, a research initiative designed to examine physiologic synchronyy in structured
              parent-child interactions. The dataset includes recordings from 30 dyads, consisting of 22 typically developing and 8 children
              with a diagnosis of Autism Spectrum Disorder (ASD). Each dyad participated in a series of structured tasks, during which multimodal
              data were collected. The physiologic measurements consisted of cardiac activity synchrony between dyad members, which was derived
              using Morlet wavelet analysis, yielding low-frequency and high-frequency coherence values. Sessions were also recorded using GoPro cameras.
              Behavioral annotations were manually coded by the research team. Engagement states (supported joint engagement, coordinated joint engagement, or no engagement)
              were utilized for this dashboard design, though other behavioral codings may also be applied.
              <br/><br/>
              From the raw and preprocessed streams, we derived additional metrics, including coherence episode durations (consecutive moments where coherence ≥ 0.5),
              counts of synchronized episodes, counts of joint-engagement episodes, and joint-engagement durations.
              </p>
            </div>
          </section>

          {TaskAnalysisSection()}

          <section className="card" id="data-analysis">
            <h2 className="section-title">Data Analysis</h2>
            <div className="section">
              <p>
                Placeholder:  summary of interesting results
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

          <section className="card" id="final-design">
            <h2 className="section-title">Final Design</h2>
            <div className="section">
              <p>
                Placeholder: final visualization, design justifications, packages utilized for coding, and UI walk-through
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
                <span className="tag">Code</span>      
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                    <span>SynchronyVisDashboard</span>
                </a>
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
