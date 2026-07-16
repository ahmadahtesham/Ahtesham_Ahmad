import { education, experience } from '../data/portfolioData.js';

export default function Resume() {
  return (
    <section id="resume">
      <div className="wrap">
        <div className="section-head">
          <h2>Resume</h2>
          <p>Education, certifications, and professional experience.</p>
        </div>
        <div className="resume-grid">
          <div className="resume-col">
            <h3>Education &amp; Certifications</h3>
            <div className="timeline">
              {education.map((item, i) => (
                <div className="tl-item" key={i}>
                  <div className="date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <div className="org">{item.org}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="resume-col">
            <h3>Professional Experience</h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <div className="tl-item" key={i}>
                  <div className="date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <div className="org">{item.org}</div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
