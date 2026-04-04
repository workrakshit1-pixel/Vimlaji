import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    const onEnter = () => ring.classList.add('hovered')
    const onLeave = () => ring.classList.remove('hovered')

    document.addEventListener('mousemove', onMove)
    const links = document.querySelectorAll('a, button, [data-hover]')
    links.forEach(l => { l.addEventListener('mouseenter', onEnter); l.addEventListener('mouseleave', onLeave) })
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="cursor">
      <div ref={dotRef} className="cursor-dot fixed" />
      <div ref={ringRef} className="cursor-ring fixed" />
    </div>
  )
}
