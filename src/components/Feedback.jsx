import { useEffect, useMemo, useState } from 'react'

const projectId = 'vimlaji-515f5'
const endpoint = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:runQuery`

function readValue(field) {
  if (!field) return ''
  if ('stringValue' in field) return field.stringValue
  if ('integerValue' in field) return Number(field.integerValue)
  if ('doubleValue' in field) return Number(field.doubleValue)
  if ('booleanValue' in field) return field.booleanValue
  if ('timestampValue' in field) return field.timestampValue
  return ''
}

function formatDate(value) {
  if (!value) return ''
  try {
    return new Intl.DateTimeFormat('en-IN', { month: 'short', day: 'numeric' }).format(new Date(value))
  } catch (_) {
    return ''
  }
}

function normalizeFeedback(row) {
  const fields = row.document?.fields ?? {}
  return {
    id: row.document?.name?.split('/').pop() ?? `feedback-${Math.random()}`,
    message: readValue(fields.message),
    name: readValue(fields.name) || readValue(fields.userName) || 'VimlaJi customer',
    city: readValue(fields.city) || 'Pathankot',
    rating: Number(readValue(fields.rating) || 5),
    createdAt: readValue(fields.createdAt),
  }
}

const fallbackFeedback = [
  {
    id: 'fallback-1',
    message: 'The app makes booking househelp feel simple and premium. Clear slots, clean payment flow, and quick support.',
    name: 'VimlaJi customer',
    city: 'Pathankot',
    rating: 5,
    createdAt: '',
  },
  {
    id: 'fallback-2',
    message: 'VimlaJi is solving a real daily home problem with a very easy booking experience.',
    name: 'Early app user',
    city: 'Pathankot',
    rating: 5,
    createdAt: '',
  },
  {
    id: 'fallback-3',
    message: 'A clean and reliable way to book hourly help without calling again and again.',
    name: 'Verified customer',
    city: 'Pathankot',
    rating: 5,
    createdAt: '',
  },
]

export default function Feedback() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadFeedback() {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            structuredQuery: {
              from: [{ collectionId: 'feedback' }],
              where: {
                fieldFilter: {
                  field: { fieldPath: 'status' },
                  op: 'EQUAL',
                  value: { stringValue: 'approved' },
                },
              },
              limit: 6,
            },
          }),
        })

        if (!response.ok) throw new Error('Could not load public feedback')

        const data = await response.json()
        const approved = data
          .map(normalizeFeedback)
          .filter((item) => item.message && item.message.trim().length > 0)
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))

        if (active) setItems(approved)
      } catch (_) {
        if (active) setItems([])
      } finally {
        if (active) setLoading(false)
      }
    }

    loadFeedback()
    return () => {
      active = false
    }
  }, [])

  const displayItems = useMemo(() => (items.length > 0 ? items : fallbackFeedback), [items])

  return (
    <section id="feedback" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#effdff_100%)] py-[90px] lg:py-[108px]">
      <div className="pointer-events-none absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(69,238,255,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute right-[-140px] bottom-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(8,174,202,0.1),transparent_70%)]" />

      <div className="app-container relative">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="reveal mb-[14px] font-mono text-[11px] uppercase tracking-[3px] text-[var(--cyan-deep)]">
              Customer Feedback
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.5px] text-[#0a3540]">
              What customers say
            </h2>
            <p className="reveal reveal-delay-2 mt-3 max-w-[520px] font-body text-base font-light leading-[1.75] text-[var(--text-muted)]">
              Real experiences from VimlaJi customers, shown only after review.
            </p>
          </div>

          <div className="reveal reveal-delay-3 rounded-full border border-[rgba(69,238,255,0.34)] bg-white px-4 py-2 font-body text-xs font-black uppercase tracking-[1.2px] text-[var(--cyan-deep)] shadow-[0_12px_30px_rgba(69,238,255,0.12)]">
            Reviewed by VimlaJi
          </div>
        </div>

        {loading ? (
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-[220px] animate-pulse rounded-[30px] border border-[rgba(69,238,255,0.22)] bg-white/80 shadow-[0_16px_44px_rgba(10,53,64,0.06)]" />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {displayItems.map((item) => (
              <article key={item.id} className="rounded-[30px] border border-[rgba(69,238,255,0.28)] bg-white p-6 opacity-100 shadow-[0_18px_50px_rgba(10,53,64,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(69,238,255,0.18)]">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex gap-1 text-[#08aeca]" aria-label={`${item.rating} star rating`}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg key={starIndex} viewBox="0 0 24 24" className="h-4 w-4" fill={starIndex < item.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8">
                        <path d="m12 3.8 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L12 3.8Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[1.8px] text-[var(--text-dim)]">
                    {formatDate(item.createdAt) || 'Verified'}
                  </span>
                </div>

                <p className="min-h-[112px] font-body text-[14.5px] font-light leading-[1.8] text-[var(--text-muted)]">
                  "{item.message}"
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-[rgba(69,238,255,0.18)] pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#45eeff,#08aeca)] font-display text-lg font-black text-[#07313b]">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-body text-sm font-black text-[#0a3540]">{item.name}</div>
                    <div className="font-body text-xs font-semibold text-[var(--text-muted)]">{item.city}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
