import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const data = {
  projects: [
    { title: 'AI CCTV Alert System', description: 'Real-time detection pipeline with alerts and clips.' },
    { title: 'BI Business Dashboard', description: 'Data warehouse + KPIs + executive-ready dashboards.' },
    { title: 'Math Challenge Platform', description: 'Friends compete with timed quizzes and leaderboards.' },
    { title: 'OS Lab Toolkit', description: 'Threading + IPC practice utilities and demos.' },
  ],
  certificates: [
    { title: 'Certificate Name', issuer: 'Issuer', year: '2024' },
    { title: 'Another Certificate', issuer: 'Issuer', year: '2023' },
  ],
  experience: [
    { role: 'Role / Title', place: 'Company', year: '2024', blurb: 'Impact or focus area.' },
    { role: 'Previous Role', place: 'Company', year: '2022', blurb: 'Key contribution.' },
    { role: 'Earlier Role', place: 'Company', year: '2020', blurb: 'Skill or achievement.' },
  ],
}

const views = {
  home: 'home',
  projects: 'projects',
  certificates: 'certificates',
  experience: 'experience',
}

const screen = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}

const wipe = {
  initial: { opacity: 0, y: 14, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.28, ease: 'easeOut' } },
  exit: { opacity: 0, y: 10, filter: 'blur(6px)', transition: { duration: 0.18, ease: 'easeIn' } },
}

function PromptLine({ children }) {
  return (
    <div className="line">
      <span className="prompt">A:\&gt;</span>
      <span className="text">{children}</span>
    </div>
  )
}

function FolderRow({ label, hint, onOpen }) {
  return (
    <motion.button
      type="button"
      className="folderRow"
      onClick={onOpen}
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="folderIcon" aria-hidden="true">
        [DIR]
      </span>
      <span className="folderLabel">{label}</span>
      <span className="folderHint">{hint}</span>
    </motion.button>
  )
}

export default function App() {
  const [view, setView] = useState(views.home)

  const header = useMemo(() => {
    if (view === views.projects) return 'PROJECTS'
    if (view === views.certificates) return 'CERTIFICATES'
    if (view === views.experience) return 'EXPERIENCE'
    return 'HOME'
  }, [view])

  const path = useMemo(() => {
    if (view === views.home) return 'A:\\PORTFOLIO'
    return `A:\\PORTFOLIO\\${header}`
  }, [view, header])

  return (
    <div className="crtRoot">
      {/* CRT overlays */}
      <div className="crtScanlines" aria-hidden="true" />
      <div className="crtVignette" aria-hidden="true" />
      <div className="crtGlow" aria-hidden="true" />
      <div className="crtFlicker" aria-hidden="true" />

      {/* Content */}
      <div className="crtContent">
        <div className="topBlock">
          <div className="bootTitle">MS-DOS version 1.25</div>
          <div className="bootTitle">Copyright 1981,82 Computer, Inc.</div>

          <div className="spacer" />

          <div className="statusLine">
            <span className="monoDim">Command v.1.1</span>
            <span className="monoDim">|</span>
            <span className="monoDim">Display: CRT</span>
            <span className="monoDim">|</span>
            <span className="monoDim">Mode: 80x25</span>
          </div>

          <div className="spacerSm" />

          <div className="pathLine">
            <span className="monoDim">Path:</span> <span className="monoBright">{path}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === views.home && (
            <motion.section
              key="home"
              className="screen"
              variants={screen}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="pane" variants={wipe} initial="initial" animate="animate" exit="exit">
                <div className="blockTitle">ABOUT.ME</div>

                <PromptLine>type about.txt</PromptLine>

                <div className="typeArea">
                  <motion.div
                    className="typed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.25 } }}
                  >
                    <div className="typeLine">
                      Hello, I&apos;m <span className="accent">Mohammed Hijazi</span>
                    </div>
                    <div className="typeLine dim">
                      CS senior — systems, security, and applied AI. I build practical software with clean UX and strong
                      fundamentals.
                    </div>
                    <div className="typeLine dim">Status: listening for new ideas_</div>
                  </motion.div>

                  <span className="cursor" aria-hidden="true" />
                </div>

                <div className="spacerSm" />

                <div className="blockTitle">DIRECTORIES</div>
                <PromptLine>dir</PromptLine>

                <div className="dirList">
                  <FolderRow
                    label="PROJECTS"
                    hint="(open to view pinned work)"
                    onOpen={() => setView(views.projects)}
                  />
                  <FolderRow
                    label="CERTIFICATES"
                    hint="(open to view credentials)"
                    onOpen={() => setView(views.certificates)}
                  />
                  <FolderRow
                    label="EXPERIENCE"
                    hint="(open to view timeline)"
                    onOpen={() => setView(views.experience)}
                  />
                </div>

                <div className="spacerSm" />

                <PromptLine>
                  help: click a directory. use <span className="monoBright">BACK</span> to return.
                </PromptLine>

                <div className="footerLine">
                  <span className="monoDim">Email:</span>{' '}
                  <a className="link" href="mailto:mohammed@example.com">
                    mohammed@example.com
                  </a>{' '}
                  <span className="monoDim">|</span> <span className="monoDim">GitHub:</span>{' '}
                  <a className="link" href="#" onClick={(e) => e.preventDefault()}>
                    github.com/your-profile
                  </a>
                </div>
              </motion.div>
            </motion.section>
          )}

          {view !== views.home && (
            <motion.section
              key={view}
              className="screen"
              variants={screen}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="pane" variants={wipe} initial="initial" animate="animate" exit="exit">
                <div className="viewHeader">
                  <div className="viewTitle">
                    <span className="monoDim">Directory:</span> <span className="monoBright">{header}</span>
                  </div>

                  <motion.button
                    type="button"
                    className="backBtn"
                    onClick={() => setView(views.home)}
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    [ BACK ]
                  </motion.button>
                </div>

                <div className="spacerSm" />

                {view === views.projects && (
                  <>
                    <PromptLine>type projects.txt</PromptLine>
                    <div className="list">
                      {data.projects.map((p) => (
                        <div className="listRow" key={p.title}>
                          <div className="listLeft">
                            <span className="tag">{'<'}/PRJ{'>'}</span>
                            <span className="listTitle">{p.title}</span>
                          </div>
                          <div className="listRight">{p.description}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {view === views.certificates && (
                  <>
                    <PromptLine>type certificates.txt</PromptLine>
                    <div className="list">
                      {data.certificates.map((c) => (
                        <div className="listRow" key={`${c.title}-${c.year}`}>
                          <div className="listLeft">
                            <span className="tag">{'<'}/CRT{'>'}</span>
                            <span className="listTitle">{c.title}</span>
                          </div>
                          <div className="listRight">
                            {c.issuer} — {c.year}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {view === views.experience && (
                  <>
                    <PromptLine>type experience.txt</PromptLine>
                    <div className="list">
                      {data.experience.map((e) => (
                        <div className="listRow" key={`${e.role}-${e.year}`}>
                          <div className="listLeft">
                            <span className="tag">{'<'}/XP{'>'}</span>
                            <span className="listTitle">
                              {e.role} @ {e.place}
                            </span>
                          </div>
                          <div className="listRight">
                            <span className="monoDim">{e.year}</span> — {e.blurb}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="spacerSm" />
                <PromptLine>Press BACK to return to A:\PORTFOLIO</PromptLine>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
