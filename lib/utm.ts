/** The campaign parameters we capture and forward. Order is the order they appear in URLs. */
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const

export type UtmKey = (typeof UTM_KEYS)[number]
export type Utm = Partial<Record<UtmKey, string>>

/** First touch survives across visits; last touch lasts for the tab session. */
const FIRST_TOUCH_KEY = "xp_utm_first"
const LAST_TOUCH_KEY = "xp_utm_last"

/** Pull UTM parameters out of a query string. Empty values are ignored. */
export function parseUtm(search: string): Utm {
  const params = new URLSearchParams(search)
  const utm: Utm = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim()
    if (value) utm[key] = value
  }
  return utm
}

function hasUtm(utm: Utm): boolean {
  return Object.keys(utm).length > 0
}

// Storage can be missing or throw (in-app browsers, private mode, blocked site data).
// Every read and write goes through these so a failure never breaks a page or a CTA.
function readStored(storage: () => Storage, key: string): Utm {
  try {
    const raw = storage().getItem(key)
    return raw ? (JSON.parse(raw) as Utm) : {}
  } catch {
    return {}
  }
}

function writeStored(storage: () => Storage, key: string, utm: Utm) {
  try {
    storage().setItem(key, JSON.stringify(utm))
  } catch {
    // Ignore: attribution degrades to the current URL only.
  }
}

/**
 * Record the UTMs on the current URL. First touch is written once and kept;
 * last touch is overwritten on every tagged landing in this tab.
 */
export function captureUtm(search: string) {
  const utm = parseUtm(search)
  if (!hasUtm(utm)) return
  if (!hasUtm(readStored(() => window.localStorage, FIRST_TOUCH_KEY))) {
    writeStored(() => window.localStorage, FIRST_TOUCH_KEY, utm)
  }
  writeStored(() => window.sessionStorage, LAST_TOUCH_KEY, utm)
}

/**
 * The UTMs to attribute an action to: the current URL if it is tagged, else
 * this session's last touch, else the visitor's first touch. Client only.
 */
export function getUtm(): Utm {
  if (typeof window === "undefined") return {}
  const fromUrl = parseUtm(window.location.search)
  if (hasUtm(fromUrl)) return fromUrl
  const lastTouch = readStored(() => window.sessionStorage, LAST_TOUCH_KEY)
  if (hasUtm(lastTouch)) return lastTouch
  return readStored(() => window.localStorage, FIRST_TOUCH_KEY)
}

/** Query string (with leading "?") carrying `extra` first, then the stored UTMs. */
export function utmQuery(extra: Record<string, string> = {}): string {
  const params = new URLSearchParams(extra)
  const utm = getUtm()
  for (const key of UTM_KEYS) {
    const value = utm[key]
    if (value) params.set(key, value)
  }
  const query = params.toString()
  return query ? `?${query}` : ""
}
