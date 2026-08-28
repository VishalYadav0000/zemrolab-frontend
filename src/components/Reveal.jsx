import { useEffect, useRef, useState } from 'react'

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const baseClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
