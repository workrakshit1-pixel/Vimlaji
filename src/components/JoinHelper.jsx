import { useMemo, useState } from 'react'

const projectId = 'vimlaji-515f5'
const endpoint = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/helperApplications`

const copy = {
  en: {
    eyebrow: 'Join VimlaJi',
    title: 'Want to work with VimlaJi?',
    subtitle: 'Share your details. Our team will contact you shortly for helper onboarding, training, and work opportunities.',
    nameLabel: 'Full name',
    namePlaceholder: 'Enter your name',
    phoneLabel: 'Mobile number',
    phonePlaceholder: '10 digit mobile number',
    submit: 'Submit application',
    submitting: 'Submitting...',
    successTitle: 'Thank you.',
    success: 'Our team will contact you shortly.',
    error: 'Please enter a valid name and 10 digit mobile number.',
    badgeOne: 'Training support',
    badgeTwo: 'Monthly work plans',
    badgeThree: 'Respectful work culture',
  },
  hi: {
    eyebrow: 'VimlaJi से जुड़ें',
    title: 'क्या आप VimlaJi में काम करना चाहते हैं?',
    subtitle: 'अपनी जानकारी भरें। हमारी टीम helper onboarding, training और काम के अवसरों के लिए आपसे जल्द संपर्क करेगी।',
    nameLabel: 'पूरा नाम',
    namePlaceholder: 'अपना नाम लिखें',
    phoneLabel: 'मोबाइल नंबर',
    phonePlaceholder: '10 अंकों का मोबाइल नंबर',
    submit: 'जानकारी भेजें',
    submitting: 'भेजा जा रहा है...',
    successTitle: 'धन्यवाद।',
    success: 'हमारी टीम आपसे जल्द संपर्क करेगी।',
    error: 'कृपया सही नाम और 10 अंकों का मोबाइल नंबर डालें।',
    badgeOne: 'Training support',
    badgeTwo: 'Monthly work plans',
    badgeThree: 'सम्मानजनक काम',
  },
}

function firestoreString(value) {
  return { stringValue: value }
}

export default function JoinHelper() {
  const [language, setLanguage] = useState('hi')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const t = copy[language]
  const normalizedPhone = useMemo(() => phone.replace(/\D/g, '').slice(-10), [phone])

  const onPhoneChange = (event) => {
    setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))
  }

  const submit = async (event) => {
    event.preventDefault()
    const trimmedName = name.trim()

    if (trimmedName.length < 2 || normalizedPhone.length !== 10) {
      setStatus('error')
      setMessage(t.error)
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            name: firestoreString(trimmedName),
            phone: firestoreString(`+91${normalizedPhone}`),
            language: firestoreString(language),
            status: firestoreString('new'),
            source: firestoreString('website'),
            createdAt: { timestampValue: new Date().toISOString() },
          },
        }),
      })

      if (!response.ok) throw new Error('Could not submit application')

      setStatus('success')
      setMessage(t.success)
      setName('')
      setPhone('')
    } catch (_) {
      setStatus('error')
      setMessage(language === 'hi' ? 'जानकारी भेजने में समस्या आई। कृपया दोबारा कोशिश करें।' : 'Could not submit right now. Please try again.')
    }
  }

  return (
    <section id="join-helper" className="relative overflow-hidden bg-white py-[90px] lg:py-[110px]">
      <div className="pointer-events-none absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(69,238,255,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(8,174,202,0.1),transparent_70%)]" />

      <div className="app-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
          <div className="reveal relative overflow-hidden rounded-[38px] border border-[rgba(69,238,255,0.3)] bg-[linear-gradient(145deg,#effdff,#ffffff)] p-4 shadow-[0_28px_74px_rgba(10,53,64,0.1)]">
            <div className="relative h-[430px] overflow-hidden rounded-[30px] bg-[#dffaff] sm:h-[520px]">
              <img
                src="/app/services/general_homehelp.png"
                alt="VimlaJi helper"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,53,64,0)_45%,rgba(10,53,64,0.42)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white bg-white/96 p-5 shadow-[0_18px_44px_rgba(10,53,64,0.2)] backdrop-blur-xl">
                <div className="mb-2 font-display text-[28px] font-black leading-none text-[#0a3540]">VimlaJi Helpers</div>
                <p className="font-body text-sm font-bold leading-[1.65] text-[#155566]">
                  Professional onboarding, simple work flow, and a respectful home-service platform.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2 rounded-[38px] border border-[rgba(69,238,255,0.32)] bg-[linear-gradient(145deg,#ffffff_0%,#effdff_100%)] p-6 shadow-[0_28px_74px_rgba(10,53,64,0.09)] sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[3px] text-[var(--cyan-deep)]">
                {t.eyebrow}
              </div>
              <div className="rounded-full border border-[rgba(69,238,255,0.4)] bg-white p-1 shadow-[0_10px_28px_rgba(69,238,255,0.14)]">
                {[
                  ['hi', 'हिंदी'],
                  ['en', 'English'],
                ].map(([code, label]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    className={`rounded-full px-4 py-2 font-body text-xs font-black transition-all ${
                      language === code ? 'bg-[linear-gradient(135deg,#45eeff,#08aeca)] text-[#07313b]' : 'text-[var(--text-muted)] hover:text-[var(--cyan-deep)]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] tracking-[-0.6px] text-[#0a3540]">
              {t.title}
            </h2>
            <p className="mt-4 max-w-[600px] font-body text-base font-light leading-[1.8] text-[var(--text-muted)]">
              {t.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[t.badgeOne, t.badgeTwo, t.badgeThree].map((badge) => (
                <span key={badge} className="rounded-full border border-[rgba(69,238,255,0.34)] bg-white px-3.5 py-2 font-body text-xs font-black text-[var(--cyan-deep)] shadow-[0_8px_22px_rgba(69,238,255,0.1)]">
                  {badge}
                </span>
              ))}
            </div>

            {status === 'success' ? (
              <div className="mt-8 rounded-[30px] border border-[rgba(69,238,255,0.42)] bg-white p-6 text-center shadow-[0_18px_48px_rgba(69,238,255,0.14)]">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#45eeff,#08aeca)] text-[#07313b]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-black text-[#0a3540]">{t.successTitle}</h3>
                <p className="mt-2 font-body text-sm font-semibold text-[var(--text-muted)]">{message}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-4">
                <label className="block">
                  <span className="mb-2 block font-body text-sm font-black text-[#0a3540]">{t.nameLabel}</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full rounded-[22px] border border-[rgba(69,238,255,0.38)] bg-white px-5 py-4 font-body text-base font-semibold text-[#0a3540] outline-none transition-all placeholder:text-[var(--text-dim)] focus:border-[#08aeca] focus:shadow-[0_0_0_4px_rgba(69,238,255,0.18)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-body text-sm font-black text-[#0a3540]">{t.phoneLabel}</span>
                  <div className="flex overflow-hidden rounded-[22px] border border-[rgba(69,238,255,0.38)] bg-white focus-within:border-[#08aeca] focus-within:shadow-[0_0_0_4px_rgba(69,238,255,0.18)]">
                    <div className="grid min-w-[70px] place-items-center border-r border-[rgba(69,238,255,0.22)] bg-[rgba(69,238,255,0.1)] font-body text-base font-black text-[#0a3540]">
                      +91
                    </div>
                    <input
                      value={phone}
                      onChange={onPhoneChange}
                      inputMode="numeric"
                      placeholder={t.phonePlaceholder}
                      className="w-full border-0 bg-transparent px-5 py-4 font-body text-base font-semibold text-[#0a3540] outline-none placeholder:text-[var(--text-dim)]"
                    />
                  </div>
                </label>

                {status === 'error' ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 font-body text-sm font-semibold text-red-600">
                    {message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-full bg-[linear-gradient(135deg,#45eeff,#08aeca)] px-6 py-4 font-body text-base font-black text-[#07313b] shadow-[0_16px_36px_rgba(69,238,255,0.32)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(69,238,255,0.44)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
