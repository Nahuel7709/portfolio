import type { TechName } from './tech'

export type Lang = 'en' | 'es'

export const LINKS = {
  email: 'nahuel.d.menichetti@gmail.com',
  github: 'https://github.com/Nahuel7709',
  linkedin: 'https://www.linkedin.com/in/nahuelmenichetti/',
  cv: '/Nahuel-Menichetti-CV.pdf',
}

type Job = { title: string; company: string; date: string; bullets: string[]; tech: TechName[]; soft: string[] }
type Project = {
  name: string
  tag: string
  desc: string
  tech: TechName[]
  links: { label: string; href: string }[]
  image?: string // poné la captura en /public/projects y la ruta acá, ej: '/projects/car-rental.png'
}

const projectLinks = {
  giuma: 'https://github.com/Nahuel7709/giuma',
  carDemo: 'https://car-rental-xi-teal-49.vercel.app',
  carRepo: 'https://github.com/Nahuel7709/Car-Rental',
  stayhub: 'https://github.com/Nahuel7709/StayHub',
}

export const content = {
  en: {
    nav: { about: 'About', experience: 'Experience', work: 'Work', skills: 'Skills', contact: 'Contact me' },
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    available: 'Available for work — 2026',
    roleA: 'Full-Stack',
    roleB: 'Developer',
    heroText:
      'I build complete products in TypeScript, with a focus on backends that stay correct under real traffic: data consistency, concurrency and clean APIs.',
    student: 'Computer Science student · UADE',
    cta: { work: 'Selected work ↓', email: 'Email me', cv: 'Download CV' },
    about: [
      "I'm a full-stack developer working mostly in TypeScript: React on the frontend, Node.js, Express and PostgreSQL on the backend. I'm comfortable owning a feature end to end, from the database schema to the UI, with tests and CI around it.",
      "Lately I've been going deep on the backend side: transactions, caching, queues and distributed systems. I'm studying Computer Science at UADE.",
    ],
    keySkills: ['REST API design', 'Relational data modeling', 'Auth & role-based access', 'Concurrency & transactions', 'Integration testing & CI', 'React + TypeScript UIs'],
    jobs: [
      {
        title: 'Web Developer',
        company: 'LEB Entertainment · Freelance',
        date: 'Dec 2025 — Present',
        bullets: [
          'Rebuilt the company website from scratch after gathering requirements directly with the client.',
          'Delivered sections for the artist roster, upcoming shows and past-show highlights, with custom CSS and JavaScript.',
          'Maintain the site, content, hosting and domain, turning client requests into concrete changes.',
        ],
        tech: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
        soft: ['Client communication', 'Requirements gathering', 'End-to-end ownership'],
      },
      {
        title: 'Web Developer (Junior)',
        company: 'Globant · Full-time · Hybrid',
        date: 'Oct 2024 — Oct 2025',
        bullets: [
          'Built responsive UI components in React and TypeScript, integrating REST APIs and handling state, routing and form validation.',
          'Wrote unit and integration tests with Jest and React Testing Library; Git and pull-request workflows.',
          "Worked in a cross-functional Scrum team (backend, QA, PM) after completing Globant's internal React Academy.",
        ],
        tech: ['React', 'TypeScript', 'Jest', 'Git'],
        soft: ['Agile / Scrum', 'Code review', 'Cross-functional teamwork', 'Communication in English'],
      },
    ] as Job[],
    workTitle: 'Selected work',
    allRepos: 'All repos on GitHub ↗',
    screenshot: 'Project screenshot',
    projects: [
      {
        name: 'Giuma',
        tag: 'Digital wallet · In progress',
        desc: 'A payments platform built around a double-entry ledger: transfers between users, payment links and webhooks to merchants. It grows stage by stage into idempotent payments, caching, queues and separate services.',
        tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
        links: [{ label: 'Repo', href: projectLinks.giuma }],
      },
      {
        name: 'Car Rental',
        tag: 'Full-stack app · 2026',
        desc: 'Built through code-reviewed tickets with a senior engineer as mentor. Bookings run inside a transaction that locks the car row, so a car is never double-booked, even with simultaneous requests. JWT auth, role-based access, per-route rate limiting, integration tests and CI.',
        tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Vitest', 'Vercel'],
        links: [{ label: 'Live demo', href: projectLinks.carDemo }, { label: 'Repo', href: projectLinks.carRepo }],
      },
      {
        name: 'StayHub',
        tag: 'Booking platform · 2026',
        desc: 'Accommodation booking platform built as the final project for Digital House: date-range search, availability validation, reviews gated to completed stays and a full admin panel.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker', 'Swagger'],
        links: [{ label: 'Repo', href: projectLinks.stayhub }],
      },
    ] as Project[],
    skillsTitle: 'Skills & tools',
    skillsHint: 'Hover over an icon to see the technology.',
    skillGroups: ['Backend', 'Frontend', 'Databases', 'Testing & DevOps'],
    softTitle: 'Soft skills',
    softSkills: ['Problem solving', 'Clear communication', 'Teamwork', 'Ownership', 'Giving & receiving code review', 'Fast learner', 'Working directly with clients', 'Communication in English'],
    eduTitle: 'Education & languages',
    eduLabel: 'EDUCATION',
    langLabel: 'LANGUAGES',
    education: [
      { title: 'B.Sc. in Computer Science', place: 'UADE', date: '2022 — present' },
      { title: 'Professional Developer', place: 'Digital House', date: '2026' },
      { title: 'Full Stack Web Certified Programmer', place: 'Digital House', date: '2022' },
    ],
    languages: [
      { name: 'Spanish', level: 'Native', pct: 100 },
      { name: 'English', level: 'Upper intermediate (B2)', pct: 70 },
    ],
    contactTitle: ["Let's build", 'something.'],
    contactText: 'Open to full-stack and backend roles. The fastest way to reach me is email.',
    form: { name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@company.com', msg: 'Message', msgPh: 'Tell me about the role or project', send: 'Send message', subject: 'Contact from portfolio' },
    backTop: 'Back to top ↑',
    keyboardLabel: 'My stack as a keyboard',
    keyboardHint: 'Hover over the keys',
    soundOn: 'Turn key sound on',
    soundOff: 'Turn key sound off',
  },
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', work: 'Proyectos', skills: 'Skills', contact: 'Contactame' },
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    available: 'Disponible para trabajar — 2026',
    roleA: 'Desarrollador',
    roleB: 'Full-Stack',
    heroText:
      'Construyo productos completos en TypeScript, con foco en backends que se mantienen correctos con tráfico real: consistencia de datos, concurrencia y APIs prolijas.',
    student: 'Estudiante de Ciencias de la Computación · UADE',
    cta: { work: 'Ver proyectos ↓', email: 'Escribime', cv: 'Descargar CV' },
    about: [
      'Soy desarrollador full-stack y trabajo principalmente en TypeScript: React en el frontend, Node.js, Express y PostgreSQL en el backend. Puedo encargarme de una funcionalidad de punta a punta, desde el esquema de la base de datos hasta la interfaz, con tests y CI.',
      'Últimamente me estoy especializando en backend: transacciones, caché, colas y sistemas distribuidos. Estudio Ciencias de la Computación en UADE.',
    ],
    keySkills: ['Diseño de APIs REST', 'Modelado de datos relacional', 'Autenticación y roles', 'Concurrencia y transacciones', 'Tests de integración y CI', 'Interfaces con React + TypeScript'],
    jobs: [
      {
        title: 'Web Developer',
        company: 'LEB Entertainment · Freelance',
        date: 'Dic 2025 — Actualidad',
        bullets: [
          'Rehice el sitio de la empresa desde cero, relevando los requerimientos directamente con el cliente.',
          'Desarrollé secciones de artistas, próximos shows y highlights de shows pasados, con CSS y JavaScript a medida.',
          'Mantengo el sitio, el contenido, el hosting y el dominio, convirtiendo los pedidos del cliente en cambios concretos.',
        ],
        tech: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
        soft: ['Comunicación con el cliente', 'Relevamiento de requerimientos', 'Responsabilidad de punta a punta'],
      },
      {
        title: 'Web Developer (Junior)',
        company: 'Globant · Full-time · Híbrido',
        date: 'Oct 2024 — Oct 2025',
        bullets: [
          'Desarrollé componentes responsive en React y TypeScript, integrando APIs REST y manejando estado, ruteo y validación de formularios.',
          'Escribí tests unitarios y de integración con Jest y React Testing Library; flujos con Git y pull requests.',
          'Trabajé en un equipo Scrum multidisciplinario (backend, QA, PM) después de completar la React Academy de Globant.',
        ],
        tech: ['React', 'TypeScript', 'Jest', 'Git'],
        soft: ['Agile / Scrum', 'Code review', 'Trabajo en equipos multidisciplinarios', 'Comunicación en inglés'],
      },
    ] as Job[],
    workTitle: 'Proyectos destacados',
    allRepos: 'Todos los repos en GitHub ↗',
    screenshot: 'Captura del proyecto',
    projects: [
      {
        name: 'Giuma',
        tag: 'Billetera digital · En desarrollo',
        desc: 'Una plataforma de pagos construida sobre un ledger de doble partida: transferencias entre usuarios, links de pago y webhooks a comercios. Crece por etapas hacia pagos idempotentes, caché, colas y servicios separados.',
        tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
        links: [{ label: 'Repo', href: projectLinks.giuma }],
      },
      {
        name: 'Car Rental',
        tag: 'App full-stack · 2026',
        desc: 'Construida por tickets con code review de un ingeniero senior como mentor. Las reservas corren dentro de una transacción que bloquea la fila del auto, así nunca se reserva dos veces, aunque lleguen pedidos simultáneos. Auth con JWT, roles, rate limiting por ruta, tests de integración y CI.',
        tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Vitest', 'Vercel'],
        links: [{ label: 'Demo', href: projectLinks.carDemo }, { label: 'Repo', href: projectLinks.carRepo }],
      },
      {
        name: 'StayHub',
        tag: 'Plataforma de reservas · 2026',
        desc: 'Plataforma de reserva de alojamientos, proyecto final de Digital House: búsqueda por rango de fechas, validación de disponibilidad, reseñas solo para estadías completadas y panel de administración.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker', 'Swagger'],
        links: [{ label: 'Repo', href: projectLinks.stayhub }],
      },
    ] as Project[],
    skillsTitle: 'Skills y herramientas',
    skillsHint: 'Pasá el mouse por un ícono para ver la tecnología.',
    skillGroups: ['Backend', 'Frontend', 'Bases de datos', 'Testing y DevOps'],
    softTitle: 'Soft skills',
    softSkills: ['Resolución de problemas', 'Comunicación clara', 'Trabajo en equipo', 'Responsabilidad', 'Dar y recibir code review', 'Aprendizaje rápido', 'Trabajo directo con clientes', 'Comunicación en inglés'],
    eduTitle: 'Educación e idiomas',
    eduLabel: 'EDUCACIÓN',
    langLabel: 'IDIOMAS',
    education: [
      { title: 'Licenciatura en Ciencias de la Computación', place: 'UADE', date: '2022 — actualidad' },
      { title: 'Professional Developer', place: 'Digital House', date: '2026' },
      { title: 'Full Stack Web Certified Programmer', place: 'Digital House', date: '2022' },
    ],
    languages: [
      { name: 'Español', level: 'Nativo', pct: 100 },
      { name: 'Inglés', level: 'Intermedio alto (B2)', pct: 70 },
    ],
    contactTitle: ['Construyamos', 'algo.'],
    contactText: 'Abierto a puestos full-stack y backend. La forma más rápida de contactarme es por mail.',
    form: { name: 'Nombre', namePh: 'Tu nombre', email: 'Email', emailPh: 'vos@empresa.com', msg: 'Mensaje', msgPh: 'Contame sobre el puesto o el proyecto', send: 'Enviar mensaje', subject: 'Contacto desde el portfolio' },
    backTop: 'Volver arriba ↑',
    keyboardLabel: 'Mi stack como teclado',
    keyboardHint: 'Pasá el mouse por las teclas',
    soundOn: 'Activar sonido de teclas',
    soundOff: 'Desactivar sonido de teclas',
  },
}

export type Content = (typeof content)['en']
