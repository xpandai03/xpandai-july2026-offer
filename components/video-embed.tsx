type VideoEmbedProps = {
  /** The embed snippet as the video host provides it. Only pass constants from lib/offer-data.ts. */
  html: string
  /** Accessible name for the video region, since the host snippet has no iframe title. */
  label: string
  className?: string
}

/** Frames a third-party video embed in a rounded card. The snippet is rendered unchanged. */
export function VideoEmbed({ html, label, className = "" }: VideoEmbedProps) {
  return (
    <div
      role="region"
      aria-label={label}
      className={`overflow-hidden rounded-2xl border shadow-xl ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
