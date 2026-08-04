import { useEffect, useMemo, useState } from 'react'

const pages = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    file: '/legal/privacy_policy.md',
  },
  terms: {
    eyebrow: 'Terms & Conditions',
    title: 'Terms & Conditions',
    file: '/legal/terms_and_conditions.md',
  },
}

function parseMarkdown(markdown) {
  const lines = markdown.split('\n')
  const blocks = []
  let list = []

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: 'list', items: list })
      list = []
    }
  }

  lines.forEach((rawLine) => {
    const line = rawLine.trim()
    if (!line) {
      flushList()
      return
    }

    if (line.startsWith('# ')) {
      flushList()
      blocks.push({ type: 'h1', text: line.replace(/^# /, '') })
      return
    }

    if (line.startsWith('## ')) {
      flushList()
      blocks.push({ type: 'h2', text: line.replace(/^## /, '') })
      return
    }

    if (line.startsWith('- ')) {
      list.push(line.replace(/^- /, ''))
      return
    }

    flushList()
    blocks.push({ type: 'p', text: line })
  })

  flushList()
  return blocks
}

function renderText(text) {
  return text.split('  ').map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < text.split('  ').length - 1 ? <br /> : null}
    </span>
  ))
}

export default function LegalPage({ page = 'privacy' }) {
  const config = pages[page] ?? pages.privacy
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    fetch(config.file)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load policy')
        return response.text()
      })
      .then((text) => {
        if (active) setContent(text)
      })
      .catch(() => {
        if (active) setContent(`# ${config.title}\n\nThis policy is being updated. Please contact VimlaJi support for details.`)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [config.file, config.title])

  const blocks = useMemo(() => parseMarkdown(content), [content])

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eefdff_0%,#ffffff_45%,#effdff_100%)] pt-[118px]">
      <section className="relative overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div className="pointer-events-none absolute -right-28 top-20 h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(69,238,255,0.2),transparent_70%)]" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(8,174,202,0.1),transparent_70%)]" />

        <div className="app-container relative">
          <a href="/#" className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(69,238,255,0.34)] bg-white px-4 py-2 font-body text-sm font-black text-[var(--cyan-deep)] shadow-[0_12px_30px_rgba(69,238,255,0.12)] transition-all hover:-translate-y-0.5">
            <span aria-hidden="true">←</span>
            Back to home
          </a>

          <div className="mb-8 rounded-[36px] border border-[rgba(69,238,255,0.28)] bg-white/90 p-7 shadow-[0_26px_70px_rgba(10,53,64,0.1)] backdrop-blur sm:p-10">
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[3px] text-[var(--cyan-deep)]">
              VimlaJi Legal
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] font-black leading-[1] tracking-[-1px] text-[#0a3540]">
              {config.eyebrow}
            </h1>
            <p className="mt-4 max-w-[720px] font-body text-base font-light leading-[1.8] text-[var(--text-muted)]">
              This page uses the same policy content shown inside the VimlaJi app, so customers can review it before downloading or booking.
            </p>
          </div>

          <article className="rounded-[34px] border border-[rgba(69,238,255,0.24)] bg-white p-6 shadow-[0_18px_54px_rgba(10,53,64,0.08)] sm:p-9 lg:p-12">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="h-5 animate-pulse rounded-full bg-[rgba(69,238,255,0.18)]" />
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-[900px]">
                {blocks.map((block, index) => {
                  if (block.type === 'h1') {
                    return (
                      <h2 key={index} className="mb-3 font-display text-[30px] font-black leading-[1.15] text-[#0a3540] sm:text-[38px]">
                        {block.text}
                      </h2>
                    )
                  }

                  if (block.type === 'h2') {
                    return (
                      <h3 key={index} className="mb-3 mt-9 font-display text-[23px] font-black leading-[1.2] text-[#0a3540] sm:text-[28px]">
                        {block.text}
                      </h3>
                    )
                  }

                  if (block.type === 'list') {
                    return (
                      <ul key={index} className="mb-5 space-y-2.5 pl-1">
                        {block.items.map((item) => (
                          <li key={item} className="flex gap-3 font-body text-[15px] font-light leading-[1.75] text-[var(--text-muted)]">
                            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#08aeca]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  return (
                    <p key={index} className="mb-4 font-body text-[15px] font-light leading-[1.85] text-[var(--text-muted)]">
                      {renderText(block.text)}
                    </p>
                  )
                })}
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  )
}
