export function AnimatedGridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          animation: 'grid-drift 28s linear infinite',
        }}
      />
    </div>
  )
}
