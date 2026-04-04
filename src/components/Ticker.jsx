const items = [
  '✦ Trained & Verified Staff','✦ Arrives in Under 30 Minutes','✦ Affordable Hourly Rates',
  '✦ Cleaning','✦ Laundry & Ironing',
  '✦ Kitchen Prep','✦ Book Instantly via WhatsApp','✦ 5-Star Rated Service',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="relative z-[2] overflow-hidden border-y border-[rgba(0,184,204,0.2)] bg-[linear-gradient(90deg,#00b8cc,#0099aa)] py-[13px]">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-8 font-body text-[13px] font-medium tracking-[0.3px] text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
