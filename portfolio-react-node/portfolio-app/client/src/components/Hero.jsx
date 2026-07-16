import { useEffect, useState } from 'react';
import { profile } from '../data/portfolioData.js';

export default function Hero() {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTyped(profile.roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const word = profile.roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setTyped(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setTyped(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % profile.roles.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 40 : 75);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="wrap hero-inner">
        <div className="avatar-wrap">
          <div className="avatar">{profile.initials}</div>
          <div className="status-pill"><span className="blip" />Open to work</div>
        </div>
        <div>
          <span className="eyebrow">Portfolio</span>
          <h1>Hi, I'm {profile.name}</h1>
          <div className="typed-line">
            <span>{typed}</span><span className="cursor" />
          </div>
          <p className="desc">
            Detail-oriented quality professional with 5+ years across CRM, CMS, and finance domain
            applications — building test strategy, mentoring QA teams, and driving automation from
            Selenium to Playwright.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn primary">Get in touch</a>
            <a href="#resume" className="btn outline">View resume</a>
          </div>
          <div className="hero-social">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href={`mailto:${profile.email}`} aria-label="Email">✉</a>
            <a href={`tel:${profile.phone}`} aria-label="Phone">☎</a>
          </div>
        </div>
      </div>
    </section>
  );
}
