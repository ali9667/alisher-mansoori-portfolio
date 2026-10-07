import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const Arrow = () => <span className="arr" aria-hidden="true">↗</span>
export const Ghost = ({ children }: { children: ReactNode }) => <div className="ghost" aria-hidden="true">{children}</div>
export const Tag = ({ children }: { children: ReactNode }) => <span className="tag">{children}</span>

export function Btn({ href, to, dark = true, children, ext }: { href?: string; to?: string; dark?: boolean; children: ReactNode; ext?: boolean }) {
  const cls = `btn ${dark ? 'btn-dark' : 'btn-light'}`
  const inner = <span className="btn-in"><span>{children}</span><Arrow /></span>
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return <a className={cls} href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
}

/** Honest placeholder: clearly labelled, never styled like a real screenshot. */
export function Placeholder({ label, caption = 'Visual placeholder' }: { label: string; caption?: string }) {
  return (
    <div className="ph" role="img" aria-label={`${label}. ${caption}`}>
      <span className="ph-label">{label}</span>
      <span className="ph-cap">{caption}</span>
    </div>
  )
}
