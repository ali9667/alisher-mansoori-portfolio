/** Illustrative architecture visual for NodePattern (no real screenshots exist). */
const nodes = ['Devices', 'MQTT', 'Ingestion', 'BullMQ · Redis', 'PostgreSQL', 'WS dashboard']
export default function ArchDiagram() {
  const w = 150, g = 34
  return (
    <figure className="arch">
      <svg viewBox={`0 0 ${nodes.length * (w + g)} 150`} role="img" aria-label="Illustrative architecture: devices, MQTT, ingestion, BullMQ and Redis, PostgreSQL, WebSocket dashboard">
        {nodes.map((n, i) => (
          <g key={n} transform={`translate(${i * (w + g)},40)`}>
            <rect width={w} height="70" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x={w / 2} y="40" textAnchor="middle" fontSize="15" fill="currentColor" fontFamily="Manrope, sans-serif">{n}</text>
            {i < nodes.length - 1 && <path d={`M${w + 4} 35 H${w + g - 4}`} stroke="currentColor" strokeWidth="1.2" markerEnd="url(#a)" />}
          </g>
        ))}
        <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L7 4L0 8z" fill="currentColor" /></marker></defs>
      </svg>
      <figcaption>Illustrative architecture diagram — not a product screenshot.</figcaption>
    </figure>
  )
}
