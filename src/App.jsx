import './App.css'

const features = [
  {
    title: 'Idea → PRD engine',
    text: 'Convert rough notes into a clean product brief with problem framing, scope, risks, goals, and success metrics.',
    tag: 'Strategy',
  },
  {
    title: 'Launch planning workspace',
    text: 'Generate launch checklists, activation milestones, content angles, and channel plans without building a manual spreadsheet.',
    tag: 'Execution',
  },
  {
    title: 'Weekly builder cadence',
    text: 'Stay focused with a lightweight board that shows this week’s priorities, blockers, and next actions.',
    tag: 'Momentum',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Capture raw thinking',
    text: 'Save product notes, customer observations, launch ideas, and rough assumptions in one place.',
  },
  {
    step: '02',
    title: 'Generate structured outputs',
    text: 'LaunchDeck turns the raw input into product briefs, positioning, milestones, and focused launch tasks.',
  },
  {
    step: '03',
    title: 'Ship with clarity',
    text: 'Use the execution board to track what to build next, what to write next, and what to measure after launch.',
  },
]

const projectCards = [
  {
    name: 'PulseKit',
    stage: 'Launch Week',
    score: '91/100',
    insight: 'Strong positioning. Improve the hero by showing one measurable promise and simplifying your pricing explanation.',
  },
  {
    name: 'Orbit Notes',
    stage: 'Planning',
    score: '84/100',
    insight: 'The workflow feels useful. The clearest next step is narrowing the audience to solo consultants, not “busy professionals”.',
  },
]

const deliverables = [
  'Product brief draft with goals and scope',
  'Positioning and landing page copy',
  'Feature priority matrix',
  'Launch checklist with channels and KPIs',
  'Weekly action board for execution',
]

const testimonials = [
  {
    quote: 'It feels like a strategic cofounder for the messy phase between idea and launch.',
    author: 'Indie founder preview feedback',
  },
  {
    quote: 'The most valuable part is that it produces structure, not just more text.',
    author: 'Solo builder user interview',
  },
]

const submissionBullets = [
  'Original AI workspace concept for solo builders and small product teams.',
  'Focused on turning messy product ideas into practical launch outputs, not generic chat.',
  'Polished MVP presentation with clear product framing and demo-ready UI.',
  'Strong fit for MiMo due to structured generation, summarization, prioritization, and planning workflows.',
]

const metrics = [
  { label: 'AI outputs', value: '5' },
  { label: 'Core workflow', value: '3-step' },
  { label: 'Demo state', value: 'MVP ready' },
]

const promptFlows = [
  {
    name: 'Brief Builder',
    output: 'Turns a raw idea into a structured product brief with problem, audience, scope, risks, and metrics.',
  },
  {
    name: 'Launch Planner',
    output: 'Creates launch milestones, distribution ideas, and weekly priorities from a product summary.',
  },
  {
    name: 'Messaging Refiner',
    output: 'Sharpens value proposition, hero copy, and key differentiators for landing page communication.',
  },
]

const roadmap = [
  'Connect to MiMo API for real structured generation',
  'Add persistent projects and saved workspaces',
  'Support JSON templates for product planning flows',
  'Export briefs, checklists, and launch plans',
]

const authCards = [
  { title: 'Continue with MiMo', text: 'Use your MiMo-backed workspace for planning and generation flows.' },
  { title: 'Start demo workspace', text: 'Open a preloaded project instantly to explore the product concept.' },
]

const prdSections = [
  {
    title: 'Problem',
    body: 'Freelancers waste time rebuilding weekly status updates for clients across docs, chats, and email threads.',
  },
  {
    title: 'Audience',
    body: 'Solo consultants, designers, and small agencies who need fast, reusable reporting workflows.',
  },
  {
    title: 'Success metric',
    body: 'Reduce time spent preparing a weekly report from 45 minutes to under 10 minutes.',
  },
]

const deployChecklist = [
  'Create a public GitHub repository for LaunchDeck',
  'Push the project and add a clean README',
  'Import the repo into Vercel',
  'Set build command to npm run build and output directory to dist',
  'Deploy and attach the live URL in the submission form',
]

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">LD</div>
          <div className="brand-copy">
            <span className="brand-name">LaunchDeck</span>
            <span className="brand-tag">AI workspace for solo builders</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#architecture">Architecture</a>
          <a href="#submission">Submission</a>
        </nav>
        <a className="nav-cta" href="#dashboard">Live concept</a>
      </header>

      <main>
        <section className="hero-grid">
          <div className="hero-copy premium-surface">
            <span className="eyebrow">From rough idea to launch-ready plan</span>
            <h1>Build with more clarity than chaos.</h1>
            <p className="hero-text">
              LaunchDeck helps solo founders turn scattered notes into structured product briefs,
              launch checklists, feature priorities, and weekly action plans.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#dashboard">Explore the product</a>
              <a className="btn btn-secondary" href="#submission">Submission summary</a>
            </div>

            <div className="hero-stats">
              {metrics.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel premium-surface" id="dashboard">
            <div className="panel-window">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="workspace-grid">
                <aside className="sidebar-card glass-card">
                  <p className="mini-label">Workspace</p>
                  <h3>Builder OS</h3>
                  <ul>
                    <li className="active">Projects</li>
                    <li>PRDs</li>
                    <li>Launch plans</li>
                    <li>Weekly focus</li>
                  </ul>
                </aside>

                <section className="main-card">
                  <div className="card-head">
                    <div>
                      <p className="mini-label">Current project</p>
                      <h3>PulseKit</h3>
                    </div>
                    <span className="status-pill">Launch Week</span>
                  </div>

                  <div className="plan-box glass-card">
                    <h4>AI summary</h4>
                    <p>
                      PulseKit is a weekly reporting tool for freelancers who need fast client updates.
                      The strongest growth wedge is “replace manual status docs in 10 minutes each week”.
                    </p>
                  </div>

                  <div className="task-columns">
                    <div className="glass-card inner-card">
                      <p className="mini-label">This week</p>
                      <ul>
                        <li>Refine pricing comparison</li>
                        <li>Write launch thread draft</li>
                        <li>QA onboarding flow</li>
                      </ul>
                    </div>
                    <div className="glass-card inner-card">
                      <p className="mini-label">AI next actions</p>
                      <ul>
                        <li>Add proof metric in hero</li>
                        <li>Tighten ICP language</li>
                        <li>Define activation event</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip premium-surface">
          <span>Built for solo founders</span>
          <span>Planning-first workflow</span>
          <span>Structured AI outputs</span>
          <span>Submission-ready MVP</span>
        </section>

        <section className="section-block auth-grid">
          {authCards.map((item) => (
            <article key={item.title} className="auth-card premium-surface">
              <span className="eyebrow">Entry point</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#dashboard" className="inline-link">Open preview</a>
            </article>
          ))}
        </section>

        <section className="section-block" id="features">
          <div className="section-heading centered">
            <span className="eyebrow">Core features</span>
            <h2>Designed for people who need real product structure.</h2>
            <p>
              The product is intentionally narrow: help a builder think clearly, prioritize faster, and launch without losing context.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item) => (
              <article key={item.title} className="feature-card premium-surface">
                <span className="feature-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-showcase" id="workflow">
          <div>
            <div className="section-heading left">
              <span className="eyebrow">Workflow</span>
              <h2>A simple path from product thinking to execution.</h2>
            </div>

            <div className="timeline premium-surface">
              {workflow.map((item) => (
                <div key={item.step} className="timeline-item">
                  <span className="timeline-step">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stack-card premium-surface">
            <p className="mini-label">Launch outputs</p>
            <h3>What the product generates</h3>
            <ul className="deliverable-list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-block architecture-grid" id="architecture">
          <div className="submission-card premium-surface">
            <span className="eyebrow">Architecture concept</span>
            <h2>Prompt workflows that map to real builder tasks.</h2>
            <div className="flow-list">
              {promptFlows.map((flow) => (
                <div key={flow.name} className="flow-item glass-card">
                  <h3>{flow.name}</h3>
                  <p>{flow.output}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="submission-card premium-surface">
            <span className="eyebrow">Roadmap</span>
            <h2>How the MVP becomes a working product.</h2>
            <ul className="submission-list">
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-block prd-grid">
          <div className="submission-card premium-surface">
            <span className="eyebrow">PRD preview</span>
            <h2>Example structured output inside the product.</h2>
            <div className="flow-list">
              {prdSections.map((item) => (
                <div key={item.title} className="flow-item glass-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="submission-card premium-surface">
            <span className="eyebrow">Deploy checklist</span>
            <h2>Ready for public demo setup.</h2>
            <ul className="submission-list">
              {deployChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-block project-section">
          <div className="section-heading centered">
            <span className="eyebrow">Demo projects</span>
            <h2>Example states inside the workspace.</h2>
          </div>
          <div className="project-grid">
            {projectCards.map((card) => (
              <article key={card.name} className="project-card premium-surface">
                <div className="project-head">
                  <div>
                    <h3>{card.name}</h3>
                    <p>{card.stage}</p>
                  </div>
                  <span>{card.score}</span>
                </div>
                <p>{card.insight}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.author} className="quote-card premium-surface">
              <p>“{item.quote}”</p>
              <span>{item.author}</span>
            </article>
          ))}
        </section>

        <section className="section-block submission-grid" id="submission">
          <div className="submission-card premium-surface">
            <span className="eyebrow">Submission summary</span>
            <h2>Why this project is worth submitting</h2>
            <ul className="submission-list">
              {submissionBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="submission-card emphasis premium-surface">
            <span className="eyebrow">Suggested stack</span>
            <h2>React + Vite MVP</h2>
            <p>
              The frontend demo is already prepared as a polished MVP. The next iteration can plug into MiMo for
              structured generation, idea cleanup, task decomposition, and planning workflows.
            </p>
            <div className="chip-row">
              <span>React</span>
              <span>Vite</span>
              <span>MiMo API</span>
              <span>Structured outputs</span>
              <span>Planning workflows</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
