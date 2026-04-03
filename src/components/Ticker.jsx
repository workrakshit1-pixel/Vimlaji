const items = [
  '✦ Trained & Verified Staff','✦ Arrives in Under 30 Minutes','✦ Affordable Hourly Rates',
  '✦ Cleaning','✦ Laundry & Ironing',
  '✦ Kitchen Prep','✦ Book Instantly via WhatsApp','✦ 5-Star Rated Service',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', background: 'linear-gradient(90deg, #00b8cc, #0099aa)', padding: '13px 0', borderTop: '1px solid rgba(0,184,204,0.2)', borderBottom: '1px solid rgba(0,184,204,0.2)', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'flex', gap: 0, width: 'max-content', animation: 'ticker 30s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: '#ffffff', whiteSpace: 'nowrap', padding: '0 32px', letterSpacing: '0.3px' }}>{item}</span>
        ))}
      </div>
    </div>
  )
}
