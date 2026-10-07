export interface Experience { company: string; role: string; where: string; dates: string; points: string[]; placeholder: string }
export const experience: Experience[] = [
  { company: 'Bluestock Fintech', role: 'Software Development Engineer Intern', where: 'Remote', dates: 'Aug 2025 – Sep 2025', placeholder: 'BLUESTOCK',
    points: [
      'Built and secured backend modules for authentication, jobs, applications, company and seeker workflows in a production MERN job portal.',
      'Implemented JWT authentication with role-based access control (RBAC).',
      'Added centralized request validation and error handling.',
      'Standardized API response formats.',
    ] },
  { company: 'InternPe', role: 'Web Development Intern', where: 'Remote', dates: 'Jul 2024 – Aug 2024', placeholder: 'INTERNPE',
    points: [
      'Built and deployed 4 responsive web applications using HTML, CSS, JavaScript and React.',
      'Projects: e-commerce storefront, calculator, to-do app and Connect Four.',
    ] },
]
