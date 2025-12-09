import React, { useState } from "react";

import taskTable from "./assets/task-table.png";
import interviewNotes from "./assets/interview-notes.png";

import designHeatmapSketch from "./assets/Figure3.png";
import designGlyphSketch from "./assets/Figure4.png";
import designGlyphSport from "./assets/Figure5.png";
import designInitialDashboard from "./assets/Figure6.png";

import finalHomeSummary from "./assets/Figure7.png";
import finalHomeFiltered from "./assets/Figure8.png";
import finalHomeBrush from "./assets/Figure9.png";
import finalPlayView from "./assets/Figure10.png";

const sections = [
  { id: "motivation", label: "Motivation" },
  { id: "data", label: "Data" },
  { id: "task-analysis", label: "Task Analysis" },
  { id: "design-process", label: "Design Process" },
  { id: "final-design", label: "Final Design" },
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
          high-, mid-, and low-level abstractions (Figure 1). Tasks related to interpretation and interaction were ranked
          highest.
        </p>

        <div className="task-assets">
          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: taskTable,
                  alt: "Task analysis table summarizing domain and abstract visualization tasks.",
                  caption: "Figure 1. Task analysis table derived from the expert interview."
                })
              }
            >
              <img
                src={taskTable}
                alt="Task analysis table summarizing domain and abstract visualization tasks."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 1. Task analysis table derived from the expert interview.
            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: interviewNotes,
                  alt: "Excerpt from the expert interview notes used for task analysis coding.",
                  caption:
                    "Figure 2. Annotated interview notes used to derive tasks and prioritization."
                })
              }
            >
              <img
                src={interviewNotes}
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

function DesignProcessSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="card" id="design-process">
      <h2 className="section-title">Design Process</h2>
      <div className="section">
        <p>
          After task analysis was conducted, we developed preliminary sketches independently,
          then came together and discussed the sketches with the framework established in the task analysis 
          in mind. Elements from each of the top sketches were included.
          <br /><br />
          From our sketches, we picked out a common heat map on the video view (Figure 3) and a glyph to show the
          magnitude of synchrony (Figure 4), which was based off of a sports graphic (Figure 5). After implementing
          our initial design (Figure 6) we conducted small-scale user testing sessions and distributed our design to
          the identified stakeholder. We found that users had a hard time onboarding to the dashboard with too many 
          visuals available at once, disliked the over-reliance on bar charts for encoding the data, wanted an additional
          dashboard-level legend, and had a difficult time making sense of our color schemes. In the next iteration of our
          design (Figures 7–10) we added a toggle for point-in-time data on the summary page to support easier onboarding
          and reduce the risk of overwhelming the user, used [http://vrl.cs.brown.edu/color/] to rethink the original color scheme, added a 
          consistent legend in both the home summary and play view, and made some minor polishing tweaks. 
        </p>

        <div className="task-assets">
          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: designHeatmapSketch,
                  alt: "Early sketch of the heatmap concept for the video view.",
                  caption: "Figure 3. Early sketch of the stacked heatmap for the video-aligned view."
                })
              }
            >
              <img
                src={designHeatmapSketch}
                alt="Early sketch of the heatmap concept for the video view."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 3. Early sketch of the heatmap for the video-aligned view.
            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: designGlyphSketch,
                  alt: "Initial sketches of the glyph used to encode low- and high-frequency synchrony.",
                  caption: "Figure 4. Sketches including glyph and summary table for low- and high-frequency synchrony."
                })
              }
            >
              <img
                src={designGlyphSketch}
                alt="Initial sketches of the glyph used to encode low- and high-frequency synchrony."
                className="task-image"
              />
            </button>
            <figcaption>
            Figure 4. Sketches including glyph and summary table for low- and high-frequency synchrony.            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: designGlyphSport,
                  alt: "Sports graphic–inspired mock used as a reference for the synchrony glyph.",
                  caption: "Figure 5. Sports graphic–inspired mock used as a reference for the synchrony glyph."
                })
              }
            >
              <img
                src={designGlyphSport}
                alt="Sports graphic–inspired mock used as a reference for the synchrony glyph."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 5. Sports graphic–inspired mock used as a reference for the synchrony glyph.
            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: designInitialDashboard,
                  alt: "Initial dashboard design.",
                  caption: "Figure 6. Initial dashboard design."
                })
              }
            >
              <img
                src={designInitialDashboard}
                alt="Initial dashboard design."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 6. Initial dashboard design.
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

function FinalDesignSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="card" id="final-design">
      <h2 className="section-title">Final Design</h2>
      <div className="section">
        <p>
          Our final design consists of two main views: The Home Summary page, which the user initially lands on, and the
          Play Video page. Both views aim to address the high-level task of analyzing parent-child interactions (Task 1, Figure 1). In the home summary page (Figure 7), a bar chart was used in the top left to depict how many times
          each participant led a synchronous moment (or a consecutive synchrony reading ≥ 0.5). Clicking on a bar will filter 
          the violin plot and engagement donut chart to display data where only that participant was leading (Figure 8) and 
          clicking again will remove the filter. Length was used as an effective visual encoding for quick interpretation,
          and the color depicts categrical data (Parent or Child leading) and is consistent with other parent-child
          related visuals. This visual and supported interaction achieve Task 5 (Figure 1). The violin plot (Figure 7) shows
          the distribution of recorded synchrony values and includes a visual indicator for the cuttoff of "significant" synchrony,
          so that patients can understand where they spent most of their time during the recording session, and identify changes in
          synchrony distributions over time in instances of repeated recording sessions (Tasks 4 and 8, Figure 1). A violin plot was chosen
          over a box plot or other statistical visuals for ease of expressing the amount of points at each magnitude. Color was chosen from
          the Plotly BuPu color scale to be aesthtically pleasing alongside the synchrony heatmaps without confusing the user by introducing
          a new color scheme.
          <br /><br />
          On the top right, a table summary of high-level metrics of interest was included to support Task 3 (Figure 1). A table was used
          as the purpose of the information is not to compare against other data or identify trends, but to comprehend separate precise values.
          Underneath the table, a donut chart displays the percent of time spent in a behavioral state. With the available data, we chose to
          apply it to engagement behaviors (coordinated, supported, or no engagement), but any behavioral codings can be swapped. A donut chart was used
          to display values relative to each other, and the increased interpretability of length in donut charts combined with the display of exact
          values as labels on the chart helps mitigate interpretability issues typically associated with pie charts. A categorical color scheme
          was applied to be consistent with the heatmap and match user expectations (the color with the lowest intensity encodes data for no engagement). This
          supports Tasks 1 and 8 (Figure 1).
          <br /><br />
          Users can optionally toggle to display the point-in-time related data, including a glyph for synchrony and cards to express the behavioral data occurring
          at one second in the data. These visuals will automatically point to the first second of the available data, but they can be updated by brushing the pane to move the
          central black cursor across the time-aligned heatmap. The top glyph (Figure 9) displays a dual radial bar chart-inspired glyph, where the height or length
          of the bar, as well as the bar's color, is used to redundantly encode the sychrony values corresponding to the heatmap. This provides a supplemental, more detailed
          view of the values in the heatmap at the location of the cursor. A gradient color scale was used to mark areas of no synchrony with a very light blue, areas with low
          synchrony as blue, and areas of high synchrony as a deep purple. Underneath the glyph, pictures are used to display the behavioral data from the heatmap.
          <br /><br />
          The stacked heatmaps at the bottom represent an aggregate view of the recording data, including quantitative high and low frequency
          synchrony values on a color gradient to represent magnitude and categorical behavioral data with a discrete color palette. Each vertical
          line in the heatmap corresponds to a one second interval in the recorded data. This achieves Tasks 2, 4, and 5. Additionally, users can click anywhere on the heatmap
          in home view (with or without the toggle) to filter the engagement donut chart and violin plot to the data within the 60-second window pane, indicated by
          the yellow highlight around the cursor (Figure 9). The cursor updates the Point-In-Time views (if toggled). This interaction supports Tasks 2 and 6.
          <br /><br />
          The Play Video (Figure 10) view contains the same Point-In-Time visuals from the Home Summary, as well as the heatmaps, and in this view they update according
          to the timestamp of the video.
          <br /><br />
          Plotly and Dash were used to create these visuals, and Dash-Player was used to render the video and link timestamps between the video playback and the Point-In-Time charts.
        </p>

        <div className="task-assets">
          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: finalHomeSummary,
                  alt: "Home Summary view showing bar chart, violin plot, engagement donut, and stacked heatmaps.",
                  caption: "Figure 7. Home Summary view of the final dashboard."
                })
              }
            >
              <img
                src={finalHomeSummary}
                alt="Home Summary view showing bar chart, violin plot, engagement donut, and stacked heatmaps."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 7. Home Summary view of the final dashboard.
            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: finalHomeFiltered,
                  alt: "Home Summary view with charts filtered to synchrony led by a single participant.",
                  caption: "Figure 8. Home Summary view filtered by leading participant."
                })
              }
            >
              <img
                src={finalHomeFiltered}
                alt="Home Summary view with charts filtered to synchrony led by a single participant."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 8. Home Summary view filtered by leading participant.
            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: finalHomeBrush,
                  alt: "Home Summary view showing the brushed 60-second window and updated charts.",
                  caption: "Figure 9. Brushed 60-second window filtering the summary distributions."
                })
              }
            >
              <img
                src={finalHomeBrush}
                alt="Home Summary view showing the brushed 60-second window and updated charts."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 9. Brushed 60-second window filtering the summary distributions.
            </figcaption>
          </figure>

          <figure className="task-figure">
            <button
              type="button"
              className="task-thumb-button"
              onClick={() =>
                setActiveImage({
                  src: finalPlayView,
                  alt: "Play Video view with synchronized video, glyph, behavior cards, and heatmaps.",
                  caption: "Figure 10. Play Video view linked to point-in-time synchrony and behaviors."
                })
              }
            >
              <img
                src={finalPlayView}
                alt="Play Video view with synchronized video, glyph, behavior cards, and heatmaps."
                className="task-image"
              />
            </button>
            <figcaption>
              Figure 10. Play Video view linked to point-in-time synchrony and behaviors.
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
        <h1 className="site-title">
          Visualizing Physiologic Synchrony for Patient-Clinician Communication
        </h1>
        <p className="subtitle">
          CS7250 · Fall 2025 · Carey Barry and Julia Weppler
        </p>
      </header>

      <div className="layout">
        <main>
          <section className="card hero-card" id="overview">
            <div>
              <p className="hero-text-title">
                A Dashboard for Physiologic Synchrony and Behavioral Data
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

          <TaskAnalysisSection />
          <DesignProcessSection />
          <FinalDesignSection />

          <section className="card" id="data-analysis">
            <h2 className="section-title">Data Analysis</h2>
            <div className="section">
              <p>
                The core focus of the project was to create a tool for visualizing dyad interactions to improve clinician-patient communciation
                which can be built upon and used in a variety of contexts. Additionally, takeaways would
                differ from patient to patient and would not necessarily be relevant outside of this context. Therefore, no data analysis was conducted. 
              </p>
            </div>
          </section>

          <section className="card" id="conclusion">
            <h2 className="section-title">Conclusion</h2>
            <div className="section">
              <p>
                During the course of development, challenges were encountered regarding data availability and distribution,
                technical implementation, and design consideration for user interpretation. Future work and interations of this
                project will incorporate additional design feedback from domain experts, add options and technical support for 
                additional data (such as electrodermal sensor data), and conduct a user study to guage implementation success or areas for
                further improvement.
              </p>
            </div>
          </section>
        </main>

        <aside>
          <section className="card">
            <h2 className="sidebar-title">Demo Video</h2>
            <div className="video-wrapper">
              {/* TODO: embed demo video */}
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
