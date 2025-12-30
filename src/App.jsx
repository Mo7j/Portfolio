import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ABOUT, CERTIFICATES, EXPERIENCE, WORKS } from './data'


const fade = {
  initial: { opacity: 0, y: 14, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: 12, filter: 'blur(6px)', transition: { duration: 0.2, ease: 'easeIn' } },
}

const panel = {
  initial: { opacity: 0, y: 18, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: 18, scale: 0.99, transition: { duration: 0.2, ease: 'easeIn' } },
}

function Tag({ children }) {
  return <span className="tag">{children}</span>
}

export default function App() {
  const [openId, setOpenId] = useState(null)
  const openWork = useMemo(() => WORKS.find((w) => w.id === openId) ?? null, [openId])

  // Spotlight cursor overlay
  const rootRef = useRef(null)
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false })

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      setSpot({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      })
    }
    const onLeave = () => setSpot((s) => ({ ...s, active: false }))

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={`page ${spot.active ? 'spotOn' : ''}`}
      style={{
        '--mx': `${spot.x}px`,
        '--my': `${spot.y}px`,
      }}
    >
      <header className="nav">
        <div className="navLeft">
          <div className="brandMark" aria-hidden="true">
            MH
          </div>
          
        </div>

        <nav className="navRight">
          <a className="navLink" href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>
            About
          </a>
          <a className="navLink" href="#work" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Projects
          </a>
          <a className="navLink" href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Experience
          </a>
        </nav>
      </header>

      <div className="topRibbon" aria-hidden="true" />

      <main className="content">
        {/* Hero */}
        <section className="hero" id="about">
          <motion.div className="heroGrid" variants={fade} initial="initial" animate="animate">
            <div className="heroLeft">
              <div className="hello">Hi, I&apos;m {ABOUT.name}</div>
              <h1 className="headline">
                Clean <span className="accentWord">analytics</span>.
                <br />
                Reliable decisions.
              </h1>
            </div>

            <div className="heroRight">
              <div className="sectionHeader heroHeader">
                <div className="sectionTitle">About me</div>
              </div>
              <p className="subhead">{ABOUT.summary}</p>

              <ul className="aboutBullets heroBullets">
                {ABOUT.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="heroActions">
                <div className="contactChips">
                  <a className="chip" href="mailto:7j.mo7ammed@gmail.com" aria-label="Email">
                    <img
                      className="chipImg"
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg"
                      alt="Gmail"
                    />
                  </a>
                  <a className="chip" href="https://www.linkedin.com/in/mohammed-nasser-hijazi/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <img
                      className="chipImg"
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
                      alt="LinkedIn"
                    />
                  </a>
                  <a className="chip" href="https://github.com/Mo7j" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <img
                      className="chipImg"
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Work / Projects */}
        <section className="section" id="work">
          <div className="sectionHeader">
            <div className="sectionTitle">Projects</div>
            <div className="sectionHint">Click to Expand</div>
          </div>

          <AnimatePresence mode="wait">
            {!openWork ? (
              <motion.div key="grid" className="grid" variants={fade} initial="initial" animate="animate" exit="exit">
                {WORKS.map((w) => (
                  <motion.button
                    key={w.id}
                    type="button"
                    className="card"
                    onClick={() => setOpenId(w.id)}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="cardTop">
                      <div className="cardTitle">{w.title}</div>
                      <span className="expandPill" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 14"
                        width="22"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 2.2 7.5 7 1.5 11.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 2.2 15.5 7 9.5 11.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    </div>

                    <div className="cardTags">
                      {w.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>

                    <div className="cardBlurb">{w.blurb}</div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div key="detail" className="detailWrap" variants={panel} initial="initial" animate="animate" exit="exit">
                <div className="detailHeader">
                  <button type="button" className="back" onClick={() => setOpenId(null)}>
                    ← Back to list
                  </button>
                  <span className="detailKicker">Case study</span>
                </div>

                <div className="detailCard">
                  <div className="detailTitleRow">
                    <h2 className="detailTitle">{openWork.title}</h2>
                    <div className="detailTags">
                      {openWork.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <p className="detailBlurb">{openWork.blurb}</p>

                  <div className="detailCols">
                    <div className="detailCol">
                      <div className="detailLabel">What I did</div>
                      <ul className="detailList">
                        {openWork.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="detailCol">
                      <div className="detailLabel">Stack</div>
                      <ul className="detailList compact">
                        {openWork.stack.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>

                      <div className="divider" />

                      <div className="detailLabel">Outcome</div>
                      <p className="detailOutcome">
                        Trusted metrics, consistent definitions, and dashboards built for action -- not vanity charts.
                      </p>
                    </div>
                  </div>

                  <div className="detailGallery">
                    <div className="detailLabel">Screens</div>
                    <div className="detailShots">
                      <div className="shot shot-a" aria-hidden="true" />
                      <div className="shot shot-b" aria-hidden="true" />
                      <div className="shot shot-c" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <div className="sectionHeader">
            <div className="sectionTitle">Experience</div>
            <div className="sectionHint">A quick career snapshot.</div>
          </div>

          <div className="experienceList">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="experienceCard">
                <div className="experienceTop">
                  <div className="experienceRole">{item.role}</div>
                  <div className="experienceYears">{item.years}</div>
                </div>
                <div className="experiencePlace">{item.place}</div>
                <p className="experienceNote">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="section" id="certificates">
          <div className="sectionHeader">
            <div className="sectionTitle">Certificates</div>
            <div className="sectionHint">Recent credentials.</div>
          </div>

          <div className="certGrid">
            {CERTIFICATES.map((cert) => (
              <div key={cert.title} className="certCard">
                <div className="certTitle">{cert.title}</div>
                <div className="certMeta">
                  <span>{cert.org}</span>
                  <span className="certYear">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <span>(c) {new Date().getFullYear()} {ABOUT.name}</span>
        </footer>
      </main>
    </div>
  )
}
