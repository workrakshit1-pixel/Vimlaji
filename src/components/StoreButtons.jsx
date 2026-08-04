const storeLinks = {
  playStore: 'https://play.google.com/store/apps/details?id=com.vimlaji.app',
  appStore: 'https://apps.apple.com/us/app/vimlaji/id6788829257',
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M16.5 13.1c0-2.48 2.06-3.67 2.16-3.73-1.18-1.72-2.98-1.95-3.6-1.97-1.52-.16-2.99.9-3.76.9-.8 0-2-.88-3.29-.85-1.68.03-3.25.99-4.11 2.5-1.77 3.07-.45 7.58 1.25 10.06.85 1.22 1.84 2.58 3.13 2.53 1.26-.05 1.73-.81 3.25-.81 1.5 0 1.94.81 3.26.78 1.35-.02 2.2-1.22 3.02-2.45.98-1.4 1.37-2.78 1.39-2.85-.03-.01-2.67-1.02-2.7-4.11ZM14.07 5.78c.68-.85 1.15-2 1.02-3.14-.99.04-2.23.69-2.94 1.52-.63.72-1.2 1.91-1.05 3.03 1.12.09 2.26-.56 2.97-1.41Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.2 2.58c-.3.32-.47.82-.47 1.47v15.9c0 .66.17 1.16.49 1.48l.06.05 8.91-8.91v-.2L4.26 2.53l-.06.05Zm11.96 6.95L6.15 3.85l7.85 7.85 2.16-2.17Zm-2.16 2.77-7.86 7.86 10.02-5.69L14 12.3Zm3.52-1.99-2.44 2.44 2.44 2.44 1.93-1.09c1.22-.69 1.22-1.82 0-2.51l-1.93-1.28Z" />
    </svg>
  )
}

export default function StoreButtons({ compact = false, className = '' }) {
  const base = compact
    ? 'px-4 py-2.5 text-xs sm:text-sm'
    : 'px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-[15px]'

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={storeLinks.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2.5 rounded-full bg-[#0a3540] ${base} font-body font-bold text-white shadow-[0_14px_34px_rgba(10,53,64,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#062a33]`}
      >
        <PlayIcon />
        <span>Get it on Play Store</span>
      </a>
      <a
        href={storeLinks.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2.5 rounded-full border border-[rgba(10,53,64,0.14)] bg-white ${base} font-body font-bold text-[#0a3540] shadow-[0_14px_34px_rgba(69,238,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(69,238,255,0.8)]`}
      >
        <AppleIcon />
        <span>Download on App Store</span>
      </a>
    </div>
  )
}
