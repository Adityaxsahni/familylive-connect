import { Bell, ChevronRight, CircleUserRound, Compass, HeartPulse, Home, MessageCircle, Plus, Search, Shield, Users } from 'lucide-react';
import { useState } from 'react';

const family = [
  { name: 'Maya Johnson', relation: 'Sister', city: 'New Delhi', initials: 'MJ', color: '#c7f36d', x: '55%', y: '38%', status: 'Live now' },
  { name: 'Daniel Johnson', relation: 'Father', city: 'London', initials: 'DJ', color: '#ffb86b', x: '27%', y: '25%', status: '12 min ago' },
  { name: 'Priya Sharma', relation: 'Mother', city: 'Mumbai', initials: 'PS', color: '#b6a4ff', x: '69%', y: '68%', status: 'Live now' },
];

export default function App() {
  const [active, setActive] = useState('Overview');
  const [selected, setSelected] = useState<(typeof family)[number] | null>(null);
  const [sharing, setSharing] = useState(true);
  const [sos, setSos] = useState(false);
  const [toast, setToast] = useState('');

  const nav = [
    { label: 'Overview', icon: Home },
    { label: 'Family circle', icon: Users },
    { label: 'Messages', icon: MessageCircle },
    { label: 'Places near you', icon: Compass },
  ];

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">✦</div>
          <div>
            <div className="brand-name">FamilyLive</div>
            <small>CONNECT</small>
          </div>
        </div>

        <div className="profile-box">
          <div className="mini-avatar">AK</div>
          <div className="profile-text">
            <strong>Aditya Kumar</strong>
            <small>FLC-482901</small>
          </div>
          <ChevronRight size={16} />
        </div>

        <nav className="nav">
          {nav.map(({ label, icon: Icon }) => (
            <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => setActive(label)}>
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        <div className="privacy-box">
          <Shield size={18} />
          <div>
            <strong>Privacy protected</strong>
            <small>Your location is private.</small>
          </div>
        </div>

        <button className="settings-btn">
          <CircleUserRound size={18} />
          Account settings
        </button>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">SUNDAY · 27 SEPTEMBER 2026</div>
            <h1>{active === 'Overview' ? 'Good morning, Aditya.' : active}</h1>
            <p className="subtle">Keep your people close, wherever they are.</p>
          </div>

          <div className="topbar-actions">
            <div className="search-box">
              <Search size={16} />
              <span>Search family or places</span>
            </div>
            <button className="notif-btn" onClick={() => notify('You’re all caught up')}>
              <Bell size={18} />
              <span className="badge" />
            </button>
          </div>
        </header>

        <div className="content-area">
          <section className="hero-row">
            <div className="hero-card">
              <div>
                <span className="pill pill-green"><span className="dot" /> All family members safe</span>
                <h2>Connected families <span>feel closer.</span></h2>
                <p>See loved ones, share moments, and keep every journey safer with real-time family visibility.</p>
                <button className="primary-btn" onClick={() => setActive('Family circle')}>
                  Open family circle
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="orbit-wrap">
                <div className="orbit-ring ring-one" />
                <div className="orbit-ring ring-two" />
                <div className="orbit-core">✦</div>
                <div className="orbit-dot dot-a">M</div>
                <div className="orbit-dot dot-b">D</div>
                <div className="orbit-dot dot-c">P</div>
              </div>
            </div>

            <div className="safety-card">
              <div className="card-title-row">
                <span><HeartPulse size={16} /> Safety status</span>
                <span className="pill pill-green">Excellent</span>
              </div>

              <div className="safety-score">
                <strong>98</strong>
                <small>/100<br />family safety score</small>
              </div>

              <div className="progress-bar"><span /></div>
              <div className="subtle">Everyone checked in recently</div>
            </div>
          </section>

          <div className="section-head">
            <div>
              <div className="eyebrow">LIVE OVERVIEW</div>
              <h3>Family locations <span>· 4 members</span></h3>
            </div>
            <button className="text-link" onClick={() => setActive('Family circle')}>
              View all
              <ChevronRight size={14} />
            </button>
          </div>

          <section className="dashboard-grid">
            <div className="map-card">
              <div className="map-topbar">
                <div className="map-label"><span className="signal-dot" /> Live map</div>
                <button className="mini-btn" onClick={() => notify('Map centered on your family')}>⌖</button>
              </div>

              <div className="map-surface">
                <div className="road road-a" />
                <div className="road road-b" />
                <div className="road road-c" />
                <div className="water-layer" />
                <div className="map-city city-a">CONNAUGHT PLACE</div>
                <div className="map-city city-b">SAFARJUNG</div>

                {family.map((person) => (
                  <button
                    key={person.name}
                    className="map-marker"
                    style={{ left: person.x, top: person.y, background: person.color }}
                    onClick={() => setSelected(person)}
                  >
                    <span>{person.initials}</span>
                    <b>{person.name.split(' ')[0]}</b>
                  </button>
                ))}

                <div className="you-marker"><span>AK</span><b>You</b></div>
              </div>

              <div className="map-footer">
                <span><span className="mini-pin" /> New Delhi, India</span>
                <small>Updated just now</small>
              </div>
            </div>

            <div className="members-card">
              <div className="card-title-row members-title">
                <span>Family members</span>
                <button className="mini-btn square" onClick={() => notify('Add member flow opened')}><Plus size={17} /></button>
              </div>

              {family.map((person) => (
                <button key={person.name} className="member-item" onClick={() => setSelected(person)}>
                  <div className="mini-avatar" style={{ background: person.color }}>{person.initials}</div>
                  <div className="member-copy">
                    <strong>{person.name}</strong>
                    <small>{person.relation} · {person.city}</small>
                  </div>
                  <span className={person.status === 'Live now' ? 'status live' : 'status'}>
                    {person.status === 'Live now' && <span className="dot" />}
                    {person.status}
                  </span>
                </button>
              ))}

              <button className="add-member" onClick={() => notify('Invite link copied')}>
                <Plus size={15} />
                Add someone to your circle
              </button>
            </div>
          </section>

          <section className="bottom-grid">
            <div className="share-card">
              <div>
                <div className="eyebrow">YOUR LOCATION</div>
                <h3>Live sharing</h3>
                <p className="subtle small">Approved family members can see your current location.</p>
              </div>

              <button className={sharing ? 'toggle-switch on' : 'toggle-switch'} onClick={() => {
                setSharing(!sharing);
                notify(sharing ? 'Live sharing paused' : 'Live sharing enabled');
              }}>
                <span />
              </button>
            </div>

            <button className={sos ? 'sos-card triggered' : 'sos-card'} onClick={() => {
              setSos(!sos);
              notify(sos ? 'SOS cancelled' : 'SOS alert sent to emergency contacts');
            }}>
              <div className="sos-icon"><HeartPulse size={21} /></div>
              <div>
                <div className="eyebrow">EMERGENCY</div>
                <h3>{sos ? 'SOS is active' : 'Need help?'}</h3>
                <p>{sos ? 'Tap to cancel alert' : 'Press to alert your trusted circle'}</p>
              </div>
              <ChevronRight size={18} />
            </button>
          </section>
        </div>
      </main>

      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            <div className="big-avatar" style={{ background: selected.color }}>{selected.initials}</div>
            <div className="eyebrow">{selected.status.toUpperCase()}</div>
            <h2>{selected.name}</h2>
            <p className="subtle">{selected.relation} · {selected.city}</p>
            <div className="modal-actions">
              <button onClick={() => notify('Message composer opened')}><MessageCircle size={16} /> Message</button>
              <button onClick={() => notify(`Calling ${selected.name}`)}><Bell size={16} /> Call</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
