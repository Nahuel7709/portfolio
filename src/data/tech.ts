// Íconos de tecnologías (de Simple Icons, en /public/icons)
export const TECH_ICONS = {
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  'Node.js': 'node-js',
  Express: 'express',
  React: 'react',
  'Next.js': 'next-js',
  'Tailwind CSS': 'tailwind-css',
  Vite: 'vite',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Prisma: 'prisma',
  Redis: 'redis',
  Docker: 'docker',
  'GitHub Actions': 'github-actions',
  Git: 'git',
  Vitest: 'vitest',
  Jest: 'jest',
  'Spring Boot': 'spring-boot',
  Java: 'java',
  Zod: 'zod',
  Postman: 'postman',
  Vercel: 'vercel',
  Swagger: 'swagger',
  WordPress: 'wordpress',
  HTML: 'html5',
  CSS: 'css3',
} as const

export type TechName = keyof typeof TECH_ICONS

export const techIcon = (name: TechName) => `/icons/${TECH_ICONS[name]}.svg`

export const TICKER: TechName[] = [
  'TypeScript', 'Node.js', 'Express', 'React', 'PostgreSQL', 'Prisma',
  'Redis', 'Docker', 'Vitest', 'GitHub Actions', 'Next.js', 'Tailwind CSS',
]

export const SKILL_GROUPS: TechName[][] = [
  ['Node.js', 'Express', 'TypeScript', 'JavaScript', 'Zod', 'Java', 'Spring Boot'],
  ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
  ['PostgreSQL', 'MySQL', 'Prisma', 'Redis'],
  ['Vitest', 'Jest', 'Docker', 'GitHub Actions', 'Git', 'Postman', 'Swagger', 'Vercel'],
]

// Paths de íconos (stroke, viewBox 24x24) para las soft skills, en el mismo orden que en content.ts
export const SOFT_ICONS = [
  'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z',
  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7',
  'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM13 6h3a2 2 0 0 1 2 2v7M6 9v12',
  'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
]
