import { useEffect, useState } from 'react';
import { profile, facts, factsExtra, stats } from '../data/portfolioData.js';
import useInView from '../hooks/useInView.js';

function Counter({ target }) {
  const [ref, inView] = useInView(0.4);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const step = Math.max(1, Math.round(target / 40));
    let current = 0;
    const iv = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(iv);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(iv);
  }, [inView, target]);

  return <div className="stat-num" ref={ref}>{count}</div>;
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>About Me</h2>
          <p>Who I am, what I do, and the numbers behind five years in QA.</p>
        </div>

        <div className="about-grid">
          <div>
            <p>{profile.summary}</p>
            <ul className="fact-list">
              {facts.map((f) => (
                <li key={f.label}><b>{f.label}:</b> <span>{f.value}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p>{profile.summary2}</p>
            <ul className="fact-list">
              {factsExtra.map((f, i) => (
                <li key={i}><b>{f.label}:</b> <span>{f.value}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <Counter target={s.value} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
