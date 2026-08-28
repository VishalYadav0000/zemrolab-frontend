import { useEffect, useRef, useState } from 'react'

function Typewriter({ text, as: Tag = 'span', className = '', speed = 45, startDelay = 0 }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVisibleCount(text.length)
      return
    }

    let intervalId
    const delayId = setTimeout(() => {
      let i = 0
      intervalId = setInterval(() => {
        i += 1
        setVisibleCount(i)
        if (i >= text.length) clearInterval(intervalId)
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(delayId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [started, text, speed, startDelay])

  const isDone = visibleCount >= text.length

  return (
    <Tag ref={ref} className={className}>
      <span aria-hidden="true">
        {text.slice(0, visibleCount)}
        <span className="typewriter-cursor" style={{ opacity: isDone ? undefined : 1 }}>
          |
        </span>
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  )
}

export default Typewriter
