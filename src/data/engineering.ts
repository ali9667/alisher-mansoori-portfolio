export interface Engineering { title: string; text: string; image?: string; placeholder?: string }
export const engineering: Engineering[] = [
  { title: 'Full-Stack Engineering', text: 'End-to-end products: React and Next.js interfaces on Node.js services, backed by PostgreSQL or MongoDB. Seen in TicketGuard, Templatos and SolarInvest.', image: '/img/ticketguard.jpg' },
  { title: 'Backend & API Engineering', text: 'REST APIs with JWT authentication, RBAC, centralized request validation and error handling, structured as Controller-Service-Repository with server-side business logic.', image: '/img/solarinvest.jpg' },
  { title: 'Distributed & Real-Time Systems', text: 'Redis and BullMQ queues, MQTT and WebSocket communication, retries, idempotency and offline-device handling. Being built in NodePattern.', placeholder: 'QUEUES · MQTT · WEBSOCKETS' },
  { title: 'Security & Reliable Software', text: 'Rotating hashed refresh tokens, Argon2id, server-side authorization, transactional operations, and unit, integration, security and concurrency tests (108/108 backend tests passing in TicketGuard).', placeholder: 'SECURITY · TESTING' },
]
