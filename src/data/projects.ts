export interface Project {
  slug: string; name: string; title: string; status: 'built' | 'building'; badge: string
  tags: string[]; stack: string[]; summary: string; features: string[]
  image?: string; imageAlt?: string; github?: string; live?: string
  architecture?: string[]; sections: { title: string; items: string[] }[]; challenges?: string[]; tradeoffs?: string[]; note?: string
}
export const projects: Project[] = [
  { slug: 'ticketguard', name: 'TicketGuard', title: 'Secure Ticketing & Digital Ticket Security Platform', status: 'built', badge: 'PROJECT',
    tags: ['Security', 'Full-Stack'], image: '/img/ticketguard.jpg', imageAlt: 'TicketGuard home page screenshot',
    stack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.IO'],
    summary: 'A secure ticketing platform covering event discovery, digital ticket wallets, ownership transfer and organizer inventory, with ticket verification and transactional check-in.',
    features: ['Event discovery', 'Digital ticket wallets', 'Ownership transfer', 'Organizer inventory', 'Ticket verification', 'Transactional ticket check-in', 'Credential rotation', 'Security / audit workflows'],
    github: 'https://github.com/ali9667/ticketguard',
    sections: [
      { title: 'Backend & APIs', items: ['Node.js and Express.js API written in TypeScript', 'Zod request validation', 'Server-side authorization on every protected operation', 'Ticket verification and ownership-transfer flows'] },
      { title: 'Data layer', items: ['PostgreSQL accessed through Prisma', 'Redis and BullMQ are part of the stack'] },
      { title: 'Security', items: ['JWT authentication with rotating hashed refresh tokens', 'Role-based access control (RBAC)', 'Argon2id password hashing', 'Credential rotation and security / audit workflows'] },
      { title: 'Concurrency & reliability', items: ['Transactional ticket check-in', 'Dedicated concurrency tests'] },
      { title: 'Testing', items: ['Unit, integration, security and concurrency tests', '108 / 108 backend tests passing'] },
      { title: 'Deployment & status', items: ['Source code is available on GitHub'] },
    ],
  },
  { slug: 'nodepattern', name: 'NodePattern', title: 'Device Fleet Management & Real-Time Operations Platform', status: 'building', badge: 'BUILDING',
    tags: ['Distributed', 'Real-time'],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'MQTT', 'WebSockets', 'Docker'],
    summary: 'A device fleet management and real-time operations platform. This project is still being built — it is not finished.',
    features: ['Device registration', 'Telemetry ingestion', 'Live device state', 'Remote command execution', 'MQTT communication', 'WebSocket dashboard', 'BullMQ / Redis asynchronous processing', 'Retries and idempotency', 'Offline-device handling', 'Failure recovery'],
    note: 'Status: building. No screenshots exist yet; the visual below is an illustrative architecture diagram, not the product.',
    sections: [
      { title: 'Backend & APIs', items: ['Node.js and Express.js API written in TypeScript', 'Device registration', 'Remote command execution'] },
      { title: 'Distributed & real-time', items: ['MQTT communication with devices', 'Telemetry ingestion and live device state', 'WebSocket dashboard'] },
      { title: 'Data & queues', items: ['PostgreSQL accessed through Prisma', 'Redis and BullMQ for asynchronous processing'] },
      { title: 'Reliability', items: ['Retries and idempotency', 'Offline-device handling', 'Failure recovery'] },
      { title: 'Deployment & status', items: ['Docker is part of the stack', 'Currently being built — not presented as finished'] },
    ],
  },
  { slug: 'templatos', name: 'Templatos', title: 'UI Ecosystem + AI Content Studio', status: 'built', badge: 'PROJECT',
    tags: ['UI', 'AI'], image: '/img/templatos.jpg', imageAlt: 'Templatos home page screenshot',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Zod', 'OpenRouter', 'Vitest'],
    summary: 'A set of reusable interface templates with live previews and code, plus an AI Studio that generates platform-specific bios from a person’s own details.',
    features: ['Reusable UI components, widgets, blocks and layouts', 'Documentation with live previews', 'AI content generation via server-side requests', 'Structured validation and output normalization', 'Platform-specific limits', 'Editable generated output with previews'],
    architecture: ['User', 'AI Studio', 'Zod validation', 'Structured prompt', 'OpenRouter', 'Output cleaning', 'Platform-limit handling', 'Editable result'],
    sections: [
      { title: 'Backend & APIs', items: ['AI requests are made server-side from Next.js', 'Zod validation of input and structured prompts', 'Output cleaning and normalization', 'Platform-specific length limits'] },
      { title: 'Frontend', items: ['Reusable components, widgets, blocks and layouts', 'Documentation with live previews and code', 'Editable generated output with previews'] },
      { title: 'Security & reliability', items: ['API keys remain server-side', 'Bounded timeout and bounded retries', 'Sanitized errors', 'Optional Upstash Redis IP rate limiting'] },
      { title: 'Testing', items: ['Automated AI pipeline tests with Vitest'] },
    ],
  },
  { slug: 'solarinvest', name: 'SolarInvest', title: 'Community Solar Investment Platform', status: 'built', badge: 'LIVE',
    tags: ['Fintech', 'Full-Stack'], image: '/img/solarinvest.jpg', imageAlt: 'SolarInvest dashboard screenshot',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    summary: 'A community solar investment platform with investment flows, portfolio tracking and transaction processing.',
    features: ['Investment flows', 'Portfolio tracking', 'Transaction processing', 'Controller-Service-Repository architecture', 'Server-side ROI calculations'],
    github: 'https://github.com/ali9667/solarinvest', live: 'https://solarinvest-alpha.vercel.app',
    sections: [
      { title: 'Backend & APIs', items: ['Node.js and Express API', 'Controller-Service-Repository architecture', 'Server-side ROI calculations'] },
      { title: 'Data layer', items: ['MongoDB accessed through Mongoose'] },
      { title: 'Security', items: ['JWT authentication with RBAC', 'Protection for financial operations'] },
      { title: 'Deployment & status', items: ['Live deployment available', 'Source code is available on GitHub'] },
    ],
  },
]
