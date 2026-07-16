import { skills } from '../data/portfolioData.js';
import useInView from '../hooks/useInView.js';

function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-top"><span>{name}</span><span>{level}%</span></div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: animate ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView(0.2);
  const half = Math.ceil(skills.length / 2);

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2>Skills</h2>
          <p>Core testing tools and disciplines, roughly self-rated by depth of hands-on use.</p>
        </div>
        <div className="skills-grid" ref={ref}>
          <div>
            {skills.slice(0, half).map((s) => (
              <SkillBar key={s.name} {...s} animate={inView} />
            ))}
          </div>
          <div>
            {skills.slice(half).map((s) => (
              <SkillBar key={s.name} {...s} animate={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
