const items = [
  'Download the VimlaJi App',
  'Hourly househelp slots',
  'Secure online payments',
  'Real-time booking updates',
  'Verified helpers',
  'Pathankot live now',
  'More cities coming soon',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="relative z-[2] overflow-hidden border-y border-[rgba(69,238,255,0.28)] bg-[linear-gradient(90deg,#0a3540,#08aeca,#45eeff,#08aeca,#0a3540)] py-[13px]">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="whitespace-nowrap px-8 font-body text-[13px] font-bold tracking-[0.3px] text-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
