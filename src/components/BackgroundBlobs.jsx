function BackgroundBlobs({ variant = 'default' }) {
  const [colorA, colorB] = variant === 'alt'
    ? ['bg-amber-300/40', 'bg-rose-300/35']
    : ['bg-emerald-300/40', 'bg-amber-200/40']

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`animate-blob absolute -left-32 top-1/4 h-80 w-80 rounded-full ${colorA} blur-3xl`} />
      <div className={`animate-blob-delay absolute -right-32 bottom-0 h-96 w-96 rounded-full ${colorB} blur-3xl`} />
    </div>
  )
}

export default BackgroundBlobs
