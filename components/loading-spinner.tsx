export function LoadingSpinner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${className}`}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
