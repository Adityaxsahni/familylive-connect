import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const features = [
  ['Live family tracking', 'Track your loved ones in real time with precise location updates and safe, permission-based sharing.'],
  ['Private family circles', 'Create circles for parents, siblings, relatives, and emergency contacts with clear access control.'],
  ['Instant SOS alerts', 'Trigger emergency alerts instantly with your live location, so family knows what to do right away.'],
  ['Smart messaging', 'Keep conversations focused with direct chat, media, and quick updates for the people who matter most.'],
  ['Geofencing', 'Create safe zones and monitor when family members enter or leave trusted places.'],
  ['Travel peace of mind', 'Stay updated across cities, routes, and daily travel without sacrificing privacy.'],
];

const metrics = [
  ['3.2M+', 'live safe check-ins'],
  ['99.97%', 'uptime for family network'],
  ['24/7', 'emergency awareness'],
  ['15 sec', 'average SOS response'],
];

const steps = [
  ['01', 'Create your family circle'],
  ['02', 'Grant trusted access'],
  ['03', 'Track, message, and protect'],
];

function App() {
  return (
    <div className="page-shell">
      <header className="nav-wrap">
        <div className="brand">
          <span className="brand-mark">F</span>
          <span>FamilyLive<span>Connect</span></span>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#how-it-works">How it works</a>
          <a href="#get-started">Get started</a>
        </nav>
        <button className="nav-btn">Try demo</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Realtime family safety</div>
            <h1>Stay connected to the people who matter most.</h1>
            <p>
              FamilyLive Connect helps families share location, stay in touch, and respond faster in critical moments — all in a premium, privacy-first experience.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Launch app</button>
              <button className="secondary-btn">Watch demo</button>
            </div>
            <div className="mini-stats">
              <div><strong>4.9/5</strong><span>family rating</span></div>
              <div><strong>2.1M</strong><span>safe check-ins</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="panel glow-panel">
              <div className="panel-top">
                <span className="live-pill"><span className="pulse" /> Live map</span>
                <button className="small-btn">Share</button>
              </div>

              <div className="map-board">
                <div className="city city-a">DELHI</div>
                <div className="city city-b">MUMBAI</div>
                <div className="map-marker one"><span>MJ</span></div>
                <div className="map-marker two"><span>DK</span></div>
                <div className="map-marker three"><span>PS</span></div>
                <div className="you-marker"><span>AK</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-row">
          {metrics.map(([value, label]) => (
            <div className="metric-box" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="features" className="feature-section">
          <div className="section-head">
            <div className="eyebrow">Why families choose us</div>
            <h2>Everything you need to feel safe and close.</h2>
          </div>

          <div className="feature-grid">
            {features.map(([title, body]) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">✦</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="security-block">
          <div className="security-copy">
            <div className="eyebrow">Built for trust</div>
            <h2>Your privacy is protected by design.</h2>
            <p>
              Every family circle is permission-based, and sensitive location access is controlled so you decide exactly who can see what.
            </p>
            <ul>
              <li>End-to-end encrypted communication</li>
              <li>Granular visibility controls</li>
              <li>Emergency-first design with instant response</li>
            </ul>
          </div>

          <div className="security-panel">
            <div className="security-box">
              <span className="security-tag">Privacy mode</span>
              <h3>Location shared only with trusted contacts</h3>
              <div className="toggle-row">
                <span>Live sharing</span>
                <button className="toggle active"><span /></button>
              </div>
              <div className="toggle-row">
                <span>Emergency access</span>
                <button className="toggle"><span /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="steps-section">
          <div className="section-head narrow">
            <div className="eyebrow">How it works</div>
            <h2>One app, three simple steps.</h2>
          </div>

          <div className="steps-grid">
            {steps.map(([num, label]) => (
              <div className="step-card" key={num}>
                <span>{num}</span>
                <h3>{label}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="get-started" className="cta-banner">
          <div>
            <div className="eyebrow">Ready to feel safer?</div>
            <h2>Bring your family closer.</h2>
          </div>
          <button className="primary-btn">Get started</button>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
