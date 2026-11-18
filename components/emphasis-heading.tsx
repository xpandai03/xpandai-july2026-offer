type EmphasisHeadingProps = {
  as?: "h1" | "h2"
  /** Heading text. Words wrapped in *asterisks* render as italic serif, like the titles in the hero video. */
  text: string
  className?: string
  /** Color for the italic words. Defaults to the accent blue; dark bands pass a lighter tone. */
  accentClassName?: string
}

/** Bold sans heading with italic serif emphasis, for example "How it *works*". */
export function EmphasisHeading({
  as: Tag = "h2",
  text,
  className = "",
  accentClassName = "text-primary",
}: EmphasisHeadingProps) {
  const parts = text.split(/(\*[^*]+\*)/).filter(Boolean)

  return (
    <Tag className={`font-sans font-bold tracking-tight text-balance ${className}`}>
      {parts.map((part, index) =>
        part.startsWith("*") && part.endsWith("*") ? (
          // Cormorant sits small next to DM Sans at the same size, so the italic words are scaled up slightly.
          <em key={index} className={`font-serif font-medium italic text-[1.12em] leading-none ${accentClassName}`}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </Tag>
  )
}
