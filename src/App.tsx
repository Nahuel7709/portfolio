import { useState, type FormEvent } from 'react'
import { content, LINKS, type Content, type Lang } from './data/content'
import { SKILL_GROUPS, SOFT_ICONS } from './data/tech'
import { useBuenosAiresClock, useLang, useTheme } from './hooks'
import { Check, ImageIcon, Moon, StrokeIconTile, Sun, TechTile } from './components/Icons'
import { SectionHeading } from './components/SectionHeading'

export default function App() {
  const { theme, toggle } = useTheme()
  const { lang, setLang } = useLang()
  const clock = useBuenosAiresClock()
  const t = content[lang]

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} theme={theme} toggleTheme={toggle} />
      <Hero t={t} clock={clock} />
      <main className="container">
        <About t={t} />
        <Experience t={t} />
        <Work t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} clock={clock} />
    </>
  )
}

type Props = { t: Content }

function Nav({ t, lang, setLang, theme, toggleTheme }: Props & {
  lang: Lang
  setLang: (l: Lang) => void
  theme: 'dark' | 'light'
  toggleTheme: () => void
}) {
  return (
    <nav aria-label="Main" className="container nav">
      <a href="#top" className="logo">
        nahuel<span className="accent">.</span>
      </a>
      <div className="nav__links">
        <a href="#about">{t.nav.about}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#work">{t.nav.work}</a>
        <a href="#skills">{t.nav.skills}</a>
        <div role="group" aria-label="Language" className="segmented">
          {(['en', 'es'] as const).map((l) => (
            <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <a href="#contact" className="btn btn--solid btn--sm">
          {t.nav.contact}
        </a>
      </div>
    </nav>
  )
}

function Hero({ t, clock }: Props & { clock: string }) {
  return (
    <header id="top" className="container hero">
      <div className="hero__badges">
        <img src="/avatar.png" alt="Nahuel Menichetti" className="avatar" />
        <span className="badge">
          <span className="pulse" aria-hidden="true" />
          {t.available}
        </span>
      </div>
      <div>
        <h1 className="hero__name">
          Nahuel
          <br />
          Menichetti
        </h1>
        <p className="hero__role">
          {t.roleA} <span className="accent">{t.roleB}</span>
        </p>
      </div>
      <div className="hero__row">
        <p className="hero__text">{t.heroText}</p>
        <ul className="hero__facts mono">
          <li>Buenos Aires, Argentina · {clock} GMT-3</li>
          <li>{t.student}</li>
        </ul>
      </div>
      <div className="hero__ctas">
        <a href="#work" className="btn btn--accent">{t.cta.work}</a>
        <a href={`mailto:${LINKS.email}`} className="btn btn--ghost">{t.cta.email}</a>
        <a href={LINKS.github} className="btn btn--ghost" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={LINKS.linkedin} className="btn btn--ghost" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={LINKS.cv} className="btn btn--ghost" target="_blank" rel="noreferrer">{t.cta.cv}</a>
      </div>
    </header>
  )
}

function About({ t }: Props) {
  return (
    <section id="about" aria-labelledby="about-h" className="section split">
      <SectionHeading num="01" id="about-h" title={t.nav.about} />
      <div className="split__body stack-20">
        <p className="lead">{t.about[0]}</p>
        <p className="lead muted">{t.about[1]}</p>
        <div className="grid-2">
          {t.keySkills.map((s) => (
            <p key={s} className="card card--small">{s}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience({ t }: Props) {
  return (
    <section id="experience" aria-labelledby="exp-h" className="section split">
      <SectionHeading num="02" id="exp-h" title={t.nav.experience} />
      <div className="split__body timeline">
        {t.jobs.map((job) => (
          <article key={job.title + job.company} className="job">
            <div className="row-between">
              <h3 className="job__title">{job.title}</h3>
              <p className="mono muted small">{job.date}</p>
            </div>
            <p className="job__company">{job.company}</p>
            <ul className="job__bullets">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="wrap-8">
              {job.tech.map((name) => (
                <TechTile key={name} name={name} size="sm" />
              ))}
            </div>
            <div className="wrap-8">
              {job.soft.map((s) => (
                <span key={s} className="pill">
                  <Check />
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Work({ t }: Props) {
  return (
    <section id="work" aria-labelledby="work-h" className="section stack-40">
      <div className="row-between row-between--end">
        <SectionHeading num="03" id="work-h" title={t.workTitle} />
        <a href={LINKS.github} target="_blank" rel="noreferrer" className="link-strong">{t.allRepos}</a>
      </div>
      {t.projects.map((p, i) => (
        <article key={p.name} className="project">
          {p.image ? (
            <img src={p.image} alt={`${t.screenshot} — ${p.name}`} className="project__shot" />
          ) : (
            <div role="img" aria-label={`${t.screenshot} — ${p.name}`} className="project__shot project__shot--empty">
              <ImageIcon />
              <span className="mono small">{t.screenshot}</span>
            </div>
          )}
          <div className="project__body">
            <div className="row-between">
              <h3 className="project__name">
                <span className="faint">0{i + 1}</span> {p.name}
              </h3>
              <span className="tag mono">{p.tag}</span>
            </div>
            <p className="muted">{p.desc}</p>
            <div className="wrap-8">
              {p.tech.map((name) => (
                <TechTile key={name} name={name} />
              ))}
            </div>
            <div className="project__links">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="accent">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

function Skills({ t }: Props) {
  return (
    <section id="skills" aria-labelledby="skills-h" className="section stack-40">
      <div>
        <SectionHeading num="04" id="skills-h" title={t.skillsTitle} />
        <p className="muted small" style={{ marginTop: 12 }}>{t.skillsHint}</p>
      </div>
      <div className="skills-grid">
        {t.skillGroups.map((title, i) => (
          <div key={title} className="card skill-card">
            <div className="row-between">
              <h3 className="skill-card__title">{title}</h3>
              <span className="mono muted small">{String(SKILL_GROUPS[i].length).padStart(2, '0')}</span>
            </div>
            <div className="wrap-10">
              {SKILL_GROUPS[i].map((name) => (
                <TechTile key={name} name={name} size="lg" />
              ))}
            </div>
          </div>
        ))}
        <div className="card skill-card">
          <div className="row-between">
            <h3 className="skill-card__title">{t.softTitle}</h3>
            <span className="mono muted small">{String(t.softSkills.length).padStart(2, '0')}</span>
          </div>
          <div className="wrap-10">
            {t.softSkills.map((s, i) => (
              <StrokeIconTile key={s} name={s} d={SOFT_ICONS[i]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Education({ t }: Props) {
  return (
    <section id="education" aria-labelledby="edu-h" className="section split">
      <SectionHeading num="05" id="edu-h" title={t.eduTitle} />
      <div className="split__body edu">
        <div className="edu__col edu__col--wide">
          <h3 className="label">{t.eduLabel}</h3>
          {t.education.map((e) => (
            <div key={e.title} className="edu__row">
              <p className="edu__title">{e.title}</p>
              <p className="muted small">{e.place} · {e.date}</p>
            </div>
          ))}
        </div>
        <div className="edu__col">
          <h3 className="label">{t.langLabel}</h3>
          {t.languages.map((l) => (
            <div key={l.name} className="edu__row">
              <div className="row-between">
                <p className="edu__title">{l.name}</p>
                <p className="muted small">{l.level}</p>
              </div>
              <div className="bar" aria-hidden="true">
                <div className="bar__fill" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Sin backend: arma el mail con los datos y abre el cliente de correo de quien escribe.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(t.form.subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" aria-labelledby="contact-h" className="section section--last split">
      <div className="stack-20 contact__intro">
        <p className="section-num">06</p>
        <h2 id="contact-h" className="contact__title">
          {t.contactTitle[0]}
          <br />
          {t.contactTitle[1]}
        </h2>
        <p className="muted">{t.contactText}</p>
        <a href={`mailto:${LINKS.email}`} className="contact__email accent">{LINKS.email}</a>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <label>
          {t.form.name}
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.form.namePh} />
        </label>
        <label>
          {t.form.email}
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.form.emailPh} />
        </label>
        <label>
          {t.form.msg}
          <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.form.msgPh} />
        </label>
        <button type="submit" className="btn btn--solid">{t.form.send}</button>
      </form>
    </section>
  )
}

function Footer({ t, clock }: Props & { clock: string }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Nahuel Menichetti · Buenos Aires {clock}</p>
        <div className="footer__links">
          <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={LINKS.cv} target="_blank" rel="noreferrer">CV</a>
          <a href="#top">{t.backTop}</a>
        </div>
      </div>
    </footer>
  )
}
