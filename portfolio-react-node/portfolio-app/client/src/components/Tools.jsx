import { tools } from '../data/portfolioData.js';

export default function Tools() {
  return (
    <section id="tools">
      <div className="wrap">
        <div className="section-head">
          <h2>Tools &amp; Technologies</h2>
          <p>What I reach for day to day.</p>
        </div>
        <div className="tools-grid">
          {tools.map((t) => (
            <div className="tool-card" key={t.name}>
              <div className="tool-icon">{t.icon}</div>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
